import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/imgs/logo.png";

const footerLinks = [
  {
    heading: "EduVerse",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "#" },
      { label: "Press", to: "#" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Learning",
    links: [
      { label: "Browse Courses", to: "/courses" },
      { label: "Certifications", to: "#" },
      { label: "Free Courses", to: "#" },
      { label: "Scholarships", to: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", to: "/help" },
      { label: "Terms", to: "#" },
      { label: "Privacy", to: "#" },
      { label: "Status", to: "#" },
    ],
  },
];

const socialLinks = [
  { icon: "share", label: "Share" },
  { icon: "public", label: "Web" },
  { icon: "alternate_email", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-navy-charcoal border-t border-slate-200 dark:border-slate-800/60 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative">
                <img
                  src={logo}
                  alt="EduVers Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-lexend">
                Edu<span className="text-primary">Verse</span>
              </span>
            </Link>

            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              Empowering learners worldwide through affordable, high-quality
              online education and mentorship from world-class instructors.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.icon}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/70 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-slate-900 dark:hover:bg-primary dark:hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/25"
                >
                  <span className="material-symbols-outlined text-lg">
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-5 text-sm uppercase tracking-wider">
                {col.heading}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Newsletter strip ── */}
        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">
              Stay in the loop
            </h5>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Get the latest courses and learning tips directly in your inbox.
            </p>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-56 text-sm px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <button className="px-5 py-2.5 bg-primary text-slate-900 font-bold text-sm rounded-xl hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-md shadow-primary/20 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-600 dark:text-slate-400">
              EduVerse Inc.
            </span>{" "}
            All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
            >
              English (US)
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-200"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
