// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Search,
//   Menu,
//   Home,
//   Book,
//   BookOpen,
//   Settings,
//   HelpCircle,
//   ChevronRight,
//   Users2,
//   User,
//   Calendar,
// } from "lucide-react";
// import AvatarDropdown from "../components/Avatar";

// const AdminLayout = ({
//   children,
//   pageTitle = "Dashboard",
//   showSearch = true,
//   customNavItems = null,
//   className = "",
//   subheader = "",
//   givespace = false,
// }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const location = useLocation();
//   const userRoll = localStorage.getItem("UserType").toUpperCase() || null;

//   const defaultNavItems =
//     userRoll === "TEACHER"
//       ? [
//           { icon: User, label: "Profile", link: "/profile" },
//           { icon: Home, label: "Dashboard", link: "/" },
//           { icon: BookOpen, label: "Courses", link: "/courses" },
//           { icon: Book, label: "Add Course", link: "/AddCourse" },
//           { icon: Users2, label: "Active Users", link: "/ActiveUsers" },
//           { icon: Settings, label: "Settings", link: "/settings" },
//           { icon: HelpCircle, label: "Help", link: "/help" },
//         ]
//       : [
//           { icon: Home, label: "Dashboard", link: "/" },
//           { icon: BookOpen, label: "Courses", link: "/courses" },
//           { icon: Calendar, label: "Schedule", link: "/schedule" },
//           { icon: Book, label: "Resources", link: "/resources" },
//           { icon: Settings, label: "Settings", link: "/settings" },
//           { icon: HelpCircle, label: "Help", link: "/help" },
//         ];

//   const navItems = customNavItems || defaultNavItems;

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const isActiveLink = (link) => {
//     return location.pathname === link;
//   };

//   return (
//     <React.Fragment>
//       <div className="flex absolute top-0 left-0 w-full h-full bg-[#F9F9F9]">
//         <div
//           className={`
//           sticky inset-y-0 left-0 z-30 transition-all duration-300 ease-in-out
//           transform bg-white border-r border-gray-200 shadow-lg
//           ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           md:relative md:translate-x-0
//           ${sidebarOpen ? "w-64" : "w-0 md:w-20 overflow-hidden"}
//         `}
//         >
//           {/* Sidebar Header with Logo */}
//           <div
//             className={`px-4 py-6 border-b border-gray-200 ${
//               !sidebarOpen && "md:px-2 md:py-3"
//             }`}
//           >
//             <div className="flex items-center">
//               <div className={`${!sidebarOpen ? "mx-auto" : ""}`}>
//                 <AvatarDropdown
//                   placeholder="E"
//                   size={sidebarOpen ? "md" : "sm"}
//                   bgColor="bg-gradient-to-r from-[#343131] to-[#D8A25E]"
//                   textColor="text-white"
//                   borderColor="ring-2 ring-[#D8A25E]/30"
//                   showdropdown={false}
//                 />
//               </div>
//               <div className={`ml-3 ${!sidebarOpen && "md:hidden"}`}>
//                 <p className="text-sm font-medium text-[#343131]">EduVers</p>
//                 <p className="text-xs text-gray-500">{userRoll}</p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="px-2 py-4 space-y-1">
//             {navItems.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.link}
//                 className={`
//                 flex items-center px-3 py-2 text-sm font-medium rounded-md
//                 transition-colors duration-200
//                 ${
//                   isActiveLink(item.link)
//                     ? "bg-gradient-to-r from-[#D8A25E]/10 to-[#D8A25E]/20 text-[#343131]"
//                     : "text-gray-600 hover:bg-[#D8A25E]/10 hover:text-[#343131]"
//                 }
//               `}
//               >
//                 <item.icon
//                   size={18}
//                   className={`${!sidebarOpen ? "mx-auto" : "mr-3"} ${
//                     isActiveLink(item.link) ? "text-[#D8A25E]" : ""
//                   }`}
//                 />
//                 <span className={`${!sidebarOpen && "md:hidden"}`}>
//                   {item.label}
//                 </span>
//               </Link>
//             ))}
//           </nav>

//           {/* Sidebar Footer */}
//           <div
//             className={`absolute bottom-0 w-full px-4 py-4 border-t border-gray-200 ${
//               !sidebarOpen && "md:px-2"
//             }`}
//           >
//             <div
//               className={`flex items-center ${
//                 !sidebarOpen ? "justify-center" : "justify-between"
//               }`}
//             >
//               <button
//                 onClick={toggleSidebar}
//                 className={`p-2 rounded-md text-gray-500 hover:text-[#D8A25E] focus:outline-none hidden md:block`}
//               >
//                 <ChevronRight
//                   size={20}
//                   className={`transform transition-transform duration-300 ${
//                     !sidebarOpen ? "" : "rotate-180"
//                   }`}
//                 />
//               </button>
//               <span
//                 className={`text-xs text-gray-500 ${
//                   !sidebarOpen && "md:hidden"
//                 }`}
//               >
//                 &copy; {new Date().getFullYear()} EduVers
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 overflow-y-auto">
//           {/* Overlay for mobile when sidebar is open */}
//           <div
//             className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden
//             ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//             onClick={toggleSidebar}
//           ></div>

//           {/* Top Navigation */}
//           <header
//             className={`sticky top-0 z-10 bg-white shadow-sm  ${subheader} `}
//           >
//             <div className="flex items-center justify-between h-16 px-4 md:px-6">
//               <div className="flex items-center">
//                 <button
//                   onClick={toggleSidebar}
//                   className="p-2 mr-2 rounded-md text-gray-500 hover:text-[#D8A25E] hover:bg-gray-100 focus:outline-none"
//                 >
//                   <Menu size={20} />
//                 </button>
//                 <h1 className="text-xl font-semibold text-[#343131]">
//                   {pageTitle}
//                 </h1>
//               </div>

//               {showSearch && (
//                 <div className="flex items-center space-x-3">
//                   <div className="relative hidden sm:block">
//                     <Search
//                       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                       size={18}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       className="w-40 md:w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent"
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </header>

//           {/* Content Area for Children */}
//           <div className="flex-1">
//             <main className={` ${givespace ? "p-4 sm:p-6 md:p-8" : ""} ${className}`}>{children}</main>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default AdminLayout;


// *********************************************





import { useState, useEffect } from "react";
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
  LogOut
} from "lucide-react";
import AvatarDropdown from "./Avatar";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const location = useLocation();
  const userRoll = localStorage.getItem("UserType")?.toUpperCase() || null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsExpanded(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems =
    userRoll === "TEACHER"
      ? [
          { id: "profile", icon: User, label: "Profile", link: "/profile" },
          { id: "dashboard", icon: Home, label: "Dashboard", link: "/" },
          { id: "courses", icon: BookOpen, label: "Courses", link: "/courses" },
          { id: "addcourse", icon: Book, label: "Add Course", link: "/AddCourse" },
          { id: "users", icon: Users2, label: "Active Users", link: "/ActiveUsers" },
          { id: "settings", icon: Settings, label: "Settings", link: "/settings" },
          { id: "help", icon: HelpCircle, label: "Help", link: "/help" },
        ]
      : [
          { id: "dashboard", icon: Home, label: "Dashboard", link: "/" },
          { id: "courses", icon: BookOpen, label: "Courses", link: "/courses" },
          { id: "schedule", icon: Calendar, label: "Schedule", link: "/schedule" },
          { id: "resources", icon: Book, label: "Resources", link: "/resources" },
          { id: "settings", icon: Settings, label: "Settings", link: "/settings" },
          { id: "help", icon: HelpCircle, label: "Help", link: "/help" },
        ];

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const isActiveLink = (link) => {
    return location.pathname === link;
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
    <>
      {isMobile && isExpanded && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-20"
          onClick={toggleSidebar}
        />
      )}
      <AnimatePresence>
        <motion.div
          initial={isExpanded ? "expanded" : "collapsed"}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={sidebarVariants}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-0 h-screen bg-white shadow-lg z-30 flex flex-col overflow-hidden border-r border-gray-200"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <AvatarDropdown
                placeholder="E"
                size={isExpanded ? "md" : "sm"}
                bgColor="bg-gradient-to-r from-[#343131] to-[#D8A25E]"
                textColor="text-white"
                borderColor="ring-2 ring-[#D8A25E]/30"
                showdropdown={false}
              />
              {isExpanded && (
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-[#343131]">EduVers</span>
                  <span className="text-sm text-gray-500">{userRoll}</span>
                </div>
              )}
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-[#D8A25E]/10 transition-colors text-gray-600 hover:text-[#D8A25E]"
              aria-label="Toggle Sidebar"
            >
              <Menu size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center p-3 mb-1 transition-all rounded-md text-sm font-medium
                    ${!isExpanded ? "justify-center" : "px-4"}
                    ${
                      isActiveLink(item.link)
                        ? "bg-gradient-to-r from-[#D8A25E]/10 to-[#D8A25E]/20 text-[#343131] border-r-4 border-[#D8A25E]"
                        : "text-gray-600 hover:bg-[#D8A25E]/10 hover:text-[#343131]"
                    }`}
                  aria-label={item.label}
                >
                  <IconComponent 
                    size={18} 
                    className={isActiveLink(item.link) ? "text-[#D8A25E]" : ""} 
                  />
                  {isExpanded && <span className="ml-3">{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-gray-200 p-4">

            <button
              className={`w-full flex items-center p-3 mt-2 rounded-lg
                ${!isExpanded ? "justify-center" : ""}
                text-red-600 hover:bg-red-50 transition-colors`}
              aria-label="Logout"
            >
              <LogOut size={20} />
              {isExpanded && <span className="ml-3">Logout</span>}
            </button>
          </div>

          {isExpanded && (
            <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
              &copy; {new Date().getFullYear()} EduVers v1.0.0
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
