import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DanceStyle = ({ isLoggedIn, onCardClick }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      fetchCourses();
    } else {
      setLoading(false);
    }
  }, [isLoggedIn]);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/courses', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCourses(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
      } else {
        setError(error.response?.data?.message || 'Failed to fetch courses');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCourseClick = (course) => {
    if (isLoggedIn) {
      navigate(`/styles/${course.courseName.toLowerCase().replace(/\s+/g, '-')}`, {
        state: { course }
      });
    } else if (onCardClick) {
      onCardClick();
      navigate('/signup');
    } else {
      navigate('/signup');
    }
  };

  // Fallback dance styles for non-logged in users
  const fallbackStyles = [
    {
      id: 1,
      title: "Hip Hop",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "hip-hop"
    },
    {
      id: 2,
      title: "Contemporary",
      image: "https://plus.unsplash.com/premium_photo-1689885430776-bbefae37f993?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "contemporary"
    },
    {
      id: 3,
      title: "Ballet",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=300&fit=crop",
      slug: "ballet"
    },
    {
      id: 4,
      title: "Jazz",
      image: "https://plus.unsplash.com/premium_photo-1682089714425-3034f9d26736?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "jazz"
    }
  ];

  if (loading) {
    return (
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Learn Your Dance Style
          </h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Learn Your Dance Style
          </h2>
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
              {error}
            </div>
            <button
              onClick={fetchCourses}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Use courses if logged in and available, otherwise use fallback styles
  const displayItems = isLoggedIn && courses.length > 0 ? courses : fallbackStyles;

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          {isLoggedIn ? "Your Dance Courses" : "Learn Your Dance Style"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-4xl">
          {displayItems.map((item, index) => (
            <div
              key={isLoggedIn ? item._id : item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
              onClick={() => handleCourseClick(item)}
            >
              <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={isLoggedIn ? item.image || "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : item.image}
                  alt={isLoggedIn ? item.courseName : item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-2">
                  {isLoggedIn ? item.courseName : item.title}
                </h3>
                {isLoggedIn && item.courseVideos && (
                  <p className="text-sm text-gray-600 text-center">
                    {item.courseVideos.length} videos available
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {isLoggedIn && courses.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-600">No courses available yet. Check back later!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DanceStyle; 