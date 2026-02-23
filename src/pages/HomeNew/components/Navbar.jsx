import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { useAuth } from "../../../utils/users";
import AvatarDropdown from "../../../components/Avatar";
import logo from "../../../assets/imgs/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Help", to: "/help" },
];

const Navbar = () => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:dark-glass backdrop-blur-md shadow-md dark:shadow-black/30 border-b border-slate-200/60 dark:border-slate-700/50"
          : "bg-white dark:bg-navy-charcoal border-b border-slate-100 dark:border-slate-800/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
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

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/8 dark:hover:bg-primary/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search (desktop) */}
            <div className="hidden md:flex relative items-center">
              {searchOpen ? (
                <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 animate-in fade-in duration-200 w-56">
                  <span className="material-symbols-outlined text-slate-400 text-base shrink-0">
                    search
                  </span>
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search skills..."
                    className="bg-transparent text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 outline-none w-full"
                    onBlur={() => setSearchOpen(false)}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-primary/8 dark:hover:bg-primary/10 transition-all duration-200"
                  aria-label="Search"
                >
                  <span className="material-symbols-outlined text-xl">
                    search
                  </span>
                </button>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-primary/8 dark:hover:bg-primary/10 transition-all duration-200 group"
              aria-label="Toggle dark mode"
            >
              <span
                className="material-symbols-outlined text-xl transition-all duration-300"
                style={{
                  fontVariationSettings: isDark ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            {/* Auth: Avatar or Login/Signup */}
            {isAuthenticated ? (
              <AvatarDropdown
                placeholder={user?.fullName || user?.email || "U"}
                size="sm"
                bgColor="bg-primary/10 hover:bg-primary/20"
                textColor="text-primary"
                borderColor="ring-2 ring-primary/40 hover:ring-primary/70"
              />
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/Login"
                  className="hidden sm:inline-flex text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-primary/8 dark:hover:bg-primary/10"
                >
                  Log In
                </Link>
                <Link
                  to="/Sign-Up"
                  className="inline-flex items-center gap-1.5 bg-primary hover:brightness-110 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 text-slate-900 text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-primary/20 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-base">
                    rocket_launch
                  </span>
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-xl">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 bg-white dark:bg-navy-charcoal border-t border-slate-100 dark:border-slate-800/60 space-y-1">
          {/* Mobile search */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-xl px-3 py-2.5 mb-3">
            <span className="material-symbols-outlined text-slate-400 text-base">
              search
            </span>
            <input
              type="text"
              placeholder="Search skills..."
              className="bg-transparent text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 outline-none w-full"
            />
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/8 dark:hover:bg-primary/10 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {!isAuthenticated && (
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
              <Link
                to="/Login"
                className="text-center py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/Sign-Up"
                className="text-center py-3 rounded-xl text-sm font-bold bg-primary text-slate-900 hover:brightness-110 transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
