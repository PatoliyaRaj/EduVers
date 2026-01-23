import React from "react";
import { X, Star } from "lucide-react";
import filterData from "./filterData";

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange }) => {
  const handleCategoryChange = (category) => {
    const updated = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: updated });
  };

  const handleLevelChange = (level) => {
    const updated = filters.levels.includes(level)
      ? filters.levels.filter((l) => l !== level)
      : [...filters.levels, level];
    onFilterChange({ ...filters, levels: updated });
  };

  const handlePriceChange = (priceRange) => {
    const updated = filters.priceRanges.includes(priceRange)
      ? filters.priceRanges.filter((p) => p !== priceRange)
      : [...filters.priceRanges, priceRange];
    onFilterChange({ ...filters, priceRanges: updated });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({ ...filters, minRating: rating });
  };

  const resetFilters = () => {
    onFilterChange({
      categories: [],
      levels: [],
      priceRanges: [],
      minRating: 0,
    });
  };

  // Count active filters
  const activeFilterCount = 
    filters.categories.length + 
    filters.levels.length + 
    filters.priceRanges.length + 
    (filters.minRating > 0 ? 1 : 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm xl:hidden z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed xl:relative top-0 left-0 h-full xl:h-auto w-[280px] sm:w-72 xl:w-64 bg-white dark:bg-slate-900 xl:bg-transparent xl:dark:bg-transparent z-50 xl:z-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        } flex-shrink-0 overflow-y-auto shadow-2xl xl:shadow-none`}
      >
        <div className="sticky top-0 bg-white dark:bg-slate-900 xl:hidden p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg dark:text-white">Filters</h3>
            {activeFilterCount > 0 && (
              <span className="bg-studprimary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={20} className="dark:text-white" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-5 xl:p-0 space-y-6 xl:space-y-8">

          {/* Categories */}
          <div className="bg-slate-50 dark:bg-slate-800/50 xl:bg-transparent xl:dark:bg-transparent rounded-xl p-4 xl:p-0">
            <h4 className="font-extrabold text-sm mb-4 uppercase tracking-wider text-slate-400">
              Categories
            </h4>
            <div className="space-y-3">
              {filterData.categories.map((category) => (
                <label
                  key={category.name}
                  className="flex items-center gap-3 group cursor-pointer p-1 hover:bg-white/50 dark:hover:bg-slate-700/50 xl:hover:bg-slate-100 xl:dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.name)}
                    onChange={() => handleCategoryChange(category.name)}
                    className="w-5 h-5 rounded-lg border-slate-300 text-studprimary focus:ring-studprimary focus:ring-offset-0 dark:bg-slate-800 dark:border-slate-600 cursor-pointer checked:bg-studprimary checked:border-studprimary"
                  />
                  <span className="text-sm font-medium group-hover:text-studprimary dark:text-white/90 transition-colors">
                    {category.name}
                  </span>
                  <span className="ml-auto text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full text-slate-500 dark:text-slate-400">
                    {category.count}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="bg-slate-50 dark:bg-slate-800/50 xl:bg-transparent xl:dark:bg-transparent rounded-xl p-4 xl:p-0">
            <h4 className="font-extrabold text-sm mb-4 uppercase tracking-wider text-slate-400">
              Rating
            </h4>
            <div className="space-y-3">
              {filterData.ratings.map((rating) => (
                <label
                  key={rating.value}
                  className="flex items-center gap-3 group cursor-pointer p-1 hover:bg-white/50 dark:hover:bg-slate-700/50 xl:hover:bg-slate-100 xl:dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === rating.value}
                    onChange={() => handleRatingChange(rating.value)}
                    className="w-5 h-5 border-slate-300 text-studprimary focus:ring-studprimary focus:ring-offset-0 dark:bg-slate-800 dark:border-slate-600 cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 text-studprimary">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < rating.value
                              ? "fill-studprimary text-studprimary"
                              : "text-slate-300 dark:text-slate-600"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      {rating.label}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Level */}
          <div className="bg-slate-50 dark:bg-slate-800/50 xl:bg-transparent xl:dark:bg-transparent rounded-xl p-4 xl:p-0">
            <h4 className="font-extrabold text-sm mb-4 uppercase tracking-wider text-slate-400">
              Level
            </h4>
            <div className="space-y-3">
              {filterData.levels.map((level) => (
                <label
                  key={level.name}
                  className="flex items-center gap-3 group cursor-pointer p-1 hover:bg-white/50 dark:hover:bg-slate-700/50 xl:hover:bg-slate-100 xl:dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.levels.includes(level.name)}
                    onChange={() => handleLevelChange(level.name)}
                    className="w-5 h-5 rounded-lg border-slate-300 text-studprimary focus:ring-studprimary focus:ring-offset-0 dark:bg-slate-800 dark:border-slate-600 cursor-pointer checked:bg-studprimary checked:border-studprimary"
                  />
                  <span className="text-sm font-medium group-hover:text-studprimary dark:text-white/90 transition-colors">
                    {level.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="bg-slate-50 dark:bg-slate-800/50 xl:bg-transparent xl:dark:bg-transparent rounded-xl p-4 xl:p-0">
            <h4 className="font-extrabold text-sm mb-4 uppercase tracking-wider text-slate-400">
              Price
            </h4>
            <div className="space-y-3">
              {filterData.priceRanges.map((range) => (
                <label
                  key={range.value}
                  className="flex items-center gap-3 group cursor-pointer p-1 hover:bg-white/50 dark:hover:bg-slate-700/50 xl:hover:bg-slate-100 xl:dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.priceRanges.includes(range.value)}
                    onChange={() => handlePriceChange(range.value)}
                    className="w-5 h-5 rounded-lg border-slate-300 text-studprimary focus:ring-studprimary focus:ring-offset-0 dark:bg-slate-800 dark:border-slate-600 cursor-pointer checked:bg-studprimary checked:border-studprimary"
                  />
                  <span className="text-sm font-medium group-hover:text-studprimary dark:text-white/90 transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            disabled={activeFilterCount === 0}
            className="w-full py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
          >
            Reset All Filters
            {activeFilterCount > 0 && (
              <span className="ml-2 text-slate-400">({activeFilterCount})</span>
            )}
          </button>
        </div>

        {/* Mobile Apply Button */}
        <div className="sticky bottom-0 bg-white dark:bg-slate-900 xl:hidden p-4 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={onClose}
            className="w-full py-3 bg-studprimary text-white rounded-xl text-sm font-bold hover:bg-studprimary/90 transition-all active:scale-[0.98]"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
