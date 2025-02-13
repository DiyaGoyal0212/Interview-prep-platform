// routes/contentRoutes.js
const express = require('express');
const router = express.Router();
const contentController = require('../contollers/content');

// Route to fetch and store content from the external API
router.get('/fetch', contentController.fetchAndStoreContent);

// Route to get all the stored content from the database
router.get('/', contentController.getAllContent);

module.exports = router;
