// routes/auth.js — User Registration & Login
const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const { prisma } = require('../models');
const { encrypt, decrypt } = require('../utils/encryption');

const sign = (id, email) =>
  jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, bloodGroup, dateOfBirth } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: 'name, email and password are required' });

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        phone: encrypt(phone),
        bloodGroup: encrypt(bloodGroup),
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null // Dates are hard to encrypt directly without converting to string, let's leave it as DateTime or we'd need to change schema.
      }
    });
    res.status(201).json({ token: sign(user.id, email), user: { id: user.id, name, email, bloodGroup } });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: 'Invalid email or password' });
    res.json({ token: sign(user.id, email), user: { id: user.id, name: user.name, email, bloodGroup: decrypt(user.bloodGroup) } });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
