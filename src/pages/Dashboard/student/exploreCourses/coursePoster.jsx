import React from "react";
import posterImg from "../../../../assets/imgs/course-poster.jpg";

function CoursePoster() {
  return (
    <section className="relative bg-sidebar-dark dark:bg-background-dark rounded-2.5xl p-6 md:p-10 lg:p-12 mb-8 overflow-hidden min-h-[350px] md:min-h-[400px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-50 blur-sm"
          src={posterImg}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sidebar-dark/95 via-sidebar-dark/70 to-transparent dark:from-background-dark/95 dark:via-background-dark/70"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full px-2 ">
        <div>
          <span className="inline-block px-4 py-1.5 bg-white/10 dark:bg-white/5 backdrop-blur-xl text-studprimary text-xs font-bold rounded-full mb-4 md:mb-6 border border-white/30 shadow-2xl shadow-studprimary/40 ">
            TRENDING NOW
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-4 leading-tight ">
          Master AI & Machine Learning with Experts
        </h2>

        <p className="text-slate-200 dark:text-slate-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
          Unlock the power of artificial intelligence. Join over 50,000+
          students in our most popular career path this month.
        </p>

        <button className="bg-studprimary hover:bg-studprimary/90 text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-xl transition-all duration-300 shadow-xl shadow-studprimary/30 text-base md:text-lg hover:shadow-2xl hover:shadow-studprimary/40 transform hover:scale-105 active:scale-95 ">
          Explore Path
        </button>
      </div>
    </section>
  )
}

export default CoursePoster;
