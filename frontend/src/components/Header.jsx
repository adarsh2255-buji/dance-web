import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ onScrollToStyles, onScrollToLevels, onScrollToReviews, isLoggedIn, onLogout }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="bg-white text-black p-0 w-full shadow-sm">
      <div className="w-full bg-white text-center py-2 text-xs md:text-sm font-medium px-2 md:px-0">
        Discover your rhythm and master the art of dance, anytime, anywhere
      </div>
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 gap-4 md:gap-0">
        <Link to="/" className="text-2xl font-bold hover:text-purple-600 transition-colors mb-2 md:mb-0">
          Dance Online
        </Link>
        <div className="flex flex-col md:flex-row flex-1 justify-between items-center w-full md:w-auto ml-0 md:ml-8 gap-4 md:gap-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center w-full md:w-auto">
            <li>
              {isHome ? (
                <button onClick={onScrollToStyles} className="hover:underline bg-transparent border-none cursor-pointer p-0 m-0">Styles</button>
              ) : (
                <Link to="/" className="hover:underline">Styles</Link>
              )}
            </li>
            <li>
              {isHome ? (
                <button onClick={onScrollToLevels} className="hover:underline bg-transparent border-none cursor-pointer p-0 m-0">Levels</button>
              ) : (
                <Link to="/" className="hover:underline">Levels</Link>
              )}
            </li>
            <li>
              {isHome ? (
                <button onClick={onScrollToReviews} className="hover:underline bg-transparent border-none cursor-pointer p-0 m-0">Reviews</button>
              ) : (
                <Link to="/" className="hover:underline">Reviews</Link>
              )}
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center w-full md:w-auto">
            {isLoggedIn ? (
              <li>
                <button onClick={onLogout} className="ml-0 md:ml-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 font-semibold transition w-full md:w-auto">Logout</button>
              </li>
            ) : (
              <>
                <li><Link to="/login" className="hover:underline">Login</Link></li>
                <li>
                  <Link to="/signup" className="ml-0 md:ml-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 font-semibold transition w-full md:w-auto">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 