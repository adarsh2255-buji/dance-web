// API Configuration for different environments
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? process.env.VITE_API_BASE_URL || 'https://dance-website-backend.onrender.com/'
  : 'http://localhost:5000';

export default API_BASE_URL;