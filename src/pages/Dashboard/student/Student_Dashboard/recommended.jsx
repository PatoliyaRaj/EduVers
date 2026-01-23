import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import RecommendedCourseCard from "./RecommendedCourseCard";
import recommendedCoursesData from "./recommendedCoursesData";

function RecommendedSection() {
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 320;
    const targetScroll =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    gsap.to(container, {
      scrollLeft: targetScroll,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-extrabold flex items-center gap-2 dark:text-white">
            <span className="w-2 h-8 bg-studprimary rounded-full"></span>
            Recommended for You
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-400 hover:bg-slate-50 dark:hover:bg-sidebar-dark transition-all hover:border-studprimary dark:text-white "
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 hover:text-[#b48c4c]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-400 hover:bg-slate-50 dark:hover:bg-sidebar-dark transition-all hover:border-studprimary dark:text-white"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 hover:text-[#b48c4c] transition-all " />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
      >
        {recommendedCoursesData.map((course, index) => (
          <div key={course.id} ref={(el) => (cardRefs.current[index] = el)}>
            <RecommendedCourseCard course={course} showRating={false} showReviews={false} showButton={false} buttonText="View Details" onButtonClick={() => console.log("View Details clicked for course:", course.id)} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendedSection;
