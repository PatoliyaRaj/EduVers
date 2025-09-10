
import React, { useState } from "react";
import { Button } from "../../components/Button";
import ilus2 from "../../assets/imgs/ilustrator2.png";
import { Link } from "react-router-dom";

function SignUp() {
  const [Data, setData] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false, // ✅ added checkbox state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Data);
  };

  return (
    <React.Fragment>
      <section
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
        flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 font-serif tracking-tight">
              Create an Account
            </h1>
            <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-600 font-light">
              Register your account
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20">
            {/* Form Section */}
            <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg order-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8">
                <form
                  className="space-y-3 sm:space-y-4"
                  onSubmit={handleSubmit}
                >
                  {/* User Role */}
                  <div>
                    <label
                      htmlFor="userType"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      What Is Your Role?
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      value={Data.userType}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      transition-all duration-200 font-sans text-gray-900"
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                    </select>
                  </div>

                  {/* First & Last Name */}
                  <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={Data.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                        transition-all duration-200 font-sans text-gray-900
                        placeholder:text-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={Data.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                        transition-all duration-200 font-sans text-gray-900
                        placeholder:text-gray-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Age & Gender */}
                  <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={Data.age}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                        transition-all duration-200 font-sans text-gray-900
                        placeholder:text-gray-400"
                        placeholder="Enter your age"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={Data.gender}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                        transition-all duration-200 font-sans text-gray-900
                        placeholder:text-gray-400"
                      >
                        <option value="" disabled>
                          Select your gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phoneNo"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNo"
                      name="phoneNo"
                      value={Data.phoneNo}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      transition-all duration-200 font-sans text-gray-900
                      placeholder:text-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={Data.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      transition-all duration-200 font-sans text-gray-900
                      placeholder:text-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={Data.password}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      transition-all duration-200 font-sans text-gray-900
                      placeholder:text-gray-400"
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={Data.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                      transition-all duration-200 font-sans text-gray-900
                      placeholder:text-gray-400"
                      placeholder="Re-enter your password"
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start text-sm">
                    <label className="flex items-start font-sans">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={Data.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                      />
                      <span className="ml-2 text-gray-600 leading-relaxed">
                        I agree to the
                        <button
                          type="button"
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 underline"
                        >
                          Terms of Service
                        </button>{" "}
                        and{" "}
                        <button
                          type="button"
                          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 underline"
                        >
                          Privacy Policy
                        </button>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                    text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 
                    transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-sans"
                  >
                    Sign Up
                  </Button>

                  {/* Login Redirect */}
                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 font-sans">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Illustration Section */}
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-2xl order-1">
              <div className="relative">
                <img
                  src={ilus2}
                  alt="Login illustration"
                  className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto 
                  drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SignUp;
