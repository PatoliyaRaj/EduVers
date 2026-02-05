import { Search, Send, Sparkles } from "lucide-react";
import React from "react";

function Poster() {
  return (
    <section className="relative bg-lavender-light dark:bg-navy-charcoal rounded-2xl md:rounded-[2.5rem] px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-20 overflow-hidden text-center shadow-sm dark:shadow-2xl border border-white/50 dark:border-white/10 selection:bg-studprimary/20 selection:text-studprimary transition-all duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-studprimary/10 dark:bg-premium-gold/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-purple-500/10 dark:bg-premium-gold/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2"></div>
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] text-studprimary dark:text-premium-gold"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "1.5rem 1.5rem",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-studprimary/10 dark:bg-premium-gold/10 text-studprimary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-2 border border-studprimary/20 dark:border-premium-gold/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Help Center</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How can we{" "}
            <span className="text-studprimary dark:text-premium-gold relative inline-block">
              help you
              <svg
                className="absolute w-full h-2 bottom-0 left-0 text-studprimary/20 dark:text-premium-gold/20 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>{" "}
            today?
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about your courses, payments, and
            account management.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mt-10 group">
          <div className="absolute inset-0 bg-studprimary/20 dark:bg-premium-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60"></div>

          <div className="relative flex flex-col sm:flex-row items-center p-2 bg-white dark:bg-[#1A1B23]/80 dark:backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-studprimary/30 dark:hover:border-premium-gold/30 hover:shadow-2xl sm:hover:translate-y-0 md:hover:-translate-y-1">
            <div className="flex-1 flex items-center w-full px-2 mb-2 sm:mb-0">
              <Search className="flex-shrink-0 w-6 h-6 text-slate-400 Transition-colors ml-2" />
              <input
                className="w-full bg-transparent border-none outline-none ring-0 text-slate-800 dark:text-white placeholder-slate-400 text-base sm:text-lg py-3 px-3 font-medium focus:ring-0"
                placeholder="Ask a question..."
                type="text"
              />
            </div>

            <button className="w-full sm:w-auto h-12 sm:h-14 px-8 bg-studprimary dark:bg-premium-gold hover:bg-studprimary/90 dark:hover:brightness-110 text-white dark:text-deep-charcoal rounded-xl shadow-lg shadow-studprimary/20 dark:shadow-premium-gold/20 hover:shadow-studprimary/40 flex items-center justify-center transition-all duration-300 active:scale-95 group/btn">
              <Send className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poster;
