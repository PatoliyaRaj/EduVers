
import React from "react";
import BlurText from "../../components/blureText";
import ScrollFloat from "../../components/ScrollFloat";
import CircularText from "./../../components/circularText";

function InfoSection() {
  return (
    <React.Fragment>
      <section className="flex flex-col lg:flex-row justify-between items-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col w-full lg:w-1/2 p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
             <div className="text-left">
            <ScrollFloat
              containerClassName="w-full"
              textClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight tracking-tight"
              animationDuration={1.5}
              stagger={0.5}
              scrollStart="top 85%"
              scrollEnd="bottom 25%"
            >
              “Empower Your Future with EduVers”
            </ScrollFloat>
          </div>
          {/* Subtitle */}
          <div className="text-center lg:text-left">
            <BlurText
              text="Discover thousands of courses designed to help you build skills, achieve goals, and shape your future."
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-medium"
              delay={150}
              animateBy="words"
              direction="top"
              threshold={0.2}
            />
          </div>

          {/* Description with BlurText */}
          <div className="mt-2">
            <BlurText
              text="Welcome to EduVers, your all-in-one platform for online learning and professional growth. We bring together expert educators, industry professionals, and passionate mentors to create courses that are practical, engaging, and impactful."
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center lg:text-left "
              delay={100}
              animateBy="words"
              direction="top"
              threshold={0.2}
            />
          </div>
          <div className="mt-2">
            <BlurText
              text="Whether you’re a student preparing for exams, a professional upgrading your skills, or someone exploring new passions, EduVers makes learning accessible to everyone. With high-quality video lectures, interactive content, assignments, and certifications, our goal is to help you learn faster, smarter, and with confidence."
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center lg:text-left "
              delay={100}
              animateBy="words"
              direction="top"
              threshold={0.2}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-80 sm:h-96 md:h-[400px]  lg:h-[450px] xl:h-[500px] flex items-center justify-center">
            <div className="absolute inset-6 sm:inset-8 md:inset-10 lg:inset-12 xl:inset-16 bg-gradient-to-br from-[#f7f7f5] via-[#e0e7ff] to-[#f7f7f5] rounded-2xl shadow-lg z-0 animate-fade-in2"></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <CircularText
                text="Education ★ Success ★ Skills ★ Growth ★ Excellence ★ Succeed ★ "
                onHover="slowDown"
                spinDuration={20}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 text-sm sm:text-base md:text-lg lg:text-xl font-semibold  text-gray-600  sm:text-gray-200 md:text-gray-600 hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default InfoSection;
