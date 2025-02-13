// models/contentModel.js
const mongoose = require('mongoose');

// Define the schema for the content
const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
});

// Create the model
const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
