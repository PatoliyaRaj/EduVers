import React from "react";
import { Link } from "react-router-dom";
import aboutUs from "../../../assets/imgs/aboutUs.png";

const AboutHero = () => {
  return (
    <section className="relative bg-background-light dark:bg-navy-charcoal overflow-hidden transition-colors duration-300">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 dark:bg-premium-gold/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 dark:bg-premium-gold/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#ecb613 1px, transparent 1px)`,
            backgroundSize: "1.75rem 1.75rem",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: Content ── */}
          <div className="z-10 order-2 lg:order-1">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-6 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm">
                auto_awesome
              </span>
              Our Origin Story
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white mb-6 font-lexend ">
              Empowering the next generation through{" "}
              <span className="text-primary dark:text-premium-gold relative inline-block">
                borderless
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                >
                  <path
                    d="M0 3 Q50 0 100 3 Q150 6 200 3 400 0 600 3 800 0 1000 3"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    className="text-primary dark:text-premium-gold"
                  />
                </svg>
              </span>{" "}
              education.
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-9 max-w-lg leading-relaxed">
              EduVerse was born from a simple belief: that location should never
              limit potential. We are building the world&rsquo;s most inclusive
              platform to connect ambitious learners with world-class expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#impact"
                className="inline-flex items-center gap-2 bg-primary dark:bg-premium-gold text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/25 dark:shadow-premium-gold/20 hover:brightness-110 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <span className="material-symbols-outlined text-xl">
                  arrow_downward
                </span>
                View Our Impact
              </a>
              <a
                href="#values"
                className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-300 dark:hover:border-premium-gold/30 dark:hover:text-premium-gold transition-all duration-300"
              >
                <span className="material-symbols-outlined text-xl">flag</span>
                Our Mission
              </a>
            </div>
          </div>

          {/* ── Right: Hero Image ── */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/15 dark:bg-premium-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 dark:bg-premium-gold/8 rounded-full blur-3xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 dark:shadow-black/60 ring-1 ring-slate-200 dark:ring-white/10">
              <img
                src={aboutUs}
                alt="Diverse students learning and collaborating"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent dark:from-navy-charcoal/40 pointer-events-none" />
            </div>

            {/* Floating stat: Learners */}
            <div className="absolute top-8 -right-4 sm:-right-6 hidden sm:flex bg-white dark:dark-glass p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-xl">
                    groups
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Learners
                  </p>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                    5,000,000+
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat: Countries */}
            <div className="absolute -bottom-4 -left-4 sm:-left-6 hidden sm:flex bg-white dark:dark-glass p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-premium-gold/10 flex items-center justify-center text-primary dark:text-premium-gold">
                  <span className="material-symbols-outlined text-xl">
                    public
                  </span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Countries
                  </p>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                    120+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
