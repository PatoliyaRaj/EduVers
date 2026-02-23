import React from "react";

const features = [
  {
    icon: "school",
    title: "Expert Mentors",
    description:
      "Learn from industry professionals with years of real-world experience at top-tier tech firms and creative studios.",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    hoverBg: "group-hover:bg-blue-500 dark:group-hover:bg-blue-500",
    glow: "dark:hover:shadow-blue-500/10",
  },
  {
    icon: "all_inclusive",
    title: "Lifetime Access",
    description:
      "Once you enroll, you have permanent access to course materials and future updates. Learn at your own pace, forever.",
    color: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    hoverBg: "group-hover:bg-violet-500 dark:group-hover:bg-violet-500",
    glow: "dark:hover:shadow-violet-500/10",
  },
  {
    icon: "devices",
    title: "Flexible Learning",
    description:
      "Study on any device, anywhere in the world. Our mobile-first platform ensures you never miss a lesson.",
    color: "text-primary dark:text-premium-gold",
    bg: "bg-primary/10 dark:bg-premium-gold/10",
    hoverBg: "group-hover:bg-primary dark:group-hover:bg-premium-gold",
    glow: "dark:hover:shadow-premium-gold/10",
  },
  {
    icon: "verified",
    title: "Certified Courses",
    description:
      "Earn industry-recognised certificates that validate your skills and boost your professional credibility.",
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    hoverBg: "group-hover:bg-emerald-500 dark:group-hover:bg-emerald-500",
    glow: "dark:hover:shadow-emerald-500/10",
  },
  {
    icon: "groups",
    title: "Community Support",
    description:
      "Join a global community of learners, get peer feedback, ask questions, and network with professionals.",
    color: "text-pink-500 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    hoverBg: "group-hover:bg-pink-500 dark:group-hover:bg-pink-500",
    glow: "dark:hover:shadow-pink-500/10",
  },
  {
    icon: "bolt",
    title: "AI-Powered Tools",
    description:
      "Leverage our AI study assistant for personalised recommendations, instant explanations, and smarter revision.",
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    hoverBg: "group-hover:bg-orange-500 dark:group-hover:bg-orange-500",
    glow: "dark:hover:shadow-orange-500/10",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-navy-charcoal transition-colors duration-300 overflow-hidden">
      {/* Dark mode dot-grid + glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#ecb613 1px, transparent 1px)`,
            backgroundSize: "1.75rem 1.75rem",
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] dark:bg-premium-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-4 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm">star</span>
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 font-lexend">
            Why Choose{" "}
            <span className="text-primary dark:text-premium-gold">
              EduVerse?
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            We provide a flexible and engaging learning experience designed to
            help you succeed in your career with resources backed by science.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`group relative bg-white dark:bg-transparent dark:dark-glass p-7 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl ${feat.glow} dark:hover:border-premium-gold/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Corner accent */}
              <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 dark:bg-premium-gold/5 rounded-bl-[4rem] transition-transform group-hover:scale-150 duration-500" />

              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent dark:group-hover:from-premium-gold/8 transition-all duration-500 pointer-events-none rounded-2xl" />

              {/* Icon */}
              <div
                className={`relative z-10 w-14 h-14 rounded-xl ${feat.bg} flex items-center justify-center mb-5 ${feat.hoverBg} group-hover:text-white transition-all duration-300 shadow-sm`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${feat.color} group-hover:text-white transition-colors duration-300`}
                >
                  {feat.icon}
                </span>
              </div>

              <h3 className="relative z-10 text-lg font-bold text-slate-900 dark:text-white mb-2.5 font-lexend group-hover:text-primary dark:group-hover:text-premium-gold transition-colors duration-300">
                {feat.title}
              </h3>
              <p className="relative z-10 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feat.description}
              </p>

              {/* Bottom border accent on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-premium-gold group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
