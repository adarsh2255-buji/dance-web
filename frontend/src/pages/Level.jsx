import React from "react";

const Level = () => {
  const levels = [
    {
      id: 1,
      title: "BRAND NEW",
      description: "Got two left feet? Start with our 10-day intro program."
    },
    {
      id: 2,
      title: "BEGINNER",
      description: "Got the basics down? Level up with new moves and routines."
    },
    {
      id: 3,
      title: "INTERMEDIATE",
      description: "Feel pretty confident? Learn more challenging skills and pieces."
    },
    {
      id: 4,
      title: "ADVANCED",
      description: "Already killin' it? Train with the top choreographers in the game."
    }
  ];

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Step-by-Step Learning For All Levels
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {levels.map((level) => (
            <div
              key={level.id}
              className="bg-gray-50 rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-purple-600">
                {level.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Level; 