// routes/diagnostics.js
const express   = require('express');
const router    = express.Router();
const { prisma } = require('../models');
const { searchNearbyDiagnostics } = require('../services/mappls');

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
    const { lat, lng, radius = 5 } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: 'lat and lng are required' });

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const radiusInKm = parseFloat(radius);

    let diagnostics = await prisma.diagnostic.findMany();
    
    diagnostics = diagnostics.map(d => ({
      ...d,
      distance: calculateDistance(latitude, longitude, d.lat, d.lng)
    }))
    .filter(d => d.distance <= radiusInKm)
    .sort((a, b) => a.distance - b.distance);

    res.json({ count: diagnostics.length, diagnostics });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/search', async (req, res) => {
  try {
    const { q, test } = req.query;
    let diagnostics = await prisma.diagnostic.findMany();

    if (q) diagnostics = diagnostics.filter(d => d.name.toLowerCase().includes(q.toLowerCase()));
    if (test) diagnostics = diagnostics.filter(d => 
      d.testsAvailable && JSON.stringify(d.testsAvailable).toLowerCase().includes(test.toLowerCase())
    );

    res.json({ count: diagnostics.length, diagnostics });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/nearby/live', async (req, res) => {
  try {
    const { lat, lng, radius = 5000 } = req.query;
    if (!lat || !lng) return res.status(400).json({ message: 'lat and lng are required' });
    const results = await searchNearbyDiagnostics(parseFloat(lat), parseFloat(lng), parseInt(radius));
    res.json({ count: results.length, diagnostics: results, source: 'mappls-live' });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
