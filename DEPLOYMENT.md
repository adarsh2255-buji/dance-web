# 🚀 Dance Website Deployment Guide

## Backend Deployment (Render)

### 1. Prepare Backend for Deployment

1. **Create a `.env` file in backend folder:**
```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
```

2. **Update CORS in backend/index.js for production:**
```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.com'] 
    : ['http://localhost:3000'],
  credentials: true
}));
```

### 2. Deploy to Render

1. **Sign up at [render.com](https://render.com)**
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name:** dance-website-backend
   - **Root Directory:** backend
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:**
     - `MONGO_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: Your secret key
     - `NODE_ENV`: production

## Frontend Deployment (Vercel)

### 1. Prepare Frontend for Deployment

1. **Update API base URL in frontend:**
   Create `frontend/src/config/api.js`:
```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.onrender.com' 
  : 'http://localhost:5000';

export default API_BASE_URL;
```

2. **Update all API calls to use the base URL:**
   Replace hardcoded URLs with:
```javascript
import API_BASE_URL from '../config/api.js';

// Instead of: http://localhost:5000/api/users/login
// Use: `${API_BASE_URL}/api/users/login`
```

### 2. Deploy to Vercel

1. **Sign up at [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Configure the project:**
   - **Framework Preset:** Vite
   - **Root Directory:** frontend
   - **Build Command:** `npm run build`
   - **Output Directory:** dist
   - **Install Command:** `npm install`

## Database Setup (MongoDB Atlas)

### 1. Create MongoDB Atlas Cluster

1. **Sign up at [mongodb.com/atlas](https://mongodb.com/atlas)**
2. **Create a new cluster (free tier)**
3. **Set up database access:**
   - Create a database user
   - Set username and password
4. **Set up network access:**
   - Allow access from anywhere (0.0.0.0/0)
5. **Get connection string:**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string

### 2. Update Connection String

Replace `<password>` with your database user password:
```
mongodb+srv://username:password@cluster.mongodb.net/danceDB?retryWrites=true&w=majority
```

## Environment Variables Setup

### Backend (.env)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/danceDB?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=production
```

### Frontend (Vercel Environment Variables)
- `VITE_API_BASE_URL`: https://your-backend-domain.onrender.com

## Deployment Steps Summary

1. **Set up MongoDB Atlas** - Create database and get connection string
2. **Deploy Backend to Render** - Upload backend code and configure environment variables
3. **Deploy Frontend to Vercel** - Upload frontend code and configure API URL
4. **Update CORS settings** - Allow frontend domain in backend CORS
5. **Test the deployment** - Verify all features work in production

## Post-Deployment Checklist

- [ ] Backend API is accessible
- [ ] Frontend loads without errors
- [ ] User registration works
- [ ] User login works
- [ ] Course fetching works
- [ ] Video navigation works
- [ ] Logout functionality works
- [ ] Responsive design works on mobile

## Troubleshooting

### Common Issues:
1. **CORS errors** - Check CORS configuration in backend
2. **Database connection** - Verify MongoDB Atlas connection string
3. **Environment variables** - Ensure all variables are set in deployment platform
4. **API URL mismatch** - Check frontend API base URL configuration

### Debug Commands:
```bash
# Check backend logs
render logs --service dance-website-backend

# Check frontend deployment
vercel logs --follow
```

## Cost Estimation

- **Render Backend:** Free tier (750 hours/month)
- **Vercel Frontend:** Free tier (unlimited)
- **MongoDB Atlas:** Free tier (512MB storage)

Total cost: **$0/month** for basic usage!