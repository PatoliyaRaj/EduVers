import React from "react";
import teacher1 from "../../../assets/imgs/teacher1.jpg";
import teacher2 from "../../../assets/imgs/teacher2.jpg";
import teacher3 from "../../../assets/imgs/teacher3.jpg";
import teacher4 from "../../../assets/imgs/teacher4.jpg";

const team = [
  {
    name: "Dr. Elena Vance",
    role: "CEO & Co-Founder",
    quote:
      '"Education is the most powerful weapon which you can use to change the world."',
    img: teacher1,
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    quote:
      '"Leveraging tech to bridge the gap between curiosity and knowledge."',
    img: teacher2,
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Learning",
    quote: '"Great teaching is about lighting a fire, not filling a bucket."',
    img: teacher3,
  },
  {
    name: "David Okoro",
    role: "Director of Strategy",
    quote: '"Sustainable impact requires inclusive growth models."',
    img: teacher4,
  },
];

const AboutTeam = () => {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-background-dark transition-colors duration-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] dark:bg-premium-gold/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] dark:bg-primary/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-primary/10 dark:bg-premium-gold/10 text-primary dark:text-premium-gold text-xs font-bold tracking-wider uppercase mb-5 border border-primary/20 dark:border-premium-gold/20">
            <span className="material-symbols-outlined text-sm">people</span>
            The Visionaries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-lexend text-slate-900 dark:text-white mb-4">
            Meet Our{" "}
            <span className="text-primary dark:text-premium-gold">
              Leadership
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The visionaries behind EduVerse, committed to democratizing
            education worldwide.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-transparent dark:dark-glass rounded-2xl border border-slate-100 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl dark:hover:border-premium-gold/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <button
                    aria-label="Profile"
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-primary dark:hover:bg-premium-gold hover:text-slate-900 text-white flex items-center justify-center transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-base">
                      link
                    </span>
                  </button>
                  <button
                    aria-label="Email"
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-primary dark:hover:bg-premium-gold hover:text-slate-900 text-white flex items-center justify-center transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-base">
                      alternate_email
                    </span>
                  </button>
                </div>
                {/* Bottom fade gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-[#1a1d2e] to-transparent pointer-events-none" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 font-lexend">
                  {member.name}
                </h3>
                <p className="text-xs font-black uppercase tracking-wider text-primary dark:text-premium-gold mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
                  {member.quote}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="h-0.5 w-0 group-hover:w-full bg-primary dark:bg-premium-gold transition-all duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
