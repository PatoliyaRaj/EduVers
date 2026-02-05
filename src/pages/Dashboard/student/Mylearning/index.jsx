import React from "react";
import AdminLayout from "../../../../utils/Adminlayoute";
import { getBreadcrumbs } from "../../../../utils/breadcrumbs";
import Poster from "./poster";
import LearningStats from "./LearningStats";
import GoalTracker from "./GoalTracker";
import CourseSection from "./CourseSection";
import ScheduleCalendar from "./ScheduleCalendar";

function MyLearning() {
  const breadcrumbItems = getBreadcrumbs("MY_LEARNING");

  return (
    <AdminLayout
      breadcrumbItems={breadcrumbItems}
      showSearch={false}
      className="p-0"
    >
      <div className="p-6 lg:p-10 dark:bg-deep-charcoal transition-colors duration-300 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10">
            <Poster />
            <CourseSection />
          </div>
          <aside className="w-full lg:w-80 space-y-6">
            <div className="sticky top-24 space-y-6">
              <LearningStats />
              <div className="space-y-6">
                <GoalTracker />
                <ScheduleCalendar />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </AdminLayout>
  );
}

export default MyLearning;
