import React from "react";
import { Button } from "../../components/Button";
import ilus2 from "../../assets/imgs/ilustrator2.png";
import { Link } from "react-router-dom";

function index() {
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
            <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg order-2 sm:order-2 md:order-2 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8">
                <form className="space-y-3 sm:space-y-4">
                  {/* Who are you field */}
                  <div>
                    <label
                      htmlFor="userType"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Who are you?
                    </label>
                    <select
                      id="userType"
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

                  <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="Fname"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="Lname"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="Lname"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 justify-between items-center">
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="Age"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                        placeholder="Enter your age"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label
                        htmlFor="Gender"
                        className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select your gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

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
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>

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
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>

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
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Conform-password"
                      className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="Conform-password"
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
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                      />
                      <span className="ml-2 text-gray-600 leading-relaxed">
                        I agree to the{" "}
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

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                                                 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 
                                                 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-sans"
                  >
                    Sign Up
                  </Button>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 font-sans">
                      Already You Have Account ?{" "}
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

export default index;
