// controllers/contentController.js
const axios = require('axios');
const Content = require('../models/content');

// Fetch content from the external API and save it to MongoDB
const fetchAndStoreContent = async (req, res, next) => {
    try {
        // Fetch content from the external API
        const response = await axios.get('https://geeks-for-geeks-api.vercel.app/arnoob16');
        const contentData = response.data;

        // Check if content already exists in the DB (to prevent duplicates)
        for (const item of contentData) {
            const existingContent = await Content.findOne({ title: item.title });
            if (!existingContent) {
                await Content.create({
                    title: item.title,
                    description: item.description,
                    link: item.link,
                });
            }
        }

        // Respond with the newly fetched content
        res.status(200).json(contentData);
    } catch (error) {
        next(error); // Pass errors to the error handling middleware
    }
};

// Get all stored content from MongoDB
const getAllContent = async (req, res, next) => {
    try {
        const content = await Content.find();
        res.status(200).json(content);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    fetchAndStoreContent,
    getAllContent,
};
