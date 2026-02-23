import React from "react";

const CATEGORIES = [
  "All Subjects",
  "Computer Science",
  "Business",
  "Data Science",
  "Health & Medicine",
  "Design",
  "Finance",
  "Security",
];

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const SORT_OPTIONS = [
  "Most Relevant",
  "Newest",
  "Top Rated",
  "Price: Low to High",
  "Price: High to Low",
];

const CoursesFilter = ({
  activeCategory,
  onCategoryChange,
  level,
  onLevelChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  resultCount,
}) => {
  return (
    <div className="bg-white dark:bg-navy-charcoal border-b border-slate-100 dark:border-white/5 transition-colors duration-300 sticky top-[64px] z-30 shadow-sm dark:shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        {/* Row 1: Category pills + Filter controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Category Pill Scroller */}
          <div className="flex-1 overflow-x-auto hide-scrollbar pb-1">
            <div className="flex items-center gap-2 min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary dark:bg-premium-gold text-slate-900 shadow-md shadow-primary/20 dark:shadow-premium-gold/20"
                      : "bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-primary/40 dark:hover:border-premium-gold/40 hover:text-primary dark:hover:text-premium-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Filter Button */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:border-primary/40 dark:hover:border-premium-gold/40 hover:text-primary dark:hover:text-premium-gold transition-all duration-200">
              <span className="material-symbols-outlined text-lg leading-none">
                filter_alt
              </span>
              Filters
            </button>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-1 rounded-xl">
              <button
                onClick={() => onViewModeChange("list")}
                className={`p-1.5 rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-white dark:bg-white/10 shadow-sm text-primary dark:text-premium-gold"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
                aria-label="List view"
              >
                <span className="material-symbols-outlined text-xl leading-none">
                  format_list_bulleted
                </span>
              </button>
              <button
                onClick={() => onViewModeChange("grid")}
                className={`p-1.5 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-white dark:bg-white/10 shadow-sm text-primary dark:text-premium-gold"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
                aria-label="Grid view"
              >
                <span className="material-symbols-outlined text-xl leading-none">
                  grid_view
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Advanced filters */}
        <div className="flex flex-wrap items-center gap-4 py-3 px-5 bg-slate-50 dark:dark-glass rounded-2xl border border-slate-100 dark:border-white/5">
          {/* Level */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap">
              Level:
            </span>
            <select
              value={level}
              onChange={(e) => onLevelChange(e.target.value)}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-semibold py-1.5 px-3 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-premium-gold/20 cursor-pointer transition-colors duration-200"
            >
              {LEVELS.map((l) => (
                <option key={l} value={l} className="dark:bg-[#1E1F26]">
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest whitespace-nowrap">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-semibold py-1.5 px-3 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-premium-gold/20 cursor-pointer transition-colors duration-200"
            >
              {SORT_OPTIONS.map((s) => (
                <option key={s} value={s} className="dark:bg-[#1E1F26]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Result count */}
          <div className="ml-auto hidden sm:block">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Showing{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                {resultCount}
              </span>{" "}
              results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesFilter;
