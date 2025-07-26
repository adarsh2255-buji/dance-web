import React from "react";
import { useNavigate } from "react-router-dom";

const DanceStyle = ({ isLoggedIn, onCardClick }) => {
  const danceStyles = [
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

  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-16 bg-gray-50 ">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Learn Your Dance Style
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-4xl">
          {danceStyles.map((style) => (
            <div
              key={style.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
              onClick={() => {
                if (isLoggedIn) {
                  navigate(`/styles/${style.slug}`);
                } else if (onCardClick) {
                  onCardClick();
                  navigate('/signup');
                } else {
                  navigate('/signup');
                }
              }}
            >
              <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6 flex-1 flex items-center justify-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
                  {style.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceStyle; 