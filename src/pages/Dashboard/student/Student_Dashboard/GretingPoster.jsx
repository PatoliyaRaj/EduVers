import React, { useRef } from "react";
import HellowUserImg from "../../../../assets/imgs/HellowUser.png";
import { getAuth } from "../../../../utils/users";
function GretingPoster() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  const user = getAuth().user;
  const userName = user?.firstName || "Guest";
  const completionPercentage = 85;

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-[#F3E8FF] via-[#EDE9FE] to-[#F3E8FF] dark:from-[#2D1B4E] dark:via-[#3D2663] dark:to-[#2D1B4E] rounded-[2rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl"
    >
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D8A25E]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div
        ref={contentRef}
        className="relative z-10 text-center md:text-left md:flex-1"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Hello, {userName}! 👋
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-md text-lg leading-relaxed mb-6">
          You've completed{" "}
          <span className="font-bold text-[#D8A25E]">
            {completionPercentage}%
          </span>{" "}
          of your weekly goal. Keep pushing to reach your target!
        </p>
        <button className="bg-[#D8A25E] hover:bg-[#D8A25E]/90 text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-[#D8A25E]/20 duration-300">
          Resume Learning
        </button>
      </div>

      <div className="mt-8 md:mt-0 relative w-full max-w-xs md:flex-1 flex justify-center">
        <img
          ref={imageRef}
          alt="Students learning"
          className="rounded-2xl shadow-2xl hover:shadow-3xl  duration-500 max-w-sm w-full h-auto object-cover rotate-3 hover:rotate-0 transition-all "
          src={HellowUserImg}
        />

        <div
          ref={badgeRef}
          className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 hover:shadow-2xl transition-shadow duration-300 animate-bounce ease-in"
        >
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-lg">
            📈
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Daily Streak
            </p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              12 Days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GretingPoster;
