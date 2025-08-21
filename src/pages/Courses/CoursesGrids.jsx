import { Filter, Search } from "lucide-react";
import React from "react";
import { Button } from "./../../components/Button";
import ShinyText from "../../components/shyniText";
import DataOfCourse from "./DataOfCourses";
import ReusableCard from "../Home/services/cards";

function CoursesGrids() {
  return (
    <React.Fragment>
      <section className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
        {/* Header Section with Title and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-7xl bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8 border border-gray-200">
          {/* Title */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl  lg:text-4xl font-bold text-gray-800 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Courses
            </h1>
            <ShinyText
              text="Discover amazing learning opportunities"
              disabled={false}
              speed={6}
              className="text-sm text-blue-600 mt-1 font-bold"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1 border border-gray-200 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200">
              <Button className="bg-transparent  text-gray-600 px-3 py-2 rounded-md ">
                <Search className="w-4 h-4 hover:scale-110 hover:text-bold" />
              </Button>
              <input
                type="text"
                placeholder="Search courses..."
                className="flex-1 px-3 py-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 min-w-0 sm:min-w-[200px]"
              />
            </div>

            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md">
              <Filter className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
    
          {DataOfCourse.map((course, index) => (
            <div key={index} className="flex-shrink-0 w-34 h-50">
              <ReusableCard
                image={course.image}
                title={course.title}
                description={course.description}
                content={course.content}
                rating={course.rating}
                reviewCount={course.reviewCount}
                price={course.price}
                buttonText={<span>Enroll Now</span>}
                tags={course.tags}
                onButtonClick={course.onButtonClick}
                onCardClick={course.onCardClick}
              />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default CoursesGrids;
