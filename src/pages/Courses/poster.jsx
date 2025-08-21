import student_group from "../../assets/imgs/student_cap.png";
import BlurText from "./../../components/blureText";
import { React } from "react";
function Poster() {
  return (
    <>
      <section>
        <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[450px] bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden rounded-xl shadow-lg z-index-10">
          <div className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-12 transform -translate-y-1/2 w-1/2 sm:w-2/5 md:w-1/2 lg:w-2/5 z-0">
            <BlurText
              text="Transform Learning into Success with EduVers"
              delay={75}
              animateBy="character"
              direction="top"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight z-index-0"
              easing="easeInOut"
            />
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                200+ Courses
              </span>
              <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                Expert Instructors
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium hidden sm:inline">
                Certificates
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              From beginner to advanced levels, discover courses in technology,
              business, design, and more. Start your learning journey today.
            </p>

            <button
              className="
              bg-gradient-to-br from-[#f7f7f5] via-[#e0e7ff] to-[#f7f7f5]
               border-2 border-blue-300
              hover:border-blue-400 hover:bg-gray-50
              text-gray-700 hover:text-blue-700 font-medium
              px-4 sm:px-6
              py-2 sm:py-3
              rounded-full
              text-xs sm:text-sm md:text-base
              transition-all duration-300
              transform hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-gray-200
              active:scale-95
              flex-1 sm:flex-none
            "
            >
              Browse Courses
            </button>

            <p className="text-xs text-gray-500 mt-3 sm:mt-4 hidden md:block">
              Choose from 50+ professional courses
            </p>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-4 h-4 sm:w-6 sm:h-6 bg-blue-300 rounded-full opacity-40 "></div>
          <img
            src={student_group}
            alt="Student with books and thumbs up gesture"
            className="
            absolute 
            bottom-0 
            right-1 sm:right-1 md:right-2 lg:right-6 xl:right-8
            h-full
            w-auto
            object-contain
            object-bottom
            max-w-[40%] sm:max-w-[40%] md:max-w-[32%] lg:max-w-[32%] xl:max-w-[28%]
            animate-fade-in
            animate-duration-2000
            animate-ease-in-out
            drop-shadow-lg
            z-1
          "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </section>
    </>
  );
}

export default Poster;
