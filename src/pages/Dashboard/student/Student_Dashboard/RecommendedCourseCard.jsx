import React from "react";
import { Star } from "lucide-react";

const CourseCard = ({ 
  course, 
  showRating = true,
  showReviews = true,
  showButton = true,
  buttonText = "View Details",
  onButtonClick
}) => {
  const {
    title,
    image,
    category,
    badge,
    duration,
    lessons,
    instructor,
    instructorImage,
    price,
    rating,
    reviews,
  } = course;

  const formatReviews = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  return (
    <div className="min-w-[300px] max-w-[350px] bg-white dark:bg-sidebar-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 group hover:shadow-xl transition-all flex flex-col h-full">
    
      <div className="h-44 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
        {image ? (
          <img
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={image}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-slate-400">
              course
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Badge and Price Overlay */}
        <div className="absolute top-4 left-4">
          {badge && (
            <span
              className={`px-2 py-1 ${badge.bgColor} text-white text-[10px] font-bold rounded-full uppercase`}
            >
              {badge.text}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-lg text-sm font-bold text-slate-900 dark:text-white">
            ₹{price}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Rating Section */}
        {showRating && rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(rating)
                      ? "fill-studprimary text-studprimary"
                      : "text-slate-300 dark:text-slate-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
              {rating}
            </span>
            {showReviews && reviews && (
              <span className="text-[10px] text-slate-400 font-medium">
                ({formatReviews(reviews)} reviews)
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="font-bold text-lg mb-2 leading-tight dark:text-white/90 group-hover:text-studprimary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Meta Info */}
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">schedule</span>
          {duration} • {lessons} lessons
        </p>

        {/* Instructor Info */}
        <div className="flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-3 mt-auto">
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
            {instructorImage ? (
              <img
                alt={instructor}
                className="w-full h-full object-cover"
                src={instructorImage}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs font-bold text-white bg-studprimary">
                {instructor?.substring(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold dark:text-white/80 truncate">
              {instructor}
            </p>
            <p className="text-[10px] text-slate-400">{category}</p>
          </div>
        </div>

        {/* Button */}
        {showButton && (
          <button
            onClick={onButtonClick}
            className="mt-3 w-full py-2.5 bg-lavender-light dark:bg-lavender-dark text-studprimary font-bold rounded-xl text-sm hover:bg-studprimary hover:text-white transition-all active:scale-95"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
