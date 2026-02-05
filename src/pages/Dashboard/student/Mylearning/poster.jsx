import React from "react";
import HellowUserImg from "../../../../assets/imgs/HellowUser.png";
import { Play } from "lucide-react";

function Poster() {
  return (
    <section className="rounded-[2rem] md:rounded-[3rem] overflow-hidden relative min-h-[400px] flex items-center group shadow-xl dark:shadow-premium-gold/5 border border-slate-100 dark:border-white/5 transition-all duration-500">
      <img
        alt="Student background"
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-90 dark:opacity-40"
        src={HellowUserImg}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-navy-charcoal dark:via-navy-charcoal/90 dark:to-transparent"></div>

      <div className="p-8 md:p-16 lg:p-20 relative z-10 w-full md:w-3/4 lg:w-2/3">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-studprimary/10 dark:bg-premium-gold/10 text-studprimary dark:text-premium-gold text-xs font-bold uppercase tracking-widest border border-studprimary/20 dark:border-premium-gold/20 backdrop-blur-sm">
            Welcome Back
          </span>
        </div>

        <h3 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
          Master your{" "}
          <span className="text-studprimary dark:text-premium-gold decoration-studprimary/30">
            future
          </span>
        </h3>

        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg text-base md:text-lg lg:text-xl leading-relaxed">
          Your professional journey is accelerating. Take the next step in your
          curriculum and unlock new expertise today.
        </p>

        <button className="bg-studprimary dark:bg-premium-gold text-white dark:text-deep-charcoal font-extrabold py-4 px-10 md:px-12 rounded-2xl shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20 hover:scale-105 active:scale-95 hover:brightness-110 transition-all flex items-center justify-center gap-3 group/btn">
          RESUME LEARNING
          <Play
            size={20}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-studprimary/5 dark:bg-premium-gold/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </section>
  );
}

export default Poster;
