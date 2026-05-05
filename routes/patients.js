// routes/patients.js
const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');
const { prisma } = require('../models');
const { protect } = require('../middleware/auth');
const { encrypt, decrypt } = require('../utils/encryption');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = process.env.UPLOAD_DIR || 'uploads';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random()*1e6)}`;
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({
  storage,
  limits: { fileSize: (parseInt(process.env.MAX_FILE_SIZE_MB) || 10) * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['.pdf','.jpg','.jpeg','.png'];
    if (allowed.includes(path.extname(file.originalname).toLowerCase())) cb(null, true);
    else cb(new Error('Only PDF, JPG, PNG files allowed'));
  }
});

// GET profile
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ 
      where: { id: req.user.id },
      select: { id: true, name: true, email: true, phone: true, dateOfBirth: true, bloodGroup: true, medicalNotes: true, allergies: true, createdAt: true }
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.phone = decrypt(user.phone);
    user.bloodGroup = decrypt(user.bloodGroup);
    user.medicalNotes = decrypt(user.medicalNotes);
    user.allergies = decrypt(user.allergies);
    res.json(user);
  } catch (err) { 
    console.error('Profile GET error:', err);
    res.status(500).json({ message: err.message }); 
  }
});

// UPDATE profile
router.put('/profile', protect, async (req, res) => {
  try {
    const { name, phone, bloodGroup, medicalNotes, allergies, dateOfBirth } = req.body;
    
    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        name,
        phone: encrypt(phone),
        bloodGroup: encrypt(bloodGroup),
        medicalNotes: encrypt(medicalNotes),
        allergies: encrypt(allergies),
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined
      }
    });

    res.json({ 
      message: 'Profile updated', 
      user: { 
        id: updated.id, 
        name: updated.name, 
        email: updated.email,
        phone: decrypt(updated.phone),
        bloodGroup: decrypt(updated.bloodGroup),
        medicalNotes: decrypt(updated.medicalNotes),
        allergies: decrypt(updated.allergies),
        dateOfBirth: updated.dateOfBirth
      } 
    });
  } catch (err) {
    console.error('Profile PUT error:', err);
    res.status(500).json({ message: err.message });
  }
});

// GET history
router.get('/history', protect, async (req, res) => {
  try {
    const { type } = req.query;
    const filter = { userId: req.user.id };
    if (type) filter.type = type;
    
    let history = await prisma.patientHistory.findMany({
      where: filter,
      orderBy: { date: 'desc' }
    });
    history = history.map(h => ({
      ...h,
      diagnosis: decrypt(h.diagnosis),
      notes: decrypt(h.notes)
    }));
    res.json({ count: history.length, history });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// POST history + optional file
router.post('/history', protect, upload.single('file'), async (req, res) => {
  try {
    const { type, date, doctorName, hospital, diagnosis, notes } = req.body;
    const entry = await prisma.patientHistory.create({
      data: {
        userId: req.user.id,
        type, 
        date: date ? new Date(date) : new Date(), 
        doctorName, 
        hospital, 
        diagnosis: encrypt(diagnosis), 
        notes: encrypt(notes),
        fileUrl: req.file ? `/${process.env.UPLOAD_DIR || 'uploads'}/${req.file.filename}` : null,
        fileName: req.file ? req.file.originalname : null,
      }
    });
    entry.diagnosis = decrypt(entry.diagnosis);
    entry.notes = decrypt(entry.notes);
    res.status(201).json(entry);
  } catch (err) { 
    console.error('History POST error:', err);
    res.status(400).json({ message: err.message }); 
  }
});

// POST AI summary for a record
router.post('/history/:id/summarize', protect, async (req, res) => {
  try {
    const record = await prisma.patientHistory.findFirst({ 
      where: { id: req.params.id, userId: req.user.id } 
    });
    if (!record) return res.status(404).json({ message: 'Record not found' });

    // Use global fetch or node-fetch
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307', // Fixed model name to claude-3-haiku
        max_tokens: 400,
        system: 'You are a medical record summarizer. Summarize in 3-4 bullet points. Note abnormal values. Always end with: Consult your doctor for medical advice.',
        messages: [{
          role: 'user',
          content: `Summarize: Type: ${record.type} | Doctor: ${record.doctorName} | Date: ${record.date} | Notes: ${decrypt(record.notes)}`
        }]
      })
    });

    const data = await response.json();
    const summary = data.content?.[0]?.text || 'Unable to generate summary.';
    
    await prisma.patientHistory.update({
      where: { id: record.id },
      data: { aiSummary: summary }
    });
    
    res.json({ summary });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// DELETE record
router.delete('/history/:id', protect, async (req, res) => {
  try {
    const entry = await prisma.patientHistory.findFirst({ 
      where: { id: req.params.id, userId: req.user.id } 
    });
    
    if (!entry) return res.status(404).json({ message: 'Record not found' });
    
    await prisma.patientHistory.delete({ where: { id: entry.id } });
    
    // Delete file if exists
    if (entry.fileUrl) {
      const filePath = path.join(__dirname, '..', entry.fileUrl);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    res.json({ message: 'Record deleted' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
