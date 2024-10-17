import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import recipientRoutes from './routes/recipientRoutes.js';
import templateRoutes from './routes/templateRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/recipients', recipientRoutes);
app.use('/api/templates', templateRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
