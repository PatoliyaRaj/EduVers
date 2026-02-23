import React from "react";

const partners = ["GOOGLE", "META", "IBM", "STANFORD", "MICROSOFT", "AMAZON"];

const SocialProofBar = () => {
  return (
    <section className="relative border-y border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-[#1E1F26]/60 dark:backdrop-blur-xl py-12 transition-colors duration-300 overflow-hidden">
      {/* Subtle dot-grid overlay in dark mode */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ecb613 1px, transparent 1px)`,
          backgroundSize: "1.5rem 1.5rem",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-8">
          Trusted by 10,000+ companies and universities worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((name) => (
            <span
              key={name}
              className="text-xl md:text-2xl font-black italic text-slate-300 dark:text-slate-700 hover:text-primary dark:hover:text-premium-gold hover:opacity-100 opacity-70 transition-all duration-300 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
