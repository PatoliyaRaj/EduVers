import React from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import CourseCard from "../Student_Dashboard/RecommendedCourseCard";

const CourseGrid = ({
  courses,
  onCourseClick,
  activeFilterCount = 0,
  onFilterToggle,
}) => {
  return (
    <div className="flex-1 min-w-0">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          {/* Mobile Filter Button - Inline version */}
          <button
            onClick={onFilterToggle}
            className="xl:hidden flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-studprimary text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-base">
            Showing{" "}
            <span className="text-slate-900 dark:text-white font-bold">
              {courses.length}
            </span>{" "}
            results
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap hidden sm:inline">
            Sort by:
          </span>
          <select className="flex-1 sm:flex-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-studprimary focus:border-studprimary px-3 py-2">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:gap-8 items-center">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              showRating={true}
              showReviews={true}
              showButton={true}
              buttonText="View Details"
              onButtonClick={() => onCourseClick?.(course.id)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No courses found matching your filters
            </p>
          </div>
        )}
      </div>

      {courses.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-studprimary hover:text-white dark:hover:bg-studprimary transition-all">
            <ChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-studprimary text-white font-bold">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-studprimary hover:text-white dark:hover:bg-studprimary transition-all font-bold">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-studprimary hover:text-white dark:hover:bg-studprimary transition-all font-bold">
            3
          </button>
          <span className="px-2 text-slate-400">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-studprimary hover:text-white dark:hover:bg-studprimary transition-all font-bold">
            12
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-studprimary hover:text-white dark:hover:bg-studprimary transition-all">
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseGrid;
