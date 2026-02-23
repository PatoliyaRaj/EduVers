import React from "react";

const ContactHero = () => {
  return (
    <section className="relative bg-background-light dark:bg-navy-charcoal overflow-hidden transition-colors duration-300">
      {/* === Decorative Background === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 dark:bg-premium-gold/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 dark:bg-premium-gold/5 rounded-full blur-[100px]" />
        {/* Dark mode dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#ecb613 1px, transparent 1px)`,
            backgroundSize: "1.75rem 1.75rem",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-6 border border-primary/20 dark:border-premium-gold/20 backdrop-blur-sm">
          <span className="material-symbols-outlined text-sm">
            contact_support
          </span>
          Get In Touch
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 dark:text-white mb-6 font-lexend">
          We&apos;d love to{" "}
          <span className="text-primary dark:text-premium-gold relative inline-block">
            hear from you
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
            >
              <path
                d="M0 3 Q50 0 100 3 Q150 6 200 3"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className="text-primary dark:text-premium-gold"
              />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Whether you have a question about courses, pricing, or anything else —
          our team is ready to help you succeed.
        </p>

        {/* Quick stats row */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { icon: "schedule", label: "Avg. Response", value: "~24 hrs" },
            { icon: "headset_mic", label: "Support Hours", value: "9AM – 6PM" },
            { icon: "forum", label: "WhatsApp Reply", value: "< 5 mins" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white dark:bg-transparent dark:dark-glass border border-slate-100 dark:border-white/10 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 dark:hover:border-premium-gold/30 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary dark:text-premium-gold text-xl">
                {stat.icon}
              </span>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider">
                  {stat.label}
                </p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
