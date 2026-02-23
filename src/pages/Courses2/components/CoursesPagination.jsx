import React from "react";

const CoursesPagination = ({ currentPage, totalPages, onPageChange }) => {
  // Build visible pages with ellipsis logic
  const getPages = () => {
    if (totalPages <= 6)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, "...", totalPages];
    if (currentPage >= totalPages - 2)
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-between py-10 mt-4 border-t border-slate-100 dark:border-white/5">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 text-sm font-bold text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-premium-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed group"
      >
        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform duration-200">
          arrow_back
        </span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Pages */}
      <div className="flex items-center gap-1.5">
        {pages.map((page, i) =>
          page === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="w-10 text-center text-slate-400 dark:text-slate-500 font-bold"
            >
              ···
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all duration-200 ${
                currentPage === page
                  ? "bg-primary dark:bg-premium-gold text-slate-900 shadow-lg shadow-primary/25 dark:shadow-premium-gold/20"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-primary dark:hover:text-premium-gold"
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-premium-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed group"
      >
        <span className="hidden sm:inline">Next</span>
        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-200">
          arrow_forward
        </span>
      </button>
    </div>
  );
};

export default CoursesPagination;
