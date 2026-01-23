import React, { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import AdminLayout from "../../../../utils/Adminlayoute";
import { getBreadcrumbs } from "../../../../utils/breadcrumbs";
import CoursePoster from "./coursePoster";
import FilterSidebar from "./FilterSidebar";
import CourseGrid from "./CourseGrid";
import recommendedCoursesData from "../Student_Dashboard/recommendedCoursesData";

function ExploreCourses() {
  const breadcrumbItems = getBreadcrumbs("EXPLORE_COURSES");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    levels: [],
    priceRanges: [],
    minRating: 0,
  });

  // Count active filters for badge
  const activeFilterCount = 
    filters.categories.length + 
    filters.levels.length + 
    filters.priceRanges.length + 
    (filters.minRating > 0 ? 1 : 0);

  const filteredCourses = useMemo(() => {
    return recommendedCoursesData.filter((course) => {
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(course.category)
      ) {
        return false;
      }

      if (filters.levels.length > 0 && !filters.levels.includes(course.level)) {
        return false;
      }

      if (filters.priceRanges.length > 0) {
        const isFree = course.price === 0;
        const isPaid = course.price > 0;
        const hasFree = filters.priceRanges.includes("free");
        const hasPaid = filters.priceRanges.includes("paid");

        if ((isFree && !hasFree) || (isPaid && !hasPaid)) {
          return false;
        }
      }

      if (filters.minRating > 0 && course.rating < filters.minRating) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleCourseClick = (courseId) => {
    console.log("Course clicked:", courseId);
  };

  return (
    <AdminLayout
      showSearch={false}
      className="p-0"
      breadcrumbItems={breadcrumbItems}
    >
      <CoursePoster />

      <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 p-4 sm:p-6 xl:p-8">
        <FilterSidebar
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
          filters={filters}
          onFilterChange={setFilters}
        />

        <CourseGrid
          courses={filteredCourses}
          onCourseClick={handleCourseClick}
          activeFilterCount={activeFilterCount}
          onFilterToggle={() => setFilterOpen(true)}
        />
      </div>

      {/* Fixed Mobile Filter FAB */}
      <button
        onClick={() => setFilterOpen(true)}
        className="xl:hidden fixed bottom-6 right-6 w-14 h-14 bg-studprimary text-white rounded-full shadow-lg shadow-studprimary/30 flex items-center justify-center z-30 hover:bg-studprimary/90 active:scale-95 transition-all"
      >
        <SlidersHorizontal size={22} />
        {activeFilterCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {activeFilterCount}
          </span>
        )}
      </button>
    </AdminLayout>
  );
}

export default ExploreCourses;
