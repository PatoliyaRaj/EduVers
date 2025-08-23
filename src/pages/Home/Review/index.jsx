import React from "react";
import ScrollFloat from "../../../components/ScrollFloat";
import ReviewSlider from "./reviewslider";

function index() {
  return (
    <React.Fragment>
      <section>
        <div className="flex flex-col justify-center items-center px-4 py-4 md:px-0">
          <div>
            <ScrollFloat
              animationDuration={1.2}
              ease="power2.out"
              scrollStart="top 85%"
              scrollEnd="bottom 25%"
              stagger={0.15}
              containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-start font-bold text-gray-800"
              textClassName="underline font-serif"
            >
              Our Reviews
            </ScrollFloat>
          </div>
          <div>
            <span className="block w-16 sm:w-20 lg:w-32 md:w-28 h-0.8 sm:h-0.5 md:h-1.5 bg-indigo-400 rounded-full animate-pulse "></span>
          </div>
          <div>
            <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl  text-gray-800 block  w-1/2 text-center mx-auto my-5">
              Discover what our amazing students have to say about their
              transformative learning journey with us!
            </h1>
          </div>
        </div>

        <ReviewSlider />
      </section>
    </React.Fragment>
  );
}

export default index;
