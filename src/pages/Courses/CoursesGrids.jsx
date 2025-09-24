// import { Filter, Search } from "lucide-react";
// import React from "react";
// import { Button } from "./../../components/Button";
// import ShinyText from "../../components/shyniText";
// import DataOfCourse from "./DataOfCourses";
// import ReusableCard from "../Home/services/cards";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import API from "../../../utils/axiosintence";
// import { useQuery } from "@tanstack/react-query";
// import { ErrorToster, InfoToster } from "../../../components/toster";

// function CoursesGrids() {
//   const [open, setopen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(""); // Track selected filter
//   const navigate = useNavigate();

//   const categories = [
//     "All",
//     "Programming",
//     "Design",
//     "Business",
//     "Marketing",
//     "Data Science",
//     "Personal Development",
//   ];

//   const fetchCourses = async () => {
//     const response = await API.get("/Course/all");
//     const courses = response.data;
//     console.log("🚀 ~ fetchCourses ~ courses:", courses);
//     return courses;
//   };

//   const {
//     data: courses,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["courses"],
//     queryFn: fetchCourses,
//   });

//   console.log(courses);

//   if (isLoading) {
//     return InfoToster("Courses Loading...", 2000);
//   }

//   if (error) {
//     return ErrorToster("Courses Loading...", 2000);
//   }
//   const showtoggel = () => {
//     setopen((prev) => !prev);
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     setopen(false);
//   };

//   const filteredCourses =
//     selectedCategory && selectedCategory !== "All"
//       ? DataOfCourse.filter((course) => course.tags?.includes(selectedCategory))
//       : DataOfCourse;

//   return (
//     <React.Fragment>
//       <section className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-7xl bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8 border border-gray-200">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl sm:text-3xl  lg:text-4xl font-bold text-gray-800 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
//               Explore Courses
//             </h1>
//             <ShinyText
//               text="Discover amazing learning opportunities"
//               disabled={false}
//               speed={6}
//               className="text-sm text-gray-400 mt-1 font-bold"
//             />
//           </div>

//           <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
//             <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1 border border-gray-200 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200">
//               <Button className="bg-transparent  text-gray-600 px-3 py-2 rounded-md ">
//                 <Search className="w-4 h-4 hover:scale-110 hover:text-bold" />
//               </Button>
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 className="flex-1 px-3 py-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 min-w-0 sm:min-w-[200px]"
//               />
//             </div>

//             <div className="relative">
//               <Button
//                 className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md w-auto sm:w-full "
//                 onClick={showtoggel}
//               >
//                 <Filter className="w-4 h-4 mr-2" />
//                 <span className="sm:inline ">Filter</span>
//               </Button>
//               {open && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                   <ul className="py-2">
//                     {categories.map((cat) => (
//                       <li key={cat}>
//                         <button
//                           className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
//                             selectedCategory === cat
//                               ? "bg-gray-200 font-bold"
//                               : ""
//                           }`}
//                           onClick={() =>
//                             handleCategoryChange({ target: { value: cat } })
//                           }
//                         >
//                           {cat}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course, index) => (
//               <div key={index} className="flex-shrink-0 w-34 h-50">
//                 <ReusableCard
//                   image={course.image}
//                   title={course.title}
//                   description={course.description}
//                   content={course.content}
//                   rating={course.rating}
//                   reviewCount={course.reviewCount}
//                   price={false}
//                   buttonText={course.buttonText}
//                   tags={course.tags}
//                   onButtonClick={() => {
//                     const cleanCourse = {
//                       id: course.id,
//                       image: course.image,
//                       title: course.title,
//                       content: course.content,
//                       rating: course.rating,
//                       reviewCount: course.reviewCount,
//                       buttonText: course.buttonText,
//                       tags: course.tags,
//                       videoUrl: course.videoUrl,
//                       price: course.price,
//                     };
//                     navigate(`/card/${course.id}`, { state: cleanCourse });
//                   }}
//                   onCardClick={() =>
//                     console.log(`${course.title} - Card clicked!`)
//                   }
//                 />
//               </div>
//             ))
//           ) : (
//             <div className="flex justify-center items-center w-full h-32  absolute left-0">
//               <p className="text-center text-gray-500 opacity-70 text-lg font-semibold">
//                 No courses found
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </React.Fragment>
//   );
// }

// export default CoursesGrids;

// **********************************************************************
import { Filter, Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./../../components/Button";
import ShinyText from "../../components/shyniText";
import ReusableCard from "../Home/services/cards";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import API from "../../utils/axiosintence";
import { ErrorToster, InfoToster } from "../../components/toster";


function CoursesGrids() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected filter
  const navigate = useNavigate();

  const fetchCourses = async () => {
    const response = await API.get("/Course/all");
    const courses = response.data;
    console.log("🚀 ~ fetchCourses ~ courses:", courses);
    return courses;
  };

  const categories = [
    "All",
    "Programming",
    "Design",
    "Business",
    "Marketing",
    "Data Science",
    "Personal Development",
  ];

  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  // Show or hide the filter
  const showToggle = () => setOpen((prev) => !prev);

  // Handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setOpen(false);
  };

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory && selectedCategory !== "All"
      ? courses.data.filter((course) => course.tags?.includes(selectedCategory))
      : courses?.data ;

  // Side effect for loading state
  useEffect(() => {
    if (isLoading) {
      InfoToster("Courses are loading...", 2000);
    }
  }, [isLoading]);

  // Side effect for error state
  useEffect(() => {
    if (error) {
      ErrorToster("Error loading courses", 2000);
    }
  }, [error]);

  if (isLoading || error) {
    return null; // Let the toasts handle this; no need to return UI here
  }

  return (
    <React.Fragment>
      <section className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-7xl bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8 border border-gray-200">
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl  lg:text-4xl font-bold text-gray-800 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Explore Courses
            </h1>
            <ShinyText
              text="Discover amazing learning opportunities"
              disabled={false}
              speed={6}
              className="text-sm text-gray-400 mt-1 font-bold"
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

            <div className="relative">
              <Button
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md w-auto sm:w-full "
                onClick={showToggle}
              >
                <Filter className="w-4 h-4 mr-2" />
                <span className="sm:inline ">Filter</span>
              </Button>
              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <ul className="py-2">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                            selectedCategory === cat
                              ? "bg-gray-200 font-bold"
                              : ""
                          }`}
                          onClick={() =>
                            handleCategoryChange({ target: { value: cat } })
                          }
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
          {filteredCourses && filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} className="flex-shrink-0 w-34 h-50">
                {/* <ReusableCard
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  content={course.content}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={false}
                  buttonText={course.buttonText}
                  tags={course.tags}
                  onButtonClick={() => {
                    const cleanCourse = {
                      id: course._id,
                      image: course.image,
                      title: course.title,
                      content: course.description,
                      rating: course.rating,
                      reviewCount: course.reviewCount,
                      buttonText: course.buttonText,
                      tags: course.tags,
                      videoUrl: course.videoUrl,
                      price: course.price,
                    };
                    navigate(`/card/${course._id}`, { state: cleanCourse });
                  }}
                  onCardClick={() =>
                    console.log(`${course.title} - Card clicked!`)
                  }
                /> */}

                <ReusableCard
                  image={course.image}
                  title={course.title}
                  // description={course.description}
                  content={course.description}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={false}
                  buttonText={course.buttonText}
                  tags={course.tags}
                  onButtonClick={() => {
                    const cleanCourse = {
                      id: course._id,
                      image: course.image,
                      title: course.title,
                      content: course.description,
                      rating: course.rating,
                      reviewCount: course.reviewCount,
                      buttonText: course.buttonText,
                      tags: course.tags,
                      videoUrl: course.videoUrl,
                      price: course.price,
                    };
                    navigate(`/card/${course._id}`, { state: cleanCourse });
                  }}
                  onCardClick={() =>
                    console.log(`${course.title} - Card clicked!`)
                  }
                />
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-32 absolute left-0">
              <p className="text-center text-gray-500 opacity-70 text-lg font-semibold">
                No courses found
              </p>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default CoursesGrids;
