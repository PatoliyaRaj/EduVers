import React, { useState } from "react";
import CourseCard from "../Student_Dashboard/RecommendedCourseCard";
import { ArrowDown, ArrowRight, ArrowUp, LayoutGrid, List } from "lucide-react";

const ongoingCoursesData = [
  {
    id: 1,
    title: "Advanced JavaScript Architecture & Patterns",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400",
    category: "Architecture",
    progress: 75,
    unitsCompleted: 12,
    totalUnits: 16,
    lastAccess: "2h ago",
    progressColor: "#b48c4c",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass: Pro Workflows",
    image:
      "https://images.unsplash.com/photo-1541462608141-ad4d74b93478?auto=format&fit=crop&q=80&w=400",
    category: "Interface Design",
    progress: 45,
    unitsCompleted: 9,
    totalUnits: 20,
    lastAccess: "Yesterday",
    progressColor: "#6366f1",
  },
  {
    id: 3,
    title: "Fullstack Python Web Development",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400",
    category: "Development",
    progress: 60,
    unitsCompleted: 15,
    totalUnits: 25,
    lastAccess: "3h ago",
    progressColor: "#3776ab",
  },
  {
    id: 5,
    title: "iOS & Swift - The Complete iOS App Development Bootcamp",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400",
    category: "Mobile",
    progress: 90,
    unitsCompleted: 45,
    totalUnits: 50,
    lastAccess: "1h ago",
    progressColor: "#f05138",
  },
];

function CourseSection() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="space-y-8">
      {/* Tabs Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10">
        <div className="flex gap-8">
          {["Ongoing", "Completed", "Wishlist"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold transition-all relative ${
                activeTab === tab
                  ? "text-studprimary dark:text-premium-gold"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              }`}
            >
              {tab === "Ongoing" ? "Ongoing Courses" : tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-studprimary dark:bg-premium-gold shadow-[0_0_8px_rgba(176,141,87,0.6)]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="pb-4 flex items-center gap-4 text-slate-400">
          <button className="hover:text-studprimary dark:hover:text-premium-gold transition-colors">
            <LayoutGrid />
          </button>
          <button className="hover:text-studprimary dark:hover:text-premium-gold transition-colors">
            <List />
          </button>
        </div>
      </div>

      {activeTab === "Ongoing" ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(showAll
              ? ongoingCoursesData
              : ongoingCoursesData.slice(0, 2)
            ).map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isOngoing={true}
                onButtonClick={() => console.log("Continue", course.title)}
              />
            ))}
          </div>

          {ongoingCoursesData.length > 2 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-studprimary dark:hover:text-premium-gold hover:border-studprimary dark:hover:border-premium-gold transition-all active:scale-95 shadow-sm"
              >
                {showAll ? (
                  <>
                    Show Less Courses
                    <ArrowUp className="transition-all duration-300 hover:translate-y-1"/>
                  </>
                ) : (
                  <>
                    View All Courses
                    <ArrowDown className="transition-all duration-300 hover:translate-y-1"/>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="py-20 text-center bg-slate-50 dark:bg-white/5 rounded-3xl border border-dashed border-slate-200 dark:border-white/10">
          <p className="text-slate-400 font-medium">
            No courses in {activeTab}
          </p>
        </div>
      )}
    </section>
  );
}

export default CourseSection;
