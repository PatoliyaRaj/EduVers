// src/context/CourseContext.js

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import API from "../utils/axiosintence";
const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  // Fetch courses using React Query
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
  } = useQuery(["courses"], fetchCourses);

  return (
    <CourseContext.Provider value={{ courses, isLoading, error }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook to access the context
export const useCourses = () => useContext(CourseContext);
