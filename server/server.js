const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const questionRoutes = require('./routes/questionRoutes');
const router = require('./routes');

const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api",router);
app.use('/api/questions', questionRoutes);

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
    console.log("connected to db")
}).catch((err) => console.log('db error', err))

app.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`)
})