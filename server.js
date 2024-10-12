const express = require('express');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/form', formRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
