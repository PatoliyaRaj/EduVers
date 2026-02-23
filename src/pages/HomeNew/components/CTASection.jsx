import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-navy-charcoal transition-colors duration-300 overflow-hidden">
      {/* Outer section subtle blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ecb613 1px, transparent 1px)`,
            backgroundSize: "2rem 2rem",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card — always dark bg (like help's WhatsApp card) */}
        <div className="relative bg-gradient-to-br from-slate-900 to-[#1a1d2b] dark:from-navy-charcoal dark:to-deep-charcoal rounded-3xl overflow-hidden border border-white/5 dark:border-premium-gold/10 shadow-2xl dark:shadow-premium-gold/5">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/15 dark:bg-premium-gold/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-gold/10 dark:bg-premium-gold/5 rounded-full blur-[100px]" />
            {/* Skewed accent bar */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-premium-gold/5 dark:bg-premium-gold/8 skew-x-12 translate-x-16" />
          </div>

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ecb613 1px, transparent 1px)",
              backgroundSize: "2rem 2rem",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            {/* Left Text */}
            <div className="lg:w-2/3">
              <div className="inline-flex items-center gap-2 bg-primary/15 dark:bg-premium-gold/15 text-primary dark:text-premium-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
                <span className="material-symbols-outlined text-sm">
                  rocket_launch
                </span>
                Start Today
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 font-lexend leading-tight">
                Ready to transform{" "}
                <span className="text-primary dark:text-premium-gold">
                  your future?
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                Join{" "}
                <span className="font-bold text-primary dark:text-premium-gold">
                  85,000+ students
                </span>{" "}
                and start building the skills that define the industry. Your
                journey begins with a single click.
              </p>

              {/* Bullet checks */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
                {[
                  "Free 7-day trial",
                  "Cancel anytime",
                  "Certificate included",
                ].map((b) => (
                  <span
                    key={b}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span
                      className="material-symbols-outlined text-primary dark:text-premium-gold text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 w-full sm:w-auto lg:w-auto">
              <Link
                to="/Sign-Up"
                className="inline-flex items-center justify-center gap-2 bg-primary dark:bg-premium-gold text-slate-900 font-extrabold px-10 py-4 rounded-xl hover:brightness-110 hover:shadow-2xl hover:shadow-primary/30 dark:hover:shadow-premium-gold/30 hover:scale-105 transition-all duration-300 text-base whitespace-nowrap"
              >
                <span className="material-symbols-outlined">school</span>
                Apply to EduVerse
              </Link>

              <button className="inline-flex items-center justify-center gap-2 bg-white/8 dark:bg-white/5 text-white font-bold px-10 py-4 rounded-xl border border-white/15 dark:border-white/10 hover:bg-white/15 dark:hover:bg-premium-gold/10 dark:hover:border-premium-gold/30 dark:hover:text-premium-gold transition-all duration-300 text-base whitespace-nowrap">
                <span className="material-symbols-outlined">support_agent</span>
                Speak with an Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
