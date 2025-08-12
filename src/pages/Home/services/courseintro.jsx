import React from "react";
import ScrollFloat from "../../../components/ScrollFloat";
import ScrollReveal from "../../../components/ScrollReveal";
import Coursecards from "./coursecards";

function CourseIntro() {
  return (
    <React.Fragment>
      <div
        className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#fefefe] via-[#f0f4ff] to-[#fafbff]
                     py-8 sm:py-10 md:py-12 lg:py-16
                     px-4 sm:px-6 md:px-8
                     min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
                     m-auto font-serif"
      >
        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.2}
          baseRotation={5}
          blurStrength={6}
          rotationEnd="bottom 70%"
          wordAnimationEnd="bottom 50%"
          containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-gray-800"
        >
          Our Courses
        </ScrollReveal>

        <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center">
          <span className="block w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-0.5 md:h-1 bg-indigo-400 rounded-full animate-pulse"></span>
        </div>

        <ScrollFloat
          animationDuration={1.5}
          ease="power2.out"
          scrollStart="top 85%"
          scrollEnd="bottom 25%"
          stagger={0.15}
          containerClassName="mt-4 sm:mt-5 md:mt-6 text-gray-600 text-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto px-4 sm:px-6"
          textClassName="inline-block text-[clamp(0.9rem,2vw,2rem)] leading-[1.5] font-serif text-[26.2px]"
        >
          Explore our diverse range of courses designed to empower learners with
          knowledge and skills for a brighter future.
        </ScrollFloat>
      </div>
      <section>
        <Coursecards />
      </section>
    </React.Fragment>
  );
}

export default CourseIntro;
