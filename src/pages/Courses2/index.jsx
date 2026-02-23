import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import CoursesHero from "./components/CoursesHero";
import CoursesFilter from "./components/CoursesFilter";
import CoursesGrid from "./components/CoursesGrid";
import CoursesPagination from "./components/CoursesPagination";
import { useGetAllCoursesQuery } from "../../redux/index";

const COURSES_PER_PAGE = 8;

// Map raw API course → shape CoursesGrid card expects
const mapCourse = (c) => ({
  id: c.id,
  title: c.title,
  category: c.category,
  img: c.image,
  rating: c.rating ?? "N/A",
  reviews: c.reviewCount ?? 0,
  badge: Array.isArray(c.tags) && c.tags.length > 0 ? c.tags[0] : null,
  duration: c.duration ?? null,
  level: c.level ?? null,
  price: c.price ?? null,
  originalPrice: c.originalPrice ?? null,
});

function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Subjects");
  const [level, setLevel] = useState("All Levels");
  const [sortBy, setSortBy] = useState("Most Relevant");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // ── Fetch all courses (RTK Query caches this — one network call) ──
  const { data, isLoading, isError, error } = useGetAllCoursesQuery();
  const allCourses = (data?.data ?? []).map(mapCourse);

  // ── Reset to page 1 whenever filters change ──
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory, level, sortBy]);

  // ── Filter ──
  const filtered = allCourses.filter((c) => {
    const matchCat =
      activeCategory === "All Subjects" || c.category === activeCategory;
    const matchLevel = level === "All Levels" || c.level === level;
    const matchSearch =
      !searchQuery ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchLevel && matchSearch;
  });

  // ── Sort ──
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    if (sortBy === "reviews") return (b.reviews ?? 0) - (a.reviews ?? 0);
    return 0;
  });

  // ── Paginate ──
  const totalPages = Math.max(1, Math.ceil(sorted.length / COURSES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * COURSES_PER_PAGE;
  const pageCourses = sorted.slice(startIndex, startIndex + COURSES_PER_PAGE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <Layout>
      {/* Page title + search */}
      <CoursesHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Sticky filter bar */}
      <CoursesFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        level={level}
        onLevelChange={setLevel}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        resultCount={sorted.length}
      />

      {/* Main content */}
      <section className="relative bg-slate-50 dark:bg-background-dark transition-colors duration-300 min-h-[60vh]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] dark:bg-premium-gold/4 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] dark:bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <CoursesGrid
            viewMode={viewMode}
            courses={pageCourses}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />

          {/* Pagination — only show when there's more than one page */}
          {totalPages > 1 && sorted.length > 0 && (
            <CoursesPagination
              currentPage={safePage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Courses;
