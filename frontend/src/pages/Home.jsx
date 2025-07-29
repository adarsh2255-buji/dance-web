import React, { useRef } from "react";
import heroImg from "../img/heroImg.jpg";
import DanceStyle from "../components/DanceStyle";
import Level from "./Level";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";

const Home = ({ danceStyleRef, levelRef, reviewsRef, isLoggedIn, onRequireSignup }) => {

  const backgroundStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <>
      <section
        className="relative w-screen h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden px-2 md:px-0"
        style={backgroundStyle}
      >
        <div className="absolute" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_6px_16px_rgba(0,0,0,1)]">
            Unleash Your Inner Dancer
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,1)] px-2">
            Learn from the best, anytime, anywhere.
          </p>
          {!isLoggedIn && (
            <Link
              to="/signup"
              className="px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-lg text-base md:text-lg font-semibold shadow-lg hover:bg-gray-800 transition"
            >
              Start Now
            </Link>
          )}
        </div>
      </section>
      <div ref={danceStyleRef}>
        <DanceStyle isLoggedIn={isLoggedIn} onCardClick={onRequireSignup} />
      </div>
      <div ref={levelRef}>
        <Level />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
    </>
  );
};

export default Home;
export { }; 