import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {
  Star,
  Search,
  ChevronDown,
  Menu,
  X,
  UserPlus,
  Home,
  BookOpen,
  Users,
  Info,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lgNavOpen, setLgNavOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      icon: Home,
      path:"/"
    },
    {
      name: "Courses",
      icon: BookOpen,
      path:"/courses"
    },
    {
      name: "Instructors",
      icon: Users,
      path:"/instructors"
    },
    {
      name: "About",
      icon: Info,
      path:"/about"
    },
    {
      name: "Contact",
      icon: Mail,
      path:"/contact"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header
      className={`bg-white/90 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 border-b border-slate-200/60 font-inter ${
        scrolled ? "shadow-xl shadow-slate-900/5 bg-white/95" : "shadow-sm"
      }`}
    >
      <div className="w-full mx-auto px-2 ">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 ">
          <div className="flex-shrink-0 flex items-center group cursor-pointer transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ring-2 ring-blue-100 group-hover:ring-blue-200">
                <Star
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white"
                  fill="currentColor"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="ml-2 sm:ml-3 flex flex-col">
              <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent tracking-tight font-inter">
                EduVers
              </span>
              <span className="text-xs text-blue-600 font-medium hidden sm:block font-inter">
                Learn & Grow
              </span>
            </div>
          </div>

          {/* Desktop: Search and Navigation */}
          <div className="hidden lg:flex items-center space-x-4  xl:space-x-6 flex-1 justify-center max-w-3xl xl:max-w-4xl mx-auto px-2 xl:px-4">
            {/* Enhanced Search Container */}
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all duration-300 shadow-sm hover:shadow-lg w-full max-w-xl xl:max-w-2xl ">
              <div className="pl-4 lg:pl-3 pr-3">
                <Search className="w-5 h-5 text-blue-500" />
              </div>
              <input
                type="text"
                placeholder="Search courses, topics, instructors..."
                className="flex-1 bg-transparent px-3 py-3 lg:py-1.5 text-sm lg:text-base text-slate-700 placeholder-slate-500 focus:outline-none min-w-0 font-medium font-inter"
              />
              <div className="relative mr-2">
                <select className="appearance-none bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 lg:px-4 py-2.5 lg:py-2 pr-8 lg:pr-9 rounded-xl text-sm lg:text-base font-semibold cursor-pointer hover:from-blue-100 hover:to-purple-100 focus:outline-none focus:ring-3 focus:ring-blue-500/20 transition-all duration-300 border border-blue-200 font-inter">
                  <option>All Categories</option>
                  <option>Programming</option>
                  <option>Design</option>
                  <option>Business</option>
                  <option>Marketing</option>
                  <option>Data Science</option>
                </select>
                <ChevronDown className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-600 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links - Hidden on lg, visible on xl+ */}
          <nav className="hidden xl:flex lg:align-center items-center space-x-1 xl:space-x-1">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.path || "/"}
                  className="flex items-center space-x-2 px-3 lg:px-2 xl:px-5 py-2.5 lg:py-3 text-slate-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-all duration-300 relative group rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-inter"
                >
                  <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-slate-500 group-hover:text-blue-500 transition-colors duration-300" />
                  <span className="whitespace-nowrap">{link.name}</span>
                  <span className="absolute -bottom-1 left-1/2  transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-[90%]   rounded-full"></span>
                </Link>
              );
            })}
          </nav>

          {/* LG Navigation Toggle Button - Only visible on lg screens */}
          <div className="hidden lg:flex xl:hidden items-center">
            <button
              onClick={() => setLgNavOpen(!lgNavOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:text-blue-600"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 ml-2 xl:ml-4">
            <button className="flex items-center space-x-2 px-4 lg:px-5 xl:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-inter">
              <UserPlus className="w-4 h-4" />
              <span className="whitespace-nowrap">Join EduVers</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              className="mobile-menu-button p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:text-blue-600"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* LG Screen Vertical Navigation - Only visible on lg screens */}
      <div
        className={`hidden lg:block xl:hidden transition-all duration-300 ease-in-out ${
          lgNavOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/60 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href="/"
                  className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl font-medium transition-all duration-300 group font-inter"
                  onClick={() => setLgNavOpen(false)}
                >
                  <IconComponent className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors duration-300" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu lg:hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/60 shadow-xl`}
      >
        <div className="px-4 sm:px-6 py-6 space-y-6">
          {/* Mobile Search */}
          <div className="space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
              <input
                type="text"
                placeholder="Search courses, topics..."
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm font-inter"
              />
            </div>
            <select className="w-full px-4 py-4 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gradient-to-r from-blue-50 to-purple-50 font-medium text-blue-700 font-inter">
              <option>All Categories</option>
              <option>Programming</option>
              <option>Design</option>
              <option>Business</option>
              <option>Marketing</option>
              <option>Data Science</option>
            </select>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2 pt-6 border-t border-slate-200/60">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href="/"
                  className="flex items-center space-x-3 px-4 py-4 text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl font-medium transition-all duration-300 group font-inter"
                  onClick={() => setOpen(false)}
                >
                  <IconComponent className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors duration-300" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="space-y-3 pt-6 border-t border-slate-200/60">
            <button className="flex items-center justify-center space-x-2 w-full px-4 py-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg transform hover:scale-[1.02] font-inter">
              <UserPlus className="w-4 h-4" />
              <span>Join EduVers</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
