import React from "react";
import teacher1 from "../../../assets/imgs/teacher1.jpg";
import teacher2 from "../../../assets/imgs/teacher2.jpg";
import teacher3 from "../../../assets/imgs/teacher3.jpg";
import teacher4 from "../../../assets/imgs/teacher4.jpg";

const instructors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Machine Learning Engineer",
    company: "Ex-Google",
    rating: 4.9,
    students: "24,500",
    courses: 12,
    image: teacher1,
    tags: ["Python", "AI", "Deep Learning"],
    tagColor:
      "bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Michael Chen",
    role: "Full-Stack Developer",
    company: "Ex-Meta",
    rating: 4.8,
    students: "18,200",
    courses: 8,
    image: teacher2,
    tags: ["React", "Node.js", "AWS"],
    tagColor:
      "bg-violet-500/10 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400",
  },
  {
    name: "Priya Sharma",
    role: "UX Design Lead",
    company: "Ex-Apple",
    rating: 4.9,
    students: "21,100",
    courses: 10,
    image: teacher3,
    tags: ["Figma", "UI/UX", "Prototyping"],
    tagColor:
      "bg-pink-500/10 dark:bg-pink-500/15 text-pink-600 dark:text-pink-400",
  },
  {
    name: "James Miller",
    role: "Data Scientist",
    company: "Ex-Amazon",
    rating: 4.7,
    students: "15,800",
    courses: 6,
    image: teacher4,
    tags: ["SQL", "Tableau", "Statistics"],
    tagColor:
      "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
];

const InstructorsSection = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-navy-charcoal transition-colors duration-300 overflow-hidden">
      {/* Dark mode decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-64 dark:bg-premium-gold/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ecb613 1px, transparent 1px)`,
            backgroundSize: "1.75rem 1.75rem",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-4 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">school</span>
            Meet The Team
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 font-lexend">
            Learn from the{" "}
            <span className="text-primary dark:text-premium-gold">Best</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our instructors are industry veterans who bring real-world expertise
            and passion directly to your screen.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((ins, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-transparent dark:dark-glass rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:shadow-premium-gold/10 hover:-translate-y-2 dark:hover:border-premium-gold/30 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ins.image}
                  alt={ins.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 dark:bg-[#1E1F26]/90 dark:backdrop-blur-md px-2.5 py-1 rounded-full shadow-md border dark:border-white/10">
                  <span
                    className="material-symbols-outlined text-sm text-yellow-400"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {ins.rating}
                  </span>
                </div>

                {/* Company badge at bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end px-4 pb-3">
                  <span className="text-xs font-bold text-primary dark:text-premium-gold bg-white/10 dark:bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full border border-primary/20 dark:border-premium-gold/30">
                    {ins.company}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-0.5 group-hover:text-primary dark:group-hover:text-premium-gold transition-colors duration-200">
                  {ins.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {ins.role}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary dark:text-premium-gold">
                      group
                    </span>
                    {ins.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary dark:text-premium-gold">
                      play_circle
                    </span>
                    {ins.courses} Courses
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {ins.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${ins.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
