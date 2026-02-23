import React from "react";
import Contect from "../../../assets/imgs/contectusimage.png";


const contactItems = [
  {
    icon: "call",
    label: "Call Us",
    value: "+91 75758 76775",
    sub: "Mon–Fri, 9AM – 6PM IST",
    href: "tel:+917575876775",
  },
  {
    icon: "mail",
    label: "Email Us",
    value: "support@eduverse.com",
    sub: "Response within ~24 hours",
    href: "mailto:support@eduverse.com",
  },
  {
    icon: "location_on",
    label: "Office",
    value: "224 Pujan Park, Near VIP Tower",
    sub: "Surat, Gujarat 395007",
    href: null,
  },
];

const socialLinks = [
  { icon: "share", label: "Share" },
  { icon: "public", label: "Website" },
  { icon: "thumb_up", label: "Follow" },
];

const ContactInfoPanel = () => {
  return (
    <div className="lg:sticky lg:top-28">
      <div className="relative bg-white dark:bg-transparent dark:dark-glass rounded-3xl p-8 lg:p-10 overflow-hidden border border-slate-100 dark:border-white/10 shadow-sm dark:shadow-xl transition-all duration-300">
        {/* ── Decorative Watermark Icon ── */}
        <div className="absolute -right-6 -top-6 opacity-[0.095] dark:opacity-[0.4] pointer-events-none select-none">
          <span
            className="material-symbols-outlined text-primary dark:text-premium-gold"
            style={{ fontSize: "220px", lineHeight: 1 }}
          >
            school
          </span>
        </div>

        {/* ── Decorative glow blob ── */}
        <div className="absolute -bottom-20 -left-20 w-[280px] h-[280px] dark:bg-premium-gold/5 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10">
          {/* Brand name heading */}
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-lexend mb-8 tracking-tight">
            Edu
            <span className="text-primary dark:text-premium-gold">Verse</span>
          </h3>

          {/* Contact items list */}
          <div className="space-y-7">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                {/* Icon box */}
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl flex items-center justify-center text-primary dark:text-premium-gold shadow-sm group-hover:scale-110 group-hover:border-primary/30 dark:group-hover:border-premium-gold/30 transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-base font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-premium-gold transition-colors duration-200 truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-slate-900 dark:text-white truncate">
                      {item.value}
                    </p>
                  )}
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Divider + Social links ── */}
          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/5">
            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              Follow Our Journey
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <button
                  key={i}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary dark:hover:bg-premium-gold hover:text-slate-900 dark:hover:text-slate-900 hover:border-primary dark:hover:border-premium-gold hover:scale-110 shadow-sm transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-lg">
                    {s.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200 dark:ring-white/10">
            <img
              src={Contect}
              alt="Diverse group of students collaborating and learning together"
              className="w-full h-48 object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-500 origin-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPanel;
