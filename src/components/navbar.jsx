
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "About us", "Courses", "Contact us", "FAQ's"];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (open) setOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:block">WEEKEND</span>
          </div>

          {/* Desktop: Search and Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center max-w-2xl">
            {/* Search Container */}
            <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 hover:border-gray-300 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 transition-all duration-200">
              <div className="pl-4 pr-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Want to learn?"
                className="flex-1 bg-transparent px-2 py-3 text-sm text-gray-700 placeholder-gray-500 focus:outline-none min-w-0"
              />
              <div className="relative">
                <select className="appearance-none bg-teal-500 text-white px-4 py-3 pr-8 rounded-r-full text-sm font-medium cursor-pointer hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors duration-200">
                  <option>Explore</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>Marketing</option>
                  <option>Business</option>
                </select>
                <svg className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 hover:text-teal-600 font-medium text-sm transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-8">
            <button className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200">
              Sign in
            </button>
            <button className="px-6 py-2 text-sm font-medium text-white bg-teal-500 rounded-full hover:bg-teal-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              Create free account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white border-t border-gray-200 shadow-lg`}>
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Search */}
          <div className="space-y-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Want to learn?"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200"
              />
            </div>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-200">
              <option>Explore</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
              <option>Business</option>
            </select>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-2 pt-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <button className="w-full px-4 py-3 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Sign in
            </button>
            <button className="w-full px-4 py-3 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-all duration-200 shadow-md">
              Create free account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}