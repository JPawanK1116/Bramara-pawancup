const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Basic Route
app.get('/api/health', (req, res) => {
    res.json({ status: 'Bramara Sarees API is running normally' });
});

// Import Routes
// const productRoutes = require('./routes/productRoutes');
// app.use('/api/products', productRoutes);

// Connect
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bramara_sarees';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
