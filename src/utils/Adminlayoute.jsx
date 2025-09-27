import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Book,
  BookOpen,
  Calendar,
  HelpCircle,
  Home,
  Settings,
  User,
  Users2,
  Menu,
  LogOut,
  Search,
} from "lucide-react";
import AvatarDropdown from "../components/Avatar";
import API from "./axiosintence";
import { useMutation } from "@tanstack/react-query";
import { ErrorToster, SuccessToster } from "../components/toster";
// Enhanced Dashboard Layout Component
const AdminLayout = ({
  children,
  pageTitle = "Dashboard",
  showSearch = true,
  customNavItems = null,
  className = "",
  subheader = "",
  givespace = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const userRoll = localStorage.getItem("UserType")?.toUpperCase() || null;
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsExpanded(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultNavItems =
    userRoll === "TEACHER"
      ? [
          { id: "profile", icon: User, label: "Profile", link: "/profile" },
          { id: "dashboard", icon: Home, label: "Dashboard", link: "/" },
          {
            id: "courses",
            icon: BookOpen,
            label: "Courses",
            link: "/managecourses",
          },
          {
            id: "addcourse",
            icon: Book,
            label: "Add Course",
            link: "/AddCourse",
          },
          {
            id: "users",
            icon: Users2,
            label: "Active Users",
            link: "/ActiveUsers",
          },
          {
            id: "settings",
            icon: Settings,
            label: "Settings",
            link: "/settings",
          },
          { id: "help", icon: HelpCircle, label: "Help", link: "/help" },
        ]
      : [
          { id: "dashboard", icon: Home, label: "Dashboard", link: "/" },
          { id: "courses", icon: BookOpen, label: "Courses", link: "/courses" },
          {
            id: "schedule",
            icon: Calendar,
            label: "Schedule",
            link: "/schedule",
          },
          {
            id: "resources",
            icon: Book,
            label: "Resources",
            link: "/resources",
          },
          {
            id: "settings",
            icon: Settings,
            label: "Settings",
            link: "/settings",
          },
          { id: "help", icon: HelpCircle, label: "Help", link: "/help" },
        ];

  const navItems = customNavItems || defaultNavItems;

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const { mutateAsync } = useMutation({
    mutationKey: ["signOut"],
    mutationFn: async (email) => {
      const response = await API.post(
        "Logout/Userlogout",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      SuccessToster("SUCCESSFULLY signed out", 2500);
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    },
    onError: (error) => {
      ErrorToster(error.message, 2500);
    },
  });

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const handleSignOut = async () => {
    try {
      await mutateAsync(email);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const sidebarVariants = {
    expanded: { width: "250px" },
    collapsed: { width: "64px" },
  };

  const overlayVariants = {
    visible: { opacity: 0.5 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] block w-full">
      {/* Animated Sidebar */}
      {isMobile && isExpanded && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-20 block"
          onClick={toggleSidebar}
        />
      )}

      <AnimatePresence>
        <motion.div
          initial={isExpanded ? "expanded" : "collapsed"}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={sidebarVariants}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-0 h-screen bg-white shadow-lg z-30 block overflow-hidden border-r border-gray-200"
        >
          {/* Sidebar Header with Logo */}
          <div className="block border-b border-gray-200">
            <div className="p-4 block">
              <div className=" block flex flex-row gap-4">
                <div
                  className={`${
                    !isExpanded ? "mx-auto text-center" : ""
                  } block `}
                >
                  <AvatarDropdown
                    placeholder="E"
                    size={isExpanded ? "md" : "sm"}
                    bgColor="bg-gradient-to-r from-[#343131] to-[#D8A25E]"
                    textColor="text-white"
                    borderColor="ring-2 ring-[#D8A25E]/30"
                    showdropdown={false}
                  />
                </div>
                {isExpanded && (
                  <div className="mt-2 block">
                    <p className="text-sm font-medium text-[#343131] block">
                      EduVers
                    </p>
                    <p className="text-xs text-gray-500 block">{userRoll}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="block overflow-y-auto py-4 px-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`w-full block p-3 mb-1 rounded-md text-sm font-medium
                    ${!isExpanded ? "text-center" : "px-4"}
                    ${
                      isActiveLink(item.link)
                        ? "bg-gradient-to-r from-[#D8A25E]/10 to-[#D8A25E]/20 text-[#343131] border-r-4 border-[#D8A25E]"
                        : "text-gray-600 hover:bg-[#D8A25E]/10 hover:text-[#343131]"
                    }`}
                  aria-label={item.label}
                >
                  <IconComponent
                    size={18}
                    className={`${
                      isExpanded ? "mr-3 inline-block" : "mx-auto block"
                    } ${isActiveLink(item.link) ? "text-[#D8A25E]" : ""}`}
                  />
                  {isExpanded && (
                    <span className="inline-block">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 block">
            <div className="p-4 block">
              <div className={`${!isExpanded ? "text-center" : ""} block`}>
                <button
                  className={`w-full block mt-2 rounded-lg
                    ${!isExpanded ? "mx-auto" : ""}
                    text-red-600 hover:bg-red-50 transition-colors p-2`}
                  aria-label="Logout"
                  onClick={() => handleSignOut()}
                >
                  <LogOut
                    size={20}
                    className={`${
                      isExpanded ? "mr-2 inline-block" : "mx-auto block"
                    }`}
                  />
                  {isExpanded && <span className="inline-block">Logout</span>}
                </button>

                {isExpanded && (
                  <div className="mt-4 text-xs text-gray-500 block">
                    &copy; {new Date().getFullYear()} EduVers
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div
        className={`block ${
          isExpanded ? "md:ml-[250px]" : "md:ml-[64px]"
        } transition-all duration-300`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm block sticky top-0 z-20 w-full">
          <div className="h-16 px-4 md:px-6 block">
            <div className="py-4 block w-full">
              <button
                className="p-2 mr-2 rounded-md text-gray-500 hover:text-[#D8A25E] hover:bg-gray-100 focus:outline-none inline-block align-middle"
                onClick={toggleSidebar}
              >
                <Menu className="w-5 h-5" />
              </button>

              <h1 className="text-xl font-semibold text-[#343131] inline-block align-middle">
                {pageTitle}
              </h1>

              <div className="float-right inline-block align-middle">
                {showSearch && (
                  <div className="inline-block mr-4 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main
          className={`block w-full ${
            givespace ? "p-4 sm:p-6 md:p-8" : ""
          } ${className}`}
        >
          <div className="block w-full overflow-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
