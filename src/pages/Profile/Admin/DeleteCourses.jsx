import React, { useState } from "react";
import AdminLayout from "../../../utils/Adminlayoute";
import { useGetAllCoursesQuery, useDeleteCourseMutation } from "../../../redux";
import CourseCard from "./CourseManageCard";
import { ErrorToster, SuccessToster } from "../../../components/toster";
import CourseUpdateForm from "./CourseUpdateForm";
import { getBreadcrumbs } from "../../../utils/breadcrumbs";

function DeleteCourses() {
  const breadcrumbItems = getBreadcrumbs("MANAGE_COURSES_ADMIN");

  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleEditCourse = (courseId) => {
    setEditingCourseId(courseId);
  };

  const closeEditForm = () => {
    setEditingCourseId(null);
  };

  // RTK Query hooks
  const { data: coursesResponse, isLoading, error } = useGetAllCoursesQuery();

  const courses = coursesResponse;

  const [deleteCourse, { isLoading: isDeleting }] = useDeleteCourseMutation();

  const removeCourse = async (courseId) => {
    try {
      await deleteCourse(courseId).unwrap();
      SuccessToster("Course Deleted Successfully", 2000);
    } catch (error) {
      ErrorToster("Failed to delete the course. Please try again.", 2000);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout
        
        showSearch={false}
        className="p-0"
        breadcrumbItems={breadcrumbItems}
      >
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D8A25E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading Courses...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout
        
        showSearch={false}
        breadcrumbItems={breadcrumbItems}
      >
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#D8A25E] text-white rounded-md hover:opacity-90"
            >
              Retry
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (isDeleting) {
    return (
      <AdminLayout
        
        showSearch={false}
        className="p-0"
        breadcrumbItems={breadcrumbItems}
      >
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 ">
          <div className="bg-white backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D8A25E] mx-auto"></div>
              <p className="mt-4 text-gray-800 font-medium">
                Deleting Courses...
              </p>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <React.Fragment>
      <AdminLayout
        
        showSearch={true}
        className=" mt-0 pt-0"
        breadcrumbItems={breadcrumbItems}
      >
        <section className="flex flex-col">
          <div className="flex flex-col w-full bg-[#D8A25E]/10 ">
            <div className="mb-6 flex flex-col sm:flex-row sm:justify-between   sm:items-center gap-4 p-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#343131]">
                  Maintain Course
                </h1>
                <p className="text-sm text-gray-500">
                  Manage and view all Courses
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full p-4 sm:p-6 md:p-8  ">
            <section>
              <div className="w-full flex  flex-row justify-between items-center ">
                <h2
                  className="text-2xl font-mono border-b-4  border-t-4 p-2 border-[#D8A25E] border-dashed
 font-semibold text-[#343131]"
                >
                  Course List
                </h2>
                <button className="px-4 py-2 bg-[#D8A25E] text-white rounded-md hover:opacity-90">
                  Short By
                </button>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 bg-[#F9F9F9]  rounded-lg py-6 px-4">
              {courses.data.map((course) => (
                <React.Fragment key={course.id}>
                  <CourseCard
                    title={course.title}
                    image={course.image}
                    description={course.description}
                    category={course.category}
                    videoUrl={course.videoUrl}
                    tags={course.tags}
                    id={course.id}
                    onDelete={() => removeCourse(course.id)}
                    onEdit={() => handleEditCourse(course.id)}
                  />
                </React.Fragment>
              ))}
            </section>
            {editingCourseId && (
              <CourseUpdateForm
                courseId={editingCourseId}
                onClose={closeEditForm}
              />
            )}
          </div>
        </section>
      </AdminLayout>
    </React.Fragment>
  );
}

export default DeleteCourses;
