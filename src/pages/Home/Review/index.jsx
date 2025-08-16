import React from "react";
import ScrollFloat from "../../../components/ScrollFloat";
// import ReviewSlider from "./reviewslider";
import ReusableCarousel from "./sliderforriv";

function index() {
  return (
    <React.Fragment>
      <div
        className="w-full flex flex-col bg-blue-200
                     pt-6 sm:pt-8 md:pt-10 lg:pt-12
                     px-4 sm:px-6 md:px-8
                     min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-auto
                     m-auto font-serif"
      >
        <ScrollFloat
          animationDuration={1.2}
          ease="power2.out"
          scrollStart="top 85%"
          scrollEnd="bottom 25%"
          stagger={0.15}
          containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-start font-bold text-gray-800"
          textClassName="underline font-serif"
        >
          Our Revies
        </ScrollFloat>
        {/* <ReviewSlider/> */}
        <ReusableCarousel/>
      </div>
      
    </React.Fragment>
  );
}

export default index;
