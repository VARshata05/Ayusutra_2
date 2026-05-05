// routes/hospitals.js
const express   = require('express');
const router    = express.Router();
const { prisma } = require('../models');
const { searchNearbyHospitals } = require('../services/mappls');

// Helper for distance calculation in JS
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Nearby — JS fallback for SQLite
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lng, radius = 5, speciality } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: 'lat and lng are required' });

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const radiusInKm = parseFloat(radius);

    let hospitals = await prisma.hospital.findMany();
    
    hospitals = hospitals.map(h => ({
      ...h,
      distance: calculateDistance(latitude, longitude, h.lat, h.lng)
    }))
    .filter(h => h.distance <= radiusInKm)
    .sort((a, b) => a.distance - b.distance);

    if (speciality) {
      hospitals = hospitals.filter(h => 
        h.specialities && JSON.stringify(h.specialities).toLowerCase().includes(speciality.toLowerCase())
      );
    }

    res.json({ count: hospitals.length, hospitals: hospitals.slice(0, 20) });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// Search
router.get('/search', async (req, res) => {
  try {
    const { q, district, speciality, scheme } = req.query;
    
    let hospitals = await prisma.hospital.findMany();

    if (q) {
      hospitals = hospitals.filter(h => h.name.toLowerCase().includes(q.toLowerCase()));
    }
    if (district) {
      hospitals = hospitals.filter(h => h.district?.toLowerCase().includes(district.toLowerCase()));
    }
    if (speciality) {
      hospitals = hospitals.filter(h => 
        h.specialities && JSON.stringify(h.specialities).toLowerCase().includes(speciality.toLowerCase())
      );
    }
    if (scheme) {
      hospitals = hospitals.filter(h => 
        h.schemesSupported && JSON.stringify(h.schemesSupported).toLowerCase().includes(scheme.toLowerCase())
      );
    }

    res.json({ count: hospitals.length, hospitals: hospitals.slice(0, 30) });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/:id', async (req, res) => {
  try {
    const h = await prisma.hospital.findUnique({ where: { id: req.params.id } });
    if (!h) return res.status(404).json({ message: 'Hospital not found' });
    res.json(h);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

// Real-time Mappls search
router.get('/nearby/live', async (req, res) => {
  try {
    const { lat, lng, radius = 5000 } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: 'lat and lng are required' });
    
    const results = await searchNearbyHospitals(parseFloat(lat), parseFloat(lng), parseInt(radius));
    res.json({ count: results.length, hospitals: results, source: 'mappls-live' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/', async (req, res) => {
  try {
    const h = await prisma.hospital.create({ data: req.body });
    res.status(201).json(h);
  } catch (err) { res.status(400).json({ message: err.message }); }
});

module.exports = router;
