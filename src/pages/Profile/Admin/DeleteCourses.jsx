import React from "react";
import AdminLayout from "../../../utils/Adminlayoute";
import { useQuery, useMutation } from "@tanstack/react-query";
import API from "../../../utils/axiosintence";
import CourseCard from "./CourseManageCard";
import {
  ErrorToster,
  InfoToster,
  SuccessToster,
} from "../../../components/toster";

function DeleteCourses() {
  const fetchCourses = async () => {
    const response = await API.get("/Course/all");
    const courses = response.data;
    console.log("🚀 ~ fetchCourses ~ courses:", courses);
    return courses;
  };
  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const { mutate: removeCourse, isPending: isDeleting } = useMutation({
    mutationFn: async (courseId) => {
      await API.delete(`/Course/delete`, {
        params: { id: courseId },
      });
    },
    onSuccess: () => {
      SuccessToster("Course Deleted Successfully", 2000);
    },
    onError: (error) => {
      console.error("Delete failed:", error);
      ErrorToster("Failed to delete the course. Please try again.", 2000);
    },
  });

  if (isDeleting) {
    return InfoToster("Course Deleting...", 2000);
  }
  if (isLoading) {
    return (
      <AdminLayout
        pageTitle="Profile"
        showSearch={false}
        className="p-0"
        subheader="shadow-none"
      >
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D8A25E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout pageTitle="Profile" showSearch={false}>
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

  return (
    <React.Fragment>
      <AdminLayout
        pageTitle="Manage Courses"
        showSearch={false}
        className=" mt-0 pt-0"
        subheader="shadow-none"
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
                <h2 className="text-xl font-semibold text-[#343131]">
                  Course List
                </h2>
                <button className="px-4 py-2 bg-[#D8A25E] text-white rounded-md hover:opacity-90">
                  Add Course
                </button>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 bg-[#F9F9F9]  rounded-lg">
              {courses.data.map((course) => (
                <CourseCard
                  key={course._id}
                  title={course.title}
                  image={course.image}
                  description={course.description}
                  category={course.category}
                  videoUrl={course.videoUrl}
                  tags={course.tags}
                  onDelete={() => removeCourse(course._id)}
                />
              ))}
            </section>
          </div>
        </section>
      </AdminLayout>
    </React.Fragment>
  );
}

export default DeleteCourses;
