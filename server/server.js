const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const questionRoutes = require('./routes/questionRoutes');
const router = require('./routes'); // Make sure this path is correct

const app = express();

// CORS Configuration (Crucial):
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173", // Use env variable or default for dev
        methods: ["GET", "POST", "PUT", "DELETE"], // Or the methods your frontend uses
        allowedHeaders: ["Content-Type", "Authorization", "Credentials"], // Add "Credentials" if needed
        credentials: true, // If using cookies/sessions, very important
    })
);


app.use(express.json());
app.use(cookieParser());

app.use("/api", router); // Make sure router is defined and imported correctly
app.use('/api/questions', questionRoutes); // Same for questionRoutes

const PORT = process.env.PORT || 8080; // Use environment variable or default

connectDB()
    .then(() => console.log("connected to db"))
    .catch((err) => console.error('db error', err)); // Use console.error for errors

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});