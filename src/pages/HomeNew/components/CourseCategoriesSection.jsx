import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: "code",
    label: "Development",
    count: "1,200+ Courses",
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    hoverBorder: "dark:hover:border-blue-500/30",
  },
  {
    icon: "business_center",
    label: "Business",
    count: "850+ Courses",
    color: "text-violet-500 dark:text-violet-400",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    hoverBorder: "dark:hover:border-violet-500/30",
  },
  {
    icon: "palette",
    label: "Design",
    count: "640+ Courses",
    color: "text-pink-500 dark:text-pink-400",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    hoverBorder: "dark:hover:border-pink-500/30",
  },
  {
    icon: "campaign",
    label: "Marketing",
    count: "430+ Courses",
    color: "text-orange-500 dark:text-orange-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    hoverBorder: "dark:hover:border-orange-500/30",
  },
  {
    icon: "psychology",
    label: "Lifestyle",
    count: "320+ Courses",
    color: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    hoverBorder: "dark:hover:border-emerald-500/30",
  },
  {
    icon: "security",
    label: "Cybersecurity",
    count: "290+ Courses",
    color: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    hoverBorder: "dark:hover:border-red-500/30",
  },
  {
    icon: "analytics",
    label: "Data Science",
    count: "510+ Courses",
    color: "text-cyan-500 dark:text-cyan-400",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    hoverBorder: "dark:hover:border-cyan-500/30",
  },
  {
    icon: "language",
    label: "Languages",
    count: "380+ Courses",
    color: "text-yellow-500 dark:text-yellow-400",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    hoverBorder: "dark:hover:border-yellow-500/30",
  },
  {
    icon: "music_note",
    label: "Music",
    count: "210+ Courses",
    color: "text-indigo-500 dark:text-indigo-400",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    hoverBorder: "dark:hover:border-indigo-500/30",
  },
  {
    icon: "fitness_center",
    label: "Health",
    count: "175+ Courses",
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    hoverBorder: "dark:hover:border-green-500/30",
  },
];

const CourseCategoriesSection = () => {
  return (
    <section className="relative py-20 bg-white dark:bg-background-dark transition-colors duration-300 overflow-hidden">
      {/* Dark mode decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] dark:bg-premium-gold/5 rounded-full blur-[120px]" />
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] dark:bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-4 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm">explore</span>
              Browse
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-lexend">
              Explore Top{" "}
              <span className="text-primary dark:text-premium-gold">
                Categories
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Discover new skills in the most trending industries today.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-primary dark:text-premium-gold font-bold hover:gap-3 transition-all duration-200 shrink-0 hover:brightness-110"
          >
            View All Categories
            <span className="material-symbols-outlined text-xl">
              arrow_right_alt
            </span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to="/courses"
              className={`group flex flex-col items-center text-center p-5 sm:p-6 bg-slate-50 dark:bg-transparent dark:dark-glass rounded-2xl border border-slate-100 dark:border-white/10 hover:bg-white dark:hover:border-premium-gold/30 hover:shadow-lg dark:hover:shadow-premium-gold/10 hover:-translate-y-1.5 ${cat.hoverBorder} transition-all duration-300 relative overflow-hidden`}
            >
              {/* Corner shimmer */}
              {/* <div className="absolute right-0 top-0 w-16 h-16 bg-primary/5 dark:bg-premium-gold/5 rounded-bl-3xl transition-transform group-hover:scale-150 duration-500" />
 */}
              <div
                className={`relative z-10 w-14 h-14 rounded-2xl ${cat.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
              >
                <span
                  className={`material-symbols-outlined ${cat.color} text-3xl`}
                >
                  {cat.icon}
                </span>
              </div>
              <span className="relative z-10 font-bold text-sm text-slate-900 dark:text-slate-100 mb-0.5 group-hover:text-primary dark:group-hover:text-premium-gold transition-colors duration-200">
                {cat.label}
              </span>
              <span className="relative z-10 text-xs text-slate-400 dark:text-slate-500">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategoriesSection;
