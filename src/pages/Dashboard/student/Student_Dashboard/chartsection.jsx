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
                <div className="w-1.5 h-6 bg-studprimary rounded-full"></div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  Performance Analytics
                </h3>
              </div>
              <span className="px-3 py-1.5 bg-tan-100 dark:bg-sidebar-dark text-studprimary text-[10px] font-bold rounded-full border border-tan-200/50 dark:border-slate-700">
                LAST 6 MONTHS
              </span>
            </div>
            <PerformanceLineChart
              data={performanceChartData}
              title="Overall Performance Trends"
            />
          </section>

          {/* Community Section - Kept from original */}
          <section className="w-full lg:w-1/3">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-studprimary rounded-full"></div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  Community
                </h3>
              </div>
            </div>
            <div className="soft-card flex flex-col h-full bg-white dark:bg-sidebar-dark border-none">
              <div className="px-6 py-5 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
                <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">
                  Latest Activity
                </h4>
                <button className="text-studprimary p-1.5 hover:bg-tan-50 dark:hover:bg-sidebar-dark rounded-lg transition-colors">
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 space-y-7 flex-1 overflow-y-auto max-h-[500px] hide-scrollbar">
                <div className="flex gap-4 items-start">
                  <div className="relative flex-shrink-0">
                    <img
                      className="w-9 h-9 rounded-xl object-cover ring-2 ring-slate-50 dark:ring-slate-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuClcR0prvpaYncoJKf1koboBdcDuK6rmH_INVYxO53UtA1x3iYzPYIAevGAiemDb8B5CjUgEEk_j81QU43Vdy045avwS5SLAQMBxYVG4liz71SIchOMn6kjHkXB56hTTZ0EqdhZ2R2_QWUK46jxaCdMNCm1_dJwy3dpPqr1n8xo6lzH9MQdjTquR0KL4G072V6Sf2JgEVJJ0LXoTYzITN5FSbIya6gq6FoHzJiQJucesYnLBuZMal_rmdEXV52BFIswgM2Dx1cLeQ"
                      alt="User"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-studprimary w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-sidebar-dark">
                      <MessageCircle className="w-2 h-2 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Marcus L.
                      </span>{" "}
                      replied to your post in{" "}
                      <span className="text-studprimary font-semibold">
                        Python Forum
                      </span>
                      .
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium">
                      Just now
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="relative flex-shrink-0">
                    <img
                      className="w-9 h-9 rounded-xl object-cover ring-2 ring-slate-50 dark:ring-slate-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUjgPniYqOM_Qyaxanv5gCboL4etAZDMN4YtDA7jcVX0emtBue7Xyus20wlfxrN5HhgwCJ5cBADj8UGWvQ1SHL1WGyfP-F4uqgCvMKxwRSFUMOF2Rb5XAgWXzGQ6tzvGPUmvg6W4qPSD9Wgmkela5tOjQCwImCJA6JHVqjBMDJnCnaH8F6lH186N4k8MjEENCNKh11UoWBTpbtc-R6aWwlPC2smiX7cmYVOrBnDR8wHIKwa0n1PZsbMbHw7jtffr_ctQpyjMHThw"
                      alt="User"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-studprimary w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-sidebar-dark">
                      <Trophy className="w-2 h-2 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Achievement!
                      </span>{" "}
                      You earned the{" "}
                      <span className="text-studprimary font-semibold">
                        Weekly Goal Crusher
                      </span>
                      .
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium">
                      42m ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="relative flex-shrink-0">
                    <img
                      className="w-9 h-9 rounded-xl object-cover ring-2 ring-slate-50 dark:ring-slate-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJpiAS7h0KVMkWupdRHFgPAQ0kO2IIDUt3Y5-Vdlw0SuMJDbRXK-RWCyr60z1pOllZUgQB41aBVrUFrqAF7HrvtzMjE5Sl9hJDRBtO94p31coGk9DZcEdpZ06yAHpKPhdGOq8af2xL5pLDPVk0pbNcI4QiEHtelPxK2vAafy52y84KWkmfdTh1xvX-XqzEkusuB-LEpKz8MeyBYmtrDj9_AeVbaEZjgSfxF-YhDZyDe-QhtkdcJuGJzJXOiHYvbuYrmY4FVNLdyQ"
                      alt="User"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-studprimary w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-sidebar-dark">
                      <CheckCircle2 className="w-2 h-2 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Sarah J.
                      </span>{" "}
                      completed the{" "}
                      <span className="text-studprimary font-semibold">
                        UX Research
                      </span>{" "}
                      module.
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium">
                      2h ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-9 h-9 rounded-xl bg-tan-100 dark:bg-slate-800 flex items-center justify-center text-studprimary font-extrabold text-xs">
                      JD
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-studprimary w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-sidebar-dark">
                      <MessagesSquare className="w-2 h-2 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white">
                        John Doe
                      </span>{" "}
                      started a new discussion in{" "}
                      <span className="text-studprimary font-semibold">
                        AI Ethics
                      </span>
                      .
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium">
                      5h ago
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-50 dark:border-slate-800 mt-auto">
                <button className="w-full py-3 text-[11px] font-extrabold text-[#c48c4c] hover:bg-tan-50 dark:hover:bg-slate-800 rounded-xl transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
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
