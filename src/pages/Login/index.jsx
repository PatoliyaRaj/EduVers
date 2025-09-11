import React, { useState } from "react";
import { Button } from "../../components/Button";
import ilus from "../../assets/imgs/ilustrater.png";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Chaked, setChaked] = useState(false);

  const handelsubmit = (e) => {
    e.preventDefault();
    if (!Email || !Password) {
      alert("Please fill in all fields.");
      return;
    }
    const notif = () => {
      toast("✔️Logged in Successfully", {
        duration: 4000,
        position: "bottom-right",

        className:
          "bg-green-500 text-white font-bold px-6 py-4 rounded shadow-md",
        style: {
          border: "2px solid #4ADE80",
        },
      });
    };
    console.log(Email);
    console.log(Password);
    console.log(Chaked);
    notif();
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    clearTimeout();
  };
  return (
    <React.Fragment>
      <section
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
                              flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 font-serif tracking-tight">
              Welcome Back
            </h1>
            <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-600 font-light">
              Sign in to your account
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10">
                <form className="space-y-6" onSubmit={handelsubmit}>
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
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
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
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                                     transition-all duration-200 font-sans text-gray-900
                                                     placeholder:text-gray-400"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center font-sans">
                      <input
                        type="checkbox"
                        checked={Chaked}
                        onChange={(e) => setChaked(e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 
                                                     underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
                                                 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 
                                                 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-sans"
                  >
                    Sign In
                  </Button>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 font-sans">
                      Don't have an account?{" "}
                      <Link
                        to="/Sign-Up"
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      >
                        Create account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full max-w-md lg:max-w-lg xl:max-w-2xl order-1 lg:order-2">
              <div className="relative">
                <img
                  src={ilus}
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

export default Login;
