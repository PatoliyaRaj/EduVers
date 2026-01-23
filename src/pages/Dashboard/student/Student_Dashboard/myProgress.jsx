import React, { useMemo, useState } from "react";
import ProgressCard from "./ProgressCard";
import progressData from "./progressData";

function MyProgress() {
  const DEFAULT_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(DEFAULT_COUNT);

  const visibleCourses = useMemo(
    () => progressData.slice(0, visibleCount),
    [visibleCount]
  );

  const canShowMore = visibleCount < progressData.length;
  const canShowLess = visibleCount > DEFAULT_COUNT;

  const handleViewAll = () => {
    setVisibleCount((prev) => Math.min(prev + 3, progressData.length));
  };

  const handleShowLess = () => {
    setVisibleCount(DEFAULT_COUNT);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-row justify-center items-center ">
          <h3 className="text-xl font-extrabold flex items-center gap-2 dark:text-white">
            <span className="w-2 h-8 bg-studprimary rounded-full"></span>
            My Learning Progress
          </h3>
        </div>
        <div className="flex items-center gap-3 ">
          {canShowLess && (
            <button
              type="button"
              onClick={handleShowLess}
              className="text-sm font-bold text-slate-500 hover:underline dark:text-slate-300 "
            >
              Show Less
            </button>
          )}
          {canShowMore && (
            <button
              type="button"
              onClick={handleViewAll}
              className="text-sm font-bold text-studprimary hover:underline"
            >
              View All
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {visibleCourses.map((course) => (
          <ProgressCard
            key={course.id}
            icon={course.icon}
            category={course.category}
            badgeColor={course.badgeColor}
            badgeBg={course.badgeBg}
            iconBg={course.iconBg}
            title={course.title}
            instructor={course.instructor}
            completion={course.completion}
            lessonsDone={course.lessonsDone}
            lessonsTotal={course.lessonsTotal}
          />
        ))}
      </div>
    </section>
  );
}

export default MyProgress;
