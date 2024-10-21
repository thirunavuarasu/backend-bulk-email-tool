import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import recipientRoutes from './routes/recipientRoutes.js';
import templateRoutes from './routes/templateRoutes.js';
import emailRoutes from './routes/emailroutes.js';
import connectDB from './config/db.js';

dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/recipients', recipientRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/emails', emailRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





    
     