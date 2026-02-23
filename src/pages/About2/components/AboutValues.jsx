import React from "react";

const values = [
  {
    icon: "visibility",
    title: "Transparency",
    description:
      "Open communication and honesty in every interaction with our students and partners. We believe trust is the foundation of great education.",
    side: "left",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    description:
      "Pioneering new learning methodologies that adapt to the changing global landscape. Staying ahead in education means embracing bold ideas.",
    side: "right",
  },
  {
    icon: "diversity_3",
    title: "Inclusivity",
    description:
      "Creating a safe space for diverse voices and backgrounds to thrive and grow together. Every learner deserves equal access and opportunity.",
    side: "left",
  },
];

const ShapeBlob = ({ variant }) => {
  const styles = {
    1: "from-primary/30 dark:from-premium-gold/20 to-primary/10 dark:to-premium-gold/5",
    2: "from-primary/20 dark:from-premium-gold/15 to-slate-200/50 dark:to-white/5",
    3: "from-primary/25 dark:from-premium-gold/18 to-primary/8 dark:to-premium-gold/3",
  };
  return (
    <div
      className={`w-28 h-28 rounded-[40%_60%_65%_35%/40%_45%_55%_60%] bg-gradient-to-br ${styles[variant]} opacity-80 dark:opacity-60 shrink-0`}
    />
  );
};

const AboutValues = () => {
  return (
    <section
      id="values"
      className="relative py-24 bg-white dark:bg-navy-charcoal transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 dark:bg-premium-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 dark:bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-5 border border-primary/20 dark:border-premium-gold/20">
            <span className="material-symbols-outlined text-sm">favorite</span>
            What We Stand For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-lexend text-slate-900 dark:text-white mb-4 leading-tight">
            Built on Values{" "}
            <span className="text-primary dark:text-premium-gold">
              That Matter
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We are committed to more than just video lectures. We are building
            an ecosystem where every student feels seen, supported, and
            empowered to lead.
          </p>
        </div>

        {/* Values list */}
        <div className="space-y-12">
          {values.map((v, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-6 items-center ${
                v.side === "right"
                  ? "md:flex-row-reverse md:text-right"
                  : "md:flex-row"
              }`}
            >
              {/* Organic shape with icon */}
              <div className="relative shrink-0 flex items-center justify-center">
                <ShapeBlob variant={i + 1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-navy-charcoal border border-slate-100 dark:border-white/10 shadow-lg flex items-center justify-center text-primary dark:text-premium-gold group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      {v.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold font-lexend text-slate-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-premium-gold transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                  {v.description}
                </p>
              </div>

              {/* Divider line */}
              {i < values.length - 1 && (
                <div className="w-full h-px bg-slate-100 dark:bg-white/5 md:hidden mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
