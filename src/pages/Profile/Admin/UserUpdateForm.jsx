import React, { useState, useEffect } from "react";
import { X, Save, UserIcon, Phone, Mail, Calendar, Info } from "lucide-react";
import { useGetUserDetailsQuery, useUpdateUserMutation } from "../../../redux/Apis/authApi";
import { SuccessToster, ErrorToster } from "../../../components/toster";
import { getAuth } from "../../../utils/users";
function UserUpdateForm({ userId, onClose }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phoneNo: "",
    about: "",
    email: "",
    id: userId || "",
  });
  const user = getAuth().user;
  const email = user?.email;

  // RTK Query hooks
  const { data: userDataFromAPI, isLoading } = useGetUserDetailsQuery(email, {
    skip: !email,
  });

  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  useEffect(() => {
    if (userDataFromAPI) {
      console.log("Setting user data from API:", userDataFromAPI);

      const user = userDataFromAPI.user || userDataFromAPI;

      setUserData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        age: user.age || "",
        gender: user.gender || "",
        phoneNo: user.phoneNo || "",
        about:
          user.about ||
          "Passionate educator with 5+ years of experience in fostering student growth and engagement.",
        email: user.email || "",
        id: user.id || userId || "",
      });
    }
  }, [userDataFromAPI, userId]);

  const handleInputChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      if (!userData.id && !userId) {
        ErrorToster("Cannot update user: Missing ID", 2500);
        return;
      }
      try {
        await updateUser({ email: userData.email, ...userData }).unwrap();
        SuccessToster("Profile updated successfully", 2500);
      setTimeout(() => {
          if (onClose) onClose();
        window.location.reload();
      }, 2000);
      } catch (error) {
        ErrorToster(error?.data?.message || "Failed to update profile", 2500);
      }
    },
    [userData, userId, updateUser, onClose]
  );

  if (!userId) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700">
            Cannot update user: No user ID provided
          </p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D8A25E] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading user data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[100vh] overflow-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#343131] to-[#D8A25E] p-5 text-white rounded-t-xl flex justify-between items-center">
          <h2 className="text-xl font-semibold">Update User Profile</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-[#343131] font-medium mb-2">
                First Name
              </label>
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Last Name
              </label>
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email - Read Only */}
            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  readOnly
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500"
                  placeholder="Email Address"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="tel"
                  name="phoneNo"
                  value={userData.phoneNo}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Age
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                  placeholder="Age"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-[#343131] font-medium mb-2">
                Gender
              </label>
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300 appearance-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* About - Full Width */}
          <div className="mb-6">
            <label className="block text-[#343131] font-medium mb-2">
              About
            </label>
            <div className="relative">
              <Info className="absolute left-3 top-3 text-gray-400" size={18} />
              <textarea
                name="about"
                value={userData.about}
                onChange={handleInputChange}
                rows={4}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D8A25E] focus:border-transparent transition-all duration-300"
                placeholder="Tell us about yourself..."
              ></textarea>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUpdating}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#343131] to-[#D8A25E] text-white hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              {isUpdating ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Save size={18} />
                  <span>Update Profile</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserUpdateForm;
