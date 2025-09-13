import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, Menu, Home, Book, BookOpen, 
  Calendar, Settings, HelpCircle, ChevronRight,
   Mail, Phone, MapPin,
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
    <div className="flex h-screen bg-gray-50">
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
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <span className={`ml-3 text-xl font-bold text-gray-800 transition-opacity duration-300 ${!sidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
              EduVers
            </span>
          </div>
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none md:hidden"
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
                bgColor="bg-gradient-to-r from-blue-500 to-indigo-600" 
                textColor="text-white"
                borderColor="ring-2 ring-white"
              />
            </div>
            <div className={`ml-3 ${!sidebarOpen && 'md:hidden'}`}>
              <p className="text-sm font-medium text-gray-900">{userData.name}</p>
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
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
              `}
            >
              <item.icon size={18} className={`${!sidebarOpen ? 'mx-auto' : 'mr-3'}`} />
              <span className={`${!sidebarOpen && 'md:hidden'}`}>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className={`absolute bottom-0 w-full px-4 py-4 border-t border-gray-200 ${!sidebarOpen && 'md:px-2'}`}>
          <div className={`flex items-center ${!sidebarOpen ? 'justify-center' : 'justify-between'}`}>
            <button 
              onClick={toggleSidebar}
              className={`p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none hidden md:block`}
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
                className="p-2 mr-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <Menu size={20} />
              </button>
              <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-40 md:w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Profile Tabs */}
          <div className="flex border-b border-gray-200">
            {['overview', 'courses', 'achievements', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors duration-200
                  ${activeTab === tab 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profile Card */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                      {userData.name.charAt(0)}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{userData.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{userData.role}</p>
                    
                    <div className="w-full space-y-3 mt-4">
                      <div className="flex items-center text-sm">
                        <Mail size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-600">{userData.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-600">{userData.phone}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-600">{userData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About & Activity */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
                  <p className="text-gray-600">{userData.about}</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Courses</h3>
                  <div className="space-y-4">
                    {userData.courses.map(course => (
                      <div key={course.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-md font-medium text-gray-800">{course.name}</h4>
                            <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
                          </div>
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            {course.progress}% Complete
                          </span>
                        </div>
                        <div className="mt-3 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would go here */}
          {activeTab === 'courses' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">My Courses</h2>
              <p className="text-gray-600">Detailed course content would appear here.</p>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Achievements</h2>
              <p className="text-gray-600">Your badges and certificates would appear here.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Settings</h2>
              <p className="text-gray-600">Account settings form would appear here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Profile;
