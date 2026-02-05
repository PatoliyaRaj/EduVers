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
      className="relative bg-gradient-to-br from-[#F3E8FF] via-[#EDE9FE] to-[#F3E8FF] dark:from-navy-charcoal dark:to-deep-charcoal rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl dark:shadow-2xl border border-white/50 dark:border-white/5 transition-all duration-300"
    >
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-studprimary/10 dark:bg-premium-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 dark:bg-premium-gold/5 rounded-full blur-3xl"></div>

      <div
        ref={contentRef}
        className="relative z-10 text-center md:text-left md:flex-1"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Hello, {userName}! 👋
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md text-lg leading-relaxed mb-8">
          You've completed{" "}
          <span className="font-bold text-studprimary dark:text-premium-gold">
            {completionPercentage}%
          </span>{" "}
          of your weekly goal. Keep pushing to reach your target!
        </p>
        <button className="bg-studprimary dark:bg-premium-gold hover:brightness-110 text-white dark:text-deep-charcoal font-bold py-3.5 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20 duration-300">
          Resume Learning
        </button>
      </div>

      <div className="mt-8 md:mt-0 relative w-full max-w-xs md:flex-1 flex justify-center">
        <img
          ref={imageRef}
          alt="Students learning"
          className="rounded-2xl shadow-2xl hover:shadow-3xl duration-500 max-w-sm w-full h-auto object-cover rotate-3 hover:rotate-0 transition-all border-4 border-white dark:border-white/10"
          src={HellowUserImg}
        />

        <div
          ref={badgeRef}
          className="absolute -bottom-6 -left-6 bg-white dark:dark-glass p-4 rounded-2xl shadow-xl dark:shadow-premium-gold/10 flex items-center gap-4 hover:shadow-2xl transition-all duration-300 animate-bounce ease-in border border-slate-100 dark:border-white/10"
        >
          <div className="w-12 h-12 bg-green-100 dark:bg-premium-gold/20 rounded-xl flex items-center justify-center text-green-600 dark:text-premium-gold font-bold text-xl">
            📈
          </div>
          <div>
            <p className="text-[10px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-wider">
              Daily Streak
            </p>
            <p className="text-base font-extrabold text-slate-900 dark:text-white">
              12 Days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GretingPoster;
