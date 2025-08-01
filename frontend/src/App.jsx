import React, { useRef, useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DanceStyleVideos from './pages/DanceStyleVideos'
import Courses from './pages/Courses'

const App = () => {
  // Refs for scrolling
  const danceStyleRef = useRef(null);
  const levelRef = useRef(null);
  const reviewsRef = useRef(null);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Login/Logout handlers
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // Scroll handlers
  const handleScrollToStyles = () => {
    if (danceStyleRef.current) {
      danceStyleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToLevels = () => {
    if (levelRef.current) {
      levelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Header
        onScrollToStyles={handleScrollToStyles}
        onScrollToLevels={handleScrollToLevels}
        onScrollToReviews={handleScrollToReviews}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLogin={handleLogin}
      />
      <main className="py-8">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                danceStyleRef={danceStyleRef}
                levelRef={levelRef}
                reviewsRef={reviewsRef}
                isLoggedIn={isLoggedIn}
                onRequireSignup={handleLogin}
              />
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
          <Route path="/styles/:style" element={<DanceStyleVideos isLoggedIn={isLoggedIn} />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App