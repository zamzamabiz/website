require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const rateLimit = require('express-rate-limit');

const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiter for API routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests, please try again later.' },
});

// Rate limiter for static page serving
const pageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/news', apiLimiter, newsRoutes);

// Serve static React build in production
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', pageLimiter, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chohan_commodities')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Start server without DB for development
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB)`));
  });

module.exports = app;
