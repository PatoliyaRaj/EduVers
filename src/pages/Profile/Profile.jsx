import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, Menu, Home, Book, BookOpen, 
  Calendar, Settings, HelpCircle, ChevronRight,
  Mail, Phone, MapPin, Award, Briefcase
} from "lucide-react";
import AvatarDropdown from "../../components/Avatar";

function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock user data - replace with real data from your backend
  const userData = {
    name: "John Doe",
    role: "Student",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    location: "New York, USA",
    about: "Passionate learner and technology enthusiast with a focus on web development and AI. Currently pursuing a degree in Computer Science.",
    courses: [
      { id: 1, name: "Advanced JavaScript", progress: 75, instructor: "Jane Smith" },
      { id: 2, name: "React Fundamentals", progress: 90, instructor: "Mike Johnson" },
      { id: 3, name: "Python for Data Science", progress: 45, instructor: "Sarah Williams" }
    ]
  };
  
  // Sidebar navigation items
  const navItems = [
    { icon: Home, label: "Dashboard", link: "/" },
    { icon: BookOpen, label: "Courses", link: "/courses" },
    { icon: Calendar, label: "Schedule", link: "/schedule" },
    { icon: Book, label: "Resources", link: "/resources" },
    { icon: Settings, label: "Settings", link: "/settings" },
    { icon: HelpCircle, label: "Help", link: "/help" }
  ];

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - With Toggle Functionality */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-30 transition-all duration-300 ease-in-out
          transform bg-white border-r border-gray-200 shadow-lg
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0
          ${sidebarOpen ? 'w-64' : 'w-0 md:w-20 overflow-hidden'}
        `}
      >
        {/* Sidebar Header with Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className={`flex items-center ${!sidebarOpen && 'md:hidden'}`}>
            <div className="w-10 h-10 bg-gradient-to-r from-[#343131] to-[#D8A25E] rounded-full flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className={`ml-3 text-xl font-bold text-[#343131] transition-opacity duration-300 ${!sidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
              EduVers
            </span>
          </div>
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md text-gray-500 hover:text-[#D8A25E] hover:bg-gray-100 focus:outline-none md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* User Profile Section */}
        <div className={`px-4 py-6 border-b border-gray-200 ${!sidebarOpen && 'md:px-2 md:py-3'}`}>
          <div className="flex items-center">
            <div className={`${!sidebarOpen ? 'mx-auto' : ''}`}>
              <AvatarDropdown 
                placeholder={userData.name.charAt(0)} 
                size={sidebarOpen ? "md" : "sm"}
                bgColor="bg-gradient-to-r from-[#343131] to-[#D8A25E]" 
                textColor="text-white"
                borderColor="ring-2 ring-[#D8A25E]/30"
              />
            </div>
            <div className={`ml-3 ${!sidebarOpen && 'md:hidden'}`}>
              <p className="text-sm font-medium text-[#343131]">{userData.name}</p>
              <p className="text-xs text-gray-500">{userData.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-2 py-4 space-y-1">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className={`
                flex items-center px-3 py-2 text-sm font-medium rounded-md
                transition-colors duration-200
                ${index === 0 
                  ? 'bg-gradient-to-r from-[#D8A25E]/10 to-[#D8A25E]/20 text-[#343131]' 
                  : 'text-gray-600 hover:bg-[#D8A25E]/10 hover:text-[#343131]'}
              `}
            >
              <item.icon size={18} className={`${!sidebarOpen ? 'mx-auto' : 'mr-3'} ${index === 0 ? 'text-[#D8A25E]' : ''}`} />
              <span className={`${!sidebarOpen && 'md:hidden'}`}>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className={`absolute bottom-0 w-full px-4 py-4 border-t border-gray-200 ${!sidebarOpen && 'md:px-2'}`}>
          <div className={`flex items-center ${!sidebarOpen ? 'justify-center' : 'justify-between'}`}>
            <button 
              onClick={toggleSidebar}
              className={`p-2 rounded-md text-gray-500 hover:text-[#D8A25E] focus:outline-none hidden md:block`}
            >
              <ChevronRight size={20} className={`transform transition-transform duration-300 ${!sidebarOpen ? '' : 'rotate-180'}`} />
            </button>
            <span className={`text-xs text-gray-500 ${!sidebarOpen && 'md:hidden'}`}>
              &copy; 2023 EduVers
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Overlay for mobile when sidebar is open */}
        <div 
          className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden
            ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleSidebar}
        ></div>

        {/* Top Navigation */}
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 md:px-6">
            <div className="flex items-center">
              <button 
                onClick={toggleSidebar} 
                className="p-2 mr-2 rounded-md text-gray-500 hover:text-[#D8A25E] hover:bg-gray-100 focus:outline-none"
              >
                <Menu size={20} />
              </button>
              <h1 className="text-xl font-semibold text-[#343131]">Profile</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-40 md:w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Profile Tabs */}
          <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar">
            {['overview', 'courses', 'achievements', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors duration-200 whitespace-nowrap
                  ${activeTab === tab 
                    ? 'text-[#D8A25E] border-b-2 border-[#D8A25E]' 
                    : 'text-gray-500 hover:text-[#343131] hover:border-b-2 hover:border-gray-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Content */}
        <main className="p-4 sm:p-6 md:p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-[#343131] to-[#D8A25E] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-4 shadow-lg">
                      {userData.name.charAt(0)}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#343131]">{userData.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{userData.role}</p>
                    
                    <div className="w-full space-y-3 mt-4">
                      <div className="flex items-center text-sm">
                        <Mail size={16} className="text-[#D8A25E] mr-2" />
                        <span className="text-gray-600 truncate">{userData.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone size={16} className="text-[#D8A25E] mr-2" />
                        <span className="text-gray-600 truncate">{userData.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin size={16} className="text-[#D8A25E] mr-2" />
                        <span className="text-gray-600 truncate">{userData.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 w-full">
                      <button className="w-full bg-gradient-to-r from-[#343131] to-[#D8A25E] text-white py-2 rounded-md font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* About & Activity */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-[#343131] mb-4 flex items-center">
                    <Briefcase size={18} className="text-[#D8A25E] mr-2" />
                    About
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{userData.about}</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-[#343131] mb-4 flex items-center">
                    <BookOpen size={18} className="text-[#D8A25E] mr-2" />
                    Current Courses
                  </h3>
                  <div className="space-y-4">
                    {userData.courses.map(course => (
                      <div key={course.id} className="border border-gray-100 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow hover:border-[#D8A25E]/30">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <h4 className="text-sm sm:text-md font-medium text-[#343131]">{course.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-500">Instructor: {course.instructor}</p>
                          </div>
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#D8A25E]/10 text-[#343131]">
                            {course.progress}% Complete
                          </span>
                        </div>
                        <div className="mt-3 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-[#343131] to-[#D8A25E] h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Achievement Highlights */}
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-[#343131] mb-4 flex items-center">
                    <Award size={18} className="text-[#D8A25E] mr-2" />
                    Recent Achievements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 rounded-lg border border-gray-100 bg-gradient-to-r from-[#343131]/5 to-[#D8A25E]/5">
                      <div className="w-10 h-10 rounded-full bg-[#D8A25E]/20 flex items-center justify-center mr-3">
                        <Award size={20} className="text-[#D8A25E]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#343131]">Perfect Attendance</h4>
                        <p className="text-xs text-gray-500">Completed 30 consecutive days</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 rounded-lg border border-gray-100 bg-gradient-to-r from-[#343131]/5 to-[#D8A25E]/5">
                      <div className="w-10 h-10 rounded-full bg-[#D8A25E]/20 flex items-center justify-center mr-3">
                        <Award size={20} className="text-[#D8A25E]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#343131]">Fast Learner</h4>
                        <p className="text-xs text-gray-500">Completed 5 courses in record time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would go here */}
          {activeTab === 'courses' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#343131] mb-6 flex items-center">
                <BookOpen size={24} className="text-[#D8A25E] mr-2" />
                My Courses
              </h2>
              <p className="text-gray-600">Your enrolled courses would appear here.</p>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#343131] mb-6 flex items-center">
                <Award size={24} className="text-[#D8A25E] mr-2" />
                Achievements
              </h2>
              <p className="text-gray-600">Your badges and certificates would appear here.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#343131] mb-6 flex items-center">
                <Settings size={24} className="text-[#D8A25E] mr-2" />
                Profile Settings
              </h2>
              <p className="text-gray-600">Account settings form would appear here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Profile;
