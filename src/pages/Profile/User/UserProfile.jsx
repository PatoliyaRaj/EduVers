import React, { useState } from "react";
import {
  Mail,
  Phone,
  Award,
  Briefcase,
  User2,
  BookOpen,
  Settings,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import API from "../../../utils/axiosintence";
import AdminLayout from "../../../utils/Adminlayoute";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview");
  const userRoll = localStorage.getItem("UserType").toUpperCase() || "Student";
  const email = localStorage.getItem("userEmail");

  const {
    data: usersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userData", email],
    queryFn: async () => {
      if (!email) {
        throw new Error("No email found in localStorage");
      }

      console.log("Making API call with email:", email);
      const response = await API.get(`/User/getuserdetails/${email}`);
      console.log("API Response:", response);
      return response.data.user;
    },
    enabled: !!email,
  });

  if (isLoading) {
    return (
      <AdminLayout pageTitle="Profile" showSearch={false}>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D8A25E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout pageTitle="Profile" showSearch={false}>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#D8A25E] text-white rounded-md hover:opacity-90"
            >
              Retry
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  console.log("Fetched User Data:", usersData);

  const userData = {
    name:
      `${usersData?.firstName || ""} ${usersData?.lastName || ""}`.trim() ||
      "User",
    role: userRoll,
    email: usersData?.email || email || "user@example.com",
    age: usersData?.age || "N/A",
    gender: usersData?.gender || "N/A",
    phone: usersData?.phoneNo || "+1 (123) 456-7890",
    about:
      "Passionate learner dedicated to continuous growth and skill development through online education.",
    courses: [
      {
        id: 1,
        name: "Advanced JavaScript",
        progress: 75,
        instructor: "Jane Smith",
      },
      {
        id: 2,
        name: "React Fundamentals",
        progress: 90,
        instructor: "Mike Johnson",
      },
      {
        id: 3,
        name: "Python for Data Science",
        progress: 45,
        instructor: "Sarah Williams",
      },
    ],
  };

  return (
    <AdminLayout pageTitle="Profile" showSearch={true} subheader="shadow-none">
      <React.Fragment>
        <div className="mb-6">
          <div className="flex overflow-x-auto  bg-white rounded-t-lg px-4  ">
            {["overview", "courses", "achievements", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium capitalize transition-colors duration-200 whitespace-nowrap
                ${
                  activeTab === tab
                    ? "text-[#D8A25E] border-b-2 border-[#D8A25E]"
                    : "text-gray-500 hover:text-[#343131] hover:border-b-2 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-[#343131] to-[#D8A25E] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-4 shadow-lg">
                      {userData.name.charAt(0).toUpperCase()}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#343131]">
                      {userData.name.toUpperCase()}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      {userData.role}
                    </p>

                    <div className="w-full space-y-3 mt-4">
                      <div className="flex items-center text-sm">
                        <Mail size={16} className="text-[#D8A25E] mr-2" />
                        <span className="text-gray-600 truncate">
                          {userData.email}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone size={16} className="text-[#D8A25E] mr-2" />
                        <span className="text-gray-600 truncate">
                          {userData.phone}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <User2 size={16} className="text-[#D8A25E] mr-2" />
                        <span className="text-gray-600 truncate">
                          {userData.gender.toUpperCase()}
                        </span>
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
                  <p className="text-gray-600 text-sm sm:text-base">
                    {userData.about}
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-[#343131] mb-4 flex items-center">
                    <BookOpen size={18} className="text-[#D8A25E] mr-2" />
                    Current Courses
                  </h3>
                  <div className="space-y-4">
                    {userData.courses.map((course) => (
                      <div
                        key={course.id}
                        className="border border-gray-100 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow hover:border-[#D8A25E]/30"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <h4 className="text-sm sm:text-md font-medium text-[#343131]">
                              {course.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500">
                              Instructor: {course.instructor}
                            </p>
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
                        <h4 className="text-sm font-medium text-[#343131]">
                          Perfect Attendance
                        </h4>
                        <p className="text-xs text-gray-500">
                          Completed 30 consecutive days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 rounded-lg border border-gray-100 bg-gradient-to-r from-[#343131]/5 to-[#D8A25E]/5">
                      <div className="w-10 h-10 rounded-full bg-[#D8A25E]/20 flex items-center justify-center mr-3">
                        <Award size={20} className="text-[#D8A25E]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#343131]">
                          Fast Learner
                        </h4>
                        <p className="text-xs text-gray-500">
                          Completed 5 courses in record time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs */}
          {activeTab === "courses" && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#343131] mb-6 flex items-center">
                <BookOpen size={24} className="text-[#D8A25E] mr-2" />
                My Courses
              </h2>
              <p className="text-gray-600">
                Your enrolled courses would appear here.
              </p>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#343131] mb-6 flex items-center">
                <Award size={24} className="text-[#D8A25E] mr-2" />
                Achievements
              </h2>
              <p className="text-gray-600">
                Your badges and certificates would appear here.
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#343131] mb-6 flex items-center">
                <Settings size={24} className="text-[#D8A25E] mr-2" />
                Profile Settings
              </h2>
              <p className="text-gray-600">
                Account settings form would appear here.
              </p>
            </div>
          )}
        </div>
      </React.Fragment>
    </AdminLayout>
  );
}

export default UserProfile;
