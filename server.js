// ═══════════════════════════════════════════════════
//  AyuSutra Backend — Express.js REST API
//  Entry Point: server.js
// ═══════════════════════════════════════════════════
const express    = require('express');
const cors       = require('cors');
const dotenv     = require('dotenv');
const path       = require('path');

dotenv.config();
const app = express();

// ── Middleware ───────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve frontend statically with UTF-8 enforcement
app.use((req, res, next) => {
  if (req.url.endsWith('.html') || req.url.endsWith('.js') || req.url.endsWith('.css')) {
    res.setHeader('Content-Type', res.getHeader('Content-Type') || '');
    if (!res.getHeader('Content-Type').includes('charset')) {
      // Note: express.static sets the content type later, so we use a more robust way
    }
  }
  next();
});

app.use(express.static(path.join(__dirname, '../frontend'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.html') || path.endsWith('.js') || path.endsWith('.css')) {
      const currentType = res.getHeader('Content-Type');
      if (currentType && !currentType.includes('charset')) {
        res.setHeader('Content-Type', currentType + '; charset=UTF-8');
      } else if (!currentType) {
        // Fallback for different express versions
        if (path.endsWith('.html')) res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        if (path.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
        if (path.endsWith('.css')) res.setHeader('Content-Type', 'text/css; charset=UTF-8');
      }
    }
  }
}));

// ── Database Connection ──────────────────────────────
// Using Prisma ORM now


// ── Routes ───────────────────────────────────────────
app.use('/api/auth',      require('./routes/auth'));
app.use('/api/hospitals', require('./routes/hospitals'));
app.use('/api/blood-banks', require('./routes/bloodBanks'));
app.use('/api/diagnostics', require('./routes/diagnostics'));
app.use('/api/patients',  require('./routes/patients'));
app.use('/api/symptoms',  require('./routes/symptoms'));
app.use('/api/chatbot',   require('./routes/chatbot'));

// ── Health Check ─────────────────────────────────────
app.get('/api', (req, res) => res.json({
  status: 'AyuSutra API running ✅',
  version: '1.0.0',
  docs: 'See README.md for full API reference'
}));

// Send all other requests to the frontend index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ── 404 Handler ──────────────────────────────────────
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

// ── Error Handler ────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 AyuSutra API running on http://localhost:${PORT}`));
