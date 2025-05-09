import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-2/3 px-6 ...">
      <div className="bg-black before:animate-pulse before:bg-gradient-to-b before:from-gray-900 overflow-hidden before:via-[#00FF00] before:to-gray-900 before:absolute">
        <div id="myDIV">
          <div className="w-full h-full px-3 sm:px-5 flex items-center justify-center absolute">
            <div className="w-full sm:w-1/2 lg:w-2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4 rounded-lg">
              <div className="w-full flex justify-center text-[#00FF00] text-xl mb-2 md:mb-5">
                Sign Up
              </div>

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xs font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xs font-medium text-white"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@neurolink.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-xs font-medium text-white"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-xs font-medium text-white"
                >
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div className="flex flex-row justify-between">
                <div className="text-white text-sm md:text-md">
                  Already have an account?
                </div>
                <div className="text-[#00FF00] text-sm md:text-md">
                  <Link
                    to="/login"
                    className="text-[#00FF00] text-sm md:text-md hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </div>

              <div className="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-[#00FF00] py-2 rounded-md">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
