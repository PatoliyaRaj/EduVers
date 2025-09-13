import React from "react";
import { Twitter, Linkedin, Github, Facebook, Globe, Mail } from "lucide-react";
import logo from "../assets/imgs/logo.png"; 

const Footer = ({ className }) => {
  return (
    <React.Fragment>  
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 ">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                <a href="/home">
                  <img src={logo} alt="EduVers Logo" className="w-12 h-12" />
                </a>
              </div>
              <span className="text-xl font-bold tracking-wide">EduVers.</span>
            </div>
            <p className="text-gray-400 text-sm leading-6 pr-4">
              Top learning experiences that create more talent in the world.
            </p>
            <div className="flex flex-col gap-4 mt-3">
              <div className="flex items-center gap-2">
                <Mail className="text-gray-400 hover:text-white transition-colors text-sm block" />
                <span className="text-gray-400 text-sm ">Stay updated </span>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-gray-600 w-full text-white focus:outline-none focus:border-white md:w-1/2 lg:w-full"
              />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  <div className="flex items-center">Press</div>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Social</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm order-2 sm:order-1">
            {` © ${new Date().getFullYear()} Ed-Circle. All rights reserved.`}
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 order-1 sm:order-2">
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
              aria-label="Dribbble"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </React.Fragment>
  );
};

export default Footer;
