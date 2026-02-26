const express = require('express');
const router = express.Router();
const News = require('../models/News');

// GET /api/news - fetch all articles
router.get('/', async (req, res) => {
  try {
    const articles = await News.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/news - add new article
router.post('/', async (req, res) => {
  const { title, content, date } = req.body;
  const article = new News({ title, content, date });
  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
