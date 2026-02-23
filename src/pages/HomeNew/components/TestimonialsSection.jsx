import React from "react";
import std1 from "../../../assets/imgs/std1.jpg";
import std2 from "../../../assets/imgs/std2.jpg";
import std3 from "../../../assets/imgs/std3.jpg";

const testimonials = [
  {
    text: "EduVerse completely transformed my career. I went from a barista to a frontend developer in 8 months. The courses are incredibly practical and the mentors are world-class.",
    name: "Anjali Desai",
    role: "Frontend Developer @ Startup",
    image: std3,
    rating: 5,
  },
  {
    text: "The AI-powered learning tools and the peer community are unlike anything I've experienced before. I earned my data science certification in 6 months while working full-time.",
    name: "Marcus Williams",
    role: "Data Analyst @ Deloitte",
    image: std1,
    rating: 5,
  },
  {
    text: "The quality of the instructors is exceptional. Real industry professionals who teach with genuine passion. I've recommended EduVerse to everyone on my team.",
    name: "Emily Chen",
    role: "Product Manager @ Microsoft",
    image: std2,
    rating: 5,
  },
];

const StatsBar = () => {
  const stats = [
    { label: "Active Learners", value: "50M+", icon: "group" },
    { label: "Courses Available", value: "5,000+", icon: "play_circle" },
    { label: "Expert Instructors", value: "2,400+", icon: "school" },
    { label: "Countries Reached", value: "160+", icon: "public" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
      {stats.map((s, i) => (
        <div
          key={i}
          className="group bg-white dark:bg-transparent dark:dark-glass rounded-2xl p-6 border border-slate-100 dark:border-white/10 shadow-sm text-center hover:shadow-lg dark:hover:shadow-premium-gold/8 hover:-translate-y-1 dark:hover:border-premium-gold/30 transition-all duration-300 relative overflow-hidden"
        >
          {/* Corner shimmer */}
          {/* <div className="absolute right-0 top-0 w-16 h-16 bg-primary/5 dark:bg-premium-gold/5 rounded-bl-3xl transition-transform group-hover:scale-150 duration-500" /> */}

          <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/10 dark:bg-premium-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-primary dark:text-premium-gold text-2xl">
              {s.icon}
            </span>
          </div>
          <div className="relative z-10 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-lexend mb-1 group-hover:text-primary dark:group-hover:text-premium-gold transition-colors duration-200">
            {s.value}
          </div>
          <div className="relative z-10 text-xs text-slate-500 dark:text-slate-400 font-medium">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 bg-white dark:bg-background-dark transition-colors duration-300 overflow-hidden">
      {/* Dark mode decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] dark:bg-premium-gold/4 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 dark:bg-primary/4 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#ecb613 1px, transparent 1px)`,
            backgroundSize: "2rem 2rem",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <StatsBar />

        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-4 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">
              format_quote
            </span>
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-lexend">
            Students Love{" "}
            <span className="text-primary dark:text-premium-gold">
              EduVerse
            </span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-transparent dark:dark-glass rounded-2xl p-7 border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:shadow-premium-gold/10 hover:-translate-y-1.5 dark:hover:border-premium-gold/30 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute right-0 top-0 w-20 h-20 bg-primary/5 dark:bg-premium-gold/5 rounded-bl-[3rem] transition-transform group-hover:scale-150 duration-500" />

              {/* Quote icon */}
              <span className="material-symbols-outlined text-4xl text-primary/20 dark:text-premium-gold/20 mb-3">
                format_quote
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span
                    key={j}
                    className="material-symbols-outlined text-sm text-yellow-400"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="relative z-10 text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>

              {/* Reviewer */}
              <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20 dark:ring-premium-gold/20"
                />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Bottom gold accent on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary dark:bg-premium-gold group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
