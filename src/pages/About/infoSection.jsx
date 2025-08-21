import React from "react";
import BlurText from "../../components/blureText";
import ScrollFloat from "../../components/ScrollFloat";
import busness from "../../assets/imgs/bus2.jpg";
import busness2 from "../../assets/imgs/busness.jpg";
import { Button } from './../../components/Button';

function InfoSection() {
  return (
    <React.Fragment>
      <section className="flex flex-col lg:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col w-full lg:w-1/2 p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
          <div className="mb-4">
            <ScrollFloat
              containerClassName="text-center lg:text-left"
              textClassName="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold text-gray-800 leading-tight"
              animationDuration={1.5}
              stagger={0.05}
              scrollStart="top 85%"
              scrollEnd="bottom 25%"
            >
              About EduVers
            </ScrollFloat>
          </div>

          {/* Subtitle with BlurText */}
          <div className="mt-4" style={{ textAlign: "right" }}>
            <BlurText
              text={`At EduVers, we are redefining the future of learning. As a trusted e-learning marketplace, we provide a diverse range of high-quality educational resources.`}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed text-center lg:text-left text-right capitalize"
              delay={150}
              animateBy="words"
              direction="top"
              threshold={0.2}
            />
          </div>

          {/* Description with BlurText */}
          <div className="mt-4">
            <BlurText
              text="Our mission is to deliver high-quality products that improve the lives of our customers. EduVers is a global hub of learning excellence, connecting knowledge seekers with industry experts. Our commitment lies in creating a seamless, engaging, and future-ready learning experience that inspires growth and unlocks opportunities."
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center lg:text-left "
              delay={100}
              animateBy="words"
              direction="top"
              threshold={0.2}
            />
          </div>
          <Button variant="outline" className="mt-4 rounded-lg w-40 border-2 border-blue-200 hover:bg-gradient-to-br from-blue-100 to-purple-100 hover:text-blue-600 ">Get Started</Button>
        </div>

        {/* Right side - can be used for image or additional content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center px-4 sm:px-6 lg:px-0">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] ">
            <span className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-10 xl:inset-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-md z-0 animate-fade-in2"></span>

            <img
              src={busness}
              alt="business education"
              className="absolute top-0 right-0 w-2/3 sm:w-3/5 md:w-2/3 lg:w-3/5 xl:w-2/3 h-2/3 sm:h-3/5 md:h-2/3 lg:h-3/5 xl:h-2/3 object-cover rounded-lg shadow-lg z-10 transition-transform duration-300 hover:scale-105 filter grayscale hover:grayscale-0 animate-fade-in2 invisible  md:visible "
            />
            <img
              src={busness2}
              alt="business learning"
              className="absolute bottom-[-20%]  left-0 w-2/3 sm:w-3/5 md:w-2/3 lg:w-3/5 xl:w-2/3 h-2/3 sm:h-3/5 md:h-2/3 lg:h-3/5 xl:h-2/3 object-cover rounded-lg shadow-lg z-20 transition-transform duration-300 hover:scale-105 filter grayscale hover:grayscale-0 animate-fade-in "
            />
          </div>
        </div>

      </section>
    </React.Fragment>
  );
}

export default InfoSection;
