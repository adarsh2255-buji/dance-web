import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";

const demoVideos = {
  "hip-hop": [
    {
      title: "Hip Hop Basics",
      url: "https://www.youtube.com/watch?v=ZWmrfgj0MZI",
      thumbnail: "https://img.youtube.com/vi/ZWmrfgj0MZI/hqdefault.jpg"
    },
    {
      title: "Beginner Hip Hop Routine",
      url: "https://www.youtube.com/watch?v=RkC0l4iekYo",
      thumbnail: "https://img.youtube.com/vi/RkC0l4iekYo/hqdefault.jpg"
    }
  ],
  "contemporary": [
    {
      title: "Contemporary Dance Tutorial",
      url: "https://youtu.be/-MOWFFP-27g?si=B1etdnfMFRRy4dnS",
      thumbnail: "https://img.youtube.com/vi/RkC0l4iekYo/hqdefault.jpg"
    },
    {
      title: "Contemporary Flow",
      url: "https://www.youtube.com/watch?v=6y2hCf2Qy-k",
      thumbnail: "https://img.youtube.com/vi/6y2hCf2Qy-k/hqdefault.jpg"
    }
  ],
  "ballet": [
    {
      title: "Ballet for Beginners",
      url: "https://www.youtube.com/watch?v=8DZktowZo_k",
      thumbnail: "https://img.youtube.com/vi/8DZktowZo_k/hqdefault.jpg"
    },
    {
      title: "Ballet Barre Routine",
      url: "https://www.youtube.com/watch?v=F8b88F6cU1c",
      thumbnail: "https://img.youtube.com/vi/F8b88F6cU1c/hqdefault.jpg"
    }
  ],
  "jazz": [
    {
      title: "Jazz Dance Basics",
      url: "https://www.youtube.com/watch?v=QFwgF1bG2u4",
      thumbnail: "https://img.youtube.com/vi/QFwgF1bG2u4/hqdefault.jpg"
    },
    {
      title: "Jazz Funk Routine",
      url: "https://www.youtube.com/watch?v=6y2hCf2Qy-k",
      thumbnail: "https://img.youtube.com/vi/6y2hCf2Qy-k/hqdefault.jpg"
    }
  ]
};

const DanceStyleVideos = ({ isLoggedIn }) => {
  const { style } = useParams();
  const location = useLocation();
  const course = location.state?.course;

  if (!isLoggedIn) {
    return <Navigate to="/signup" replace />;
  }

  // If we have course data from navigation, use it; otherwise fall back to demo videos
  const videos = course?.courseVideos || demoVideos[style] || [];
  const courseName = course?.courseName || style.replace(/-/g, ' ');

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-16 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-purple-700 capitalize text-center">
        {courseName} Videos
      </h1>
      {videos.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-8">No videos available for this course.</p>
          {course && (
            <p className="text-sm text-gray-500">This course doesn't have any videos yet.</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl">
          {videos.map((video, idx) => (
            <a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <img 
                src={video.thumbnail || "https://img.youtube.com/vi/default/hqdefault.jpg"} 
                alt={video.title} 
                className="w-full h-40 sm:h-56 object-cover" 
              />
              <div className="p-3 md:p-4 flex-1 flex items-center justify-center">
                <h2 className="text-base md:text-lg font-semibold text-gray-800 text-center">{video.title}</h2>
              </div>
            </a>
          ))}
        </div>
      )}
      
      {course && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Course created: {new Date(course.createdAt).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default DanceStyleVideos; 