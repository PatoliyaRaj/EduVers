import React from "react";
import { Star, Play } from "lucide-react";

const CourseCard = ({
  course,
  showRating = true,
  showReviews = true,
  showButton = true,
  buttonText = "View Details",
  isOngoing = false,
  onButtonClick,
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
    progress,
    unitsCompleted,
    totalUnits,
    lastAccess,
  } = course;

  const formatReviews = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  return (
    <div className="min-w-[300px] max-w-[350px] bg-white dark:dark-glass rounded-3xl overflow-hidden border border-slate-100 dark:border-white/10 group hover:shadow-xl dark:hover:shadow-premium-gold/5 transition-all flex flex-col h-full">
      <div className="h-44 relative overflow-hidden bg-slate-200 dark:bg-[#1A1B23]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Badge Overlay */}
        <div className="absolute top-4 left-4">
          {badge ? (
            <span
              className={`px-3 py-1 ${badge.bgColor} text-white text-[10px] font-extrabold uppercase rounded-full tracking-wider`}
            >
              {badge.text}
            </span>
          ) : (
            category && (
              <span className="px-3 py-1 bg-studprimary/80 dark:bg-premium-gold/80 backdrop-blur text-white dark:text-deep-charcoal text-[10px] font-extrabold uppercase rounded-full tracking-wider">
                {category}
              </span>
            )
          )}
        </div>

        {/* Price Overlay - Hide if ongoing */}
        {!isOngoing && (
          <div className="absolute bottom-4 right-4">
            <span className="bg-white/90 dark:bg-premium-gold/90 backdrop-blur px-3 py-1.5 rounded-xl text-sm font-bold text-slate-900 dark:text-deep-charcoal shadow-lg">
              ₹{price}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Rating Section - Hide if ongoing */}
        {!isOngoing && showRating && rating && (
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(rating)
                      ? "fill-studprimary dark:fill-premium-gold text-studprimary dark:text-premium-gold"
                      : "text-slate-300 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1">
              {rating}
            </span>
            {showReviews && reviews && (
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-tighter">
                ({formatReviews(reviews)} reviews)
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="font-bold text-lg mb-2 leading-snug text-slate-900 dark:text-white group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors line-clamp-2">
          {title}
        </h3>

        {isOngoing ? (
          /* Ongoing Progress Section */
          <div className="mt-4 space-y-6">
            <div className="flex items-center gap-4">
              {/* Circular Progress */}
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-full h-full -rotate-90 transform">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-slate-100 dark:text-white/5"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 20}
                    strokeDashoffset={2 * Math.PI * 20 * (1 - progress / 100)}
                    strokeLinecap="round"
                    className="text-studprimary dark:text-premium-gold transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-slate-900 dark:text-white">
                    {progress}%
                  </span>
                </div>
              </div>

              {/* Progress Text Info */}
              <div className="flex gap-4 min-w-0">
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate">
                    Progress
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">
                    {unitsCompleted}/{totalUnits} Lessons
                  </span>
                </div>
                <div className="flex flex-col border-l border-slate-100 dark:border-white/10 pl-4 min-w-0">
                  <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate">
                    Last Activity
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">
                    {lastAccess}
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <button
              onClick={onButtonClick}
              className="w-full py-3 bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-studprimary/10 dark:shadow-premium-gold/10"
            >
              Resume Course
              <Play size={16} fill="currentColor" />
            </button>
          </div>
        ) : (
          <>
            {/* Meta Info */}
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              {duration} • {lessons} lessons
            </p>

            {/* Instructor Info */}
            <div className="flex items-center gap-3 border-t border-slate-100 dark:border-white/5 pt-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden flex-shrink-0 border-2 border-white dark:border-white/5">
                {instructorImage ? (
                  <img
                    alt={instructor}
                    className="w-full h-full object-cover"
                    src={instructorImage}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs font-bold text-white bg-studprimary dark:bg-premium-gold">
                    {instructor?.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-200 truncate">
                  {instructor}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500 font-medium">
                  {category}
                </p>
              </div>
            </div>

            {/* Button */}
            {showButton && (
              <button
                onClick={onButtonClick}
                className="mt-4 w-full py-3 bg-lavender-light dark:bg-white/5 text-studprimary dark:text-premium-gold font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-studprimary dark:hover:bg-premium-gold hover:text-white dark:hover:text-deep-charcoal transition-all active:scale-95 border border-studprimary/10 dark:border-premium-gold/10"
              >
                {buttonText}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
