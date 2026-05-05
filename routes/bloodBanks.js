// routes/bloodBanks.js
const express   = require('express');
const router    = express.Router();
const { prisma } = require('../models');
const { searchNearbyBloodBanks } = require('../services/mappls');

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

router.get('/nearby', async (req, res) => {
  try {
    const { lat, lng, radius = 10 } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: 'lat and lng are required' });

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const radiusInKm = parseFloat(radius);

    let bloodBanks = await prisma.bloodBank.findMany();
    
    bloodBanks = bloodBanks.map(bb => ({
      ...bb,
      distance: calculateDistance(latitude, longitude, bb.lat, bb.lng)
    }))
    .filter(bb => bb.distance <= radiusInKm)
    .sort((a, b) => a.distance - b.distance);

    res.json({ count: bloodBanks.length, bloodBanks });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/nearby/live', async (req, res) => {
  try {
    const { lat, lng, radius = 5000 } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: 'lat and lng are required' });
    const results = await searchNearbyBloodBanks(parseFloat(lat), parseFloat(lng), parseInt(radius));
    res.json({ count: results.length, bloodBanks: results, source: 'mappls-live' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
