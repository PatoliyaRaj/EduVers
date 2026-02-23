import React from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative py-20 bg-white dark:bg-navy-charcoal transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative bg-gradient-to-br from-slate-900 to-[#1a1d2b] dark:from-navy-charcoal dark:to-background-dark rounded-3xl overflow-hidden border border-white/5 dark:border-premium-gold/10 shadow-2xl dark:shadow-premium-gold/5">
          {/* Glow orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/15 dark:bg-premium-gold/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/10 dark:bg-premium-gold/5 rounded-full blur-[100px] pointer-events-none" />
          {/* Skewed accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-premium-gold/5 skew-x-12 translate-x-16 pointer-events-none" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ecb613 1px, transparent 1px)",
              backgroundSize: "2rem 2rem",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-20 text-center">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-primary/15 dark:bg-premium-gold/15 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-6 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm">
                rocket_launch
              </span>
              Join the Journey
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-lexend leading-tight">
              Ready to{" "}
              <span className="text-primary dark:text-premium-gold">join</span>{" "}
              the journey?
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you&rsquo;re a student looking to grow or an educator
              wanting to share your voice, there&rsquo;s a place for you in the
              EduVerse.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/Sign-Up"
                className="inline-flex items-center gap-2 bg-primary dark:bg-premium-gold text-slate-900 font-extrabold px-10 py-4 rounded-xl shadow-lg shadow-primary/25 dark:shadow-premium-gold/25 hover:brightness-110 hover:scale-105 hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-xl">
                  school
                </span>
                Start Learning Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/8 dark:bg-white/5 text-white font-bold px-10 py-4 rounded-xl border border-white/15 dark:border-white/10 hover:bg-white/15 dark:hover:bg-premium-gold/10 dark:hover:border-premium-gold/30 dark:hover:text-premium-gold transition-all duration-300 whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-xl">
                  support_agent
                </span>
                Become a Mentor
              </Link>
            </div>

            {/* Social proof chips */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              {[
                { icon: "check_circle", text: "No experience required" },
                { icon: "check_circle", text: "Free 7-day trial" },
                { icon: "check_circle", text: "Certificate included" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 text-sm text-slate-300"
                >
                  <span
                    className="material-symbols-outlined text-primary dark:text-premium-gold text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
