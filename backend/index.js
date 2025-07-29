import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - more aggressive approach
app.use((req, res, next) => {
  // Allow all origins temporarily for debugging
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    res.status(200).end();
    return;
  }
  
  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Dance Website API is running!' });
});

// Test CORS route
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit');
  res.json({ message: 'CORS is working!', timestamp: new Date().toISOString() });
});

// Test POST route
app.post('/api/test', (req, res) => {
  console.log('Test POST endpoint hit');
  res.json({ message: 'POST CORS is working!', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
