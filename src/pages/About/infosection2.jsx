import React from "react";
import ScrollFloat from "../../components/ScrollFloat";
import busness2 from "../../assets/imgs/busness.jpg";
import { Button } from "./../../components/Button";
import ScrollReveal from "./../../components/ScrollReveal";

function InfosectionS() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 lg:gap-10 xl:px-16 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-28">
      <div className="w-full  h-auto lg:w-1/2  order-2 lg:order-1   flex justify-center items-center mb-8 lg:mb-0">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-56 sm:h-72 md:h-96 lg:h-[420px] xl:h-[500px] md:mt-16">
          <span className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg z-0 animate-fade-in2"></span>

          <img
            src={busness2}
            alt="Business learning"
            className="absolute bottom-[-20%] left-0 w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/5 h-2/3 sm:h-3/4 object-cover rounded-lg shadow-xl z-20 transition-transform duration-500 hover:scale-105 filter grayscale hover:grayscale-0 animate-fade-in "
          />
          <img
            src={busness2}
            alt="Business learning"
            className="absolute top-0 right-0 w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/5 h-2/3 sm:h-3/4 object-cover rounded-lg shadow-xl z-20 transition-transform duration-500 hover:scale-105 filter grayscale hover:grayscale-0 animate-fade-in hidden lg:block"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2  order-1 lg:order-2  flex flex-col space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
        <ScrollFloat
          containerClassName="w-full"
          textClassName="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight"
          animationDuration={1.5}
          stagger={0.05}
          scrollStart="top 85%"
          scrollEnd="bottom 25%"
        >
          Features
        </ScrollFloat>

        <ScrollReveal
          textClassName="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          baseOpacity={0}
          enableBlur={true}
          baseRotation={8}
          blurStrength={10}
          rotationEnd="bottom center"
          wordAnimationEnd="center center"
        >
          At EduVers, we combine innovation, accessibility, and quality to
          deliver an unmatched learning experience. Our platform is designed
          with learners, educators, and professionals in mind, ensuring that
          everyone finds value.
        </ScrollReveal>

        <ScrollReveal
          textClassName="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={10}
          rotationEnd="bottom center"
          wordAnimationEnd="center center"
        >
          We believe in personalized learning, which is why EduVers provides
          flexible learning paths, progress tracking, and engaging content
          formats that adapt to every individual’s pace. To enhance trust and
          credibility, every course is backed with transparent reviews, ratings,
          and certifications that add real value to career growth.
        </ScrollReveal>
        <ScrollReveal
          textClassName="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={10}
          rotationEnd="bottom center"
          wordAnimationEnd="center center"
        >
          ‟Our Mission is to create a global learning community that inspires,
          empowers, and equips learners with the knowledge and skills needed to
          thrive in today’s fast-changing world.”
        </ScrollReveal>

        <Button
          variant="outline"
          className="mt-4 rounded-lg w-40 border-2 border-blue-200 hover:bg-gradient-to-br from-blue-100 to-purple-100 hover:text-blue-600 "
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default InfosectionS;
