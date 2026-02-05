import { PerformanceLineChart } from "./ChartComponents";
import { performanceChartData } from "./chartData";
import {
  MessageCircle,
  RefreshCcw,
  Trophy,
  CheckCircle2,
  MessagesSquare,
  ArrowRight,
} from "lucide-react";

const ChartSection = () => {
  return (
    <div className="py-8">
      {/* Performance Metrics Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="w-full lg:w-2/3">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-7 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_10px_#B08D57]"></div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Performance Analytics
              </h3>
            </div>
            <span className="px-3 py-1.5 bg-tan-100 dark:bg-white/5 text-studprimary dark:text-premium-gold text-[10px] font-bold rounded-full border border-tan-200/50 dark:border-white/10 uppercase tracking-widest">
              LAST 6 MONTHS
            </span>
          </div>
          <PerformanceLineChart
            data={performanceChartData}
            title="Overall Performance Trends"
            className="dark:bg-white/10"
          />
        </section>

        {/* Community Section - Kept from original */}
        <section className="w-full lg:w-1/3">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-7 bg-studprimary dark:bg-premium-gold rounded-full shadow-[0_0_10px_#B08D57]"></div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Community
              </h3>
            </div>
          </div>
          <div className="soft-card flex flex-col h-full bg-white dark:dark-glass border-none shadow-sm dark:shadow-2xl">
            <div className="px-6 py-5 border-b border-slate-50 dark:border-white/5 flex justify-between items-center">
              <h4 className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                Latest Activity
              </h4>
              <button className="text-studprimary dark:text-premium-gold p-1.5 hover:bg-tan-50 dark:hover:bg-white/5 rounded-lg transition-colors">
                <RefreshCcw className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-7 flex-1 overflow-y-auto max-h-[500px] hide-scrollbar">
              <div className="flex gap-4 items-start group">
                <div className="relative flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-50 dark:ring-white/5 group-hover:scale-105 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClcR0prvpaYncoJKf1koboBdcDuK6rmH_INVYxO53UtA1x3iYzPYIAevGAiemDb8B5CjUgEEk_j81QU43Vdy045avwS5SLAQMBxYVG4liz71SIchOMn6kjHkXB56hTTZ0EqdhZ2R2_QWUK46jxaCdMNCm1_dJwy3dpPqr1n8xo6lzH9MQdjTquR0KL4G072V6Sf2JgEVJJ0LXoTYzITN5FSbIya6gq6FoHzJiQJucesYnLBuZMal_rmdEXV52BFIswgM2Dx1cLeQ"
                    alt="User"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-studprimary dark:bg-premium-gold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#1E1F26]">
                    <MessageCircle className="w-2.5 h-2.5 text-white dark:text-deep-charcoal" />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors">
                      Marcus L.
                    </span>{" "}
                    replied to your post in{" "}
                    <span className="text-studprimary dark:text-premium-gold font-semibold uppercase text-[10px] tracking-widest bg-studprimary/5 dark:bg-premium-gold/10 px-1.5 py-0.5 rounded">
                      Python Forum
                    </span>
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 font-bold uppercase tracking-tighter">
                    Just now
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="relative flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-50 dark:ring-white/5 group-hover:scale-105 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUjgPniYqOM_Qyaxanv5gCboL4etAZDMN4YtDA7jcVX0emtBue7Xyus20wlfxrN5HhgwCJ5cBADj8UGWvQ1SHL1WGyfP-F4uqgCvMKxwRSFUMOF2Rb5XAgWXzGQ6tzvGPUmvg6W4qPSD9Wgmkela5tOjQCwImCJA6JHVqjBMDJnCnaH8F6lH186N4k8MjEENCNKh11UoWBTpbtc-R6aWwlPC2smiX7cmYVOrBnDR8wHIKwa0n1PZsbMbHw7jtffr_ctQpyjMHThw"
                    alt="User"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-studprimary dark:bg-premium-gold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#1E1F26]">
                    <Trophy className="w-2.5 h-2.5 text-white dark:text-deep-charcoal" />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors">
                      Achievement!
                    </span>{" "}
                    You earned the{" "}
                    <span className="text-studprimary dark:text-premium-gold font-semibold uppercase text-[10px] tracking-widest bg-studprimary/5 dark:bg-premium-gold/10 px-1.5 py-0.5 rounded">
                      Weekly Goal Crusher
                    </span>
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 font-bold uppercase tracking-tighter">
                    42m ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="relative flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-50 dark:ring-white/5 group-hover:scale-105 transition-transform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJpiAS7h0KVMkWupdRHFgPAQ0kO2IIDUt3Y5-Vdlw0SuMJDbRXK-RWCyr60z1pOllZUgQB41aBVrUFrqAF7HrvtzMjE5Sl9hJDRBtO94p31coGk9DZcEdpZ06yAHpKPhdGOq8af2xL5pLDPVk0pbNcI4QiEHtelPxK2vAafy52y84KWkmfdTh1xvX-XqzEkusuB-LEpKz8MeyBYmtrDj9_AeVbaEZjgSfxF-YhDZyDe-QhtkdcJuGJzJXOiHYvbuYrmY4FVNLdyQ"
                    alt="User"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-studprimary dark:bg-premium-gold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#1E1F26]">
                    <CheckCircle2 className="w-2.5 h-2.5 text-white dark:text-deep-charcoal" />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors">
                      Sarah J.
                    </span>{" "}
                    completed the{" "}
                    <span className="text-studprimary dark:text-premium-gold font-semibold uppercase text-[10px] tracking-widest bg-studprimary/5 dark:bg-premium-gold/10 px-1.5 py-0.5 rounded">
                      UX Research
                    </span>{" "}
                    module.
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 font-bold uppercase tracking-tighter">
                    2h ago
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-tan-100 dark:bg-premium-gold/10 flex items-center justify-center text-studprimary dark:text-premium-gold font-extrabold text-xs">
                    JD
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-studprimary dark:bg-premium-gold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#1E1F26]">
                    <MessagesSquare className="w-2.5 h-2.5 text-white dark:text-deep-charcoal" />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white group-hover:text-studprimary dark:group-hover:text-premium-gold transition-colors">
                      John Doe
                    </span>{" "}
                    started a new discussion in{" "}
                    <span className="text-studprimary dark:text-premium-gold font-semibold uppercase text-[10px] tracking-widest bg-studprimary/5 dark:bg-premium-gold/10 px-1.5 py-0.5 rounded">
                      AI Ethics
                    </span>
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1.5 font-bold uppercase tracking-tighter">
                    5h ago
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-50 dark:border-white/5 mt-auto">
              <button className="w-full py-3.5 text-[11px] font-extrabold text-studprimary dark:text-premium-gold hover:bg-tan-50 dark:hover:bg-white/5 rounded-xl transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                View Full Activity <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChartSection;
