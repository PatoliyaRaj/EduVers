import React from "react";
import ScrollFloat from "../../../components/ScrollFloat";
import TeacherCards from "./teacherCards";
import teachersData from "./dataofteacher";

function TeachersSec() {
  return (
    <React.Fragment>
      <div className="w-full flex flex-col bg-gradient-to-br from-[#f7f7f5] via-[#e0e7ff] to-[#f7f7f5]
                     pt-6 sm:pt-8 md:pt-10 lg:pt-12
                     px-4 sm:px-6 md:px-8
                     min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-auto
                     m-auto font-serif">
        <ScrollFloat
          animationDuration={1.2}
          ease="power2.out"
          scrollStart="top 85%"
          scrollEnd="bottom 25%"
          stagger={0.15}
          containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold text-gray-800"
        > Our Teachers</ScrollFloat>
        <div className="mt-3 sm:mt-4 flex justify-center">
          <span className="block w-16 sm:w-20 md:w-24 h-0.5 sm:h-0.5 md:h-1 bg-indigo-400 rounded-full animate-pulse"></span>
        </div>
          <p className="mt-6 sm:mt-7 md:mt-8 text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-sm sm:max-w-md md:max-w-xl mx-auto px-2">
          Meet our passionate educators who inspire, guide, and empower every
          learner.
        </p>

        <TeacherCards teachers={teachersData} />
      </div>


    </React.Fragment>
  );
}

export default TeachersSec;
