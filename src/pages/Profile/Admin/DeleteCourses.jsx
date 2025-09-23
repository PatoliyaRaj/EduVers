import React from "react";
import AdminLayout from "../../../utils/Adminlayoute";

function DeleteCourses() {
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
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
               <div className="flex flex-col justify-between  bg-blue-100 p-4 px-6 rounded-lg shadow">
                <div className="flex flex-row justify-between ">
                    <h1>titel of the course</h1>
                    <div>catagory</div>
                </div>
               </div>
            </section>
          </div>
        </section>
      </AdminLayout>
    </React.Fragment>
  );
}

export default DeleteCourses;
