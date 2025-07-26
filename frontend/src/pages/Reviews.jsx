import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review: "Amazing platform! I went from having two left feet to feeling confident on the dance floor. The instructors are incredible and the step-by-step approach really works.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      review: "Best investment I've made this year. The hip hop classes are fire and the community is so supportive. Highly recommend for anyone wanting to learn dance!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 5,
      review: "As a complete beginner, I was nervous about starting. But the 'Brand New' program was perfect - patient instructors and clear explanations. Now I'm hooked!",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      review: "The advanced classes are challenging but so rewarding. Learning from top choreographers has taken my dancing to the next level. Worth every penny!",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      review: "I love how flexible the learning schedule is. I can practice whenever I have time, and the video quality is excellent. The contemporary dance section is my favorite!",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Alex Martinez",
      rating: 5,
      review: "Incredible variety of dance styles and the progression from beginner to advanced is perfectly structured. The instructors are world-class!",
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          What Our Students Say
        </h1>
        <div className="max-w-4xl mx-auto space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                <h3 className="text-base md:text-xl font-semibold text-gray-800">
                  {review.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400 text-base md:text-lg">
                    {renderStars(review.rating)}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews; 