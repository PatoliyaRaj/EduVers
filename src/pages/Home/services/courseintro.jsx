import React from "react";
import ScrollFloat from "../../../components/ScrollFloat";
import ScrollReveal from "../../../components/ScrollReveal";
import Coursecards from "./coursecards";

function CourseIntro() {
  return (
    <React.Fragment>
      <div
        className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#fefefe] via-[#f0f4ff] to-[#fafbff]
                     py-8 sm:py-12 md:py-16 lg:py-20
                     px-4 sm:px-6 md:px-8
                     min-h-[250px] sm:min-h-[300px] md:min-h-[350px]
                     font-serif"
        style={{ willChange: "transform" }}
      >
        <ScrollReveal
          enableBlur={false}
          baseOpacity={0.3}
          baseRotation={2}
          blurStrength={3}
          rotationEnd="bottom 80%"
          wordAnimationEnd="bottom 60%"
          containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800 mb-4"
        >
          Our Courses
        </ScrollReveal>

        <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-indigo-400 rounded-full mb-6"></div>

        <ScrollFloat
          animationDuration={1}
          ease="power2.out"
          scrollStart="top 80%"
          scrollEnd="bottom 30%"
          stagger={0.08}
          textClassName="text-gray-600 text-md text-center text-sm sm:text-base md:text-lg lg:text-2xl "
          containerClassName="inline-block max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-4  leading-relaxed"
        >
          Explore our diverse range of courses designed to empower learners with knowledge and skills for a brighter future.
        </ScrollFloat>
      </div>
      
      {/* Course cards section */}
      <Coursecards />
    </React.Fragment>
  );
}

export default CourseIntro;
