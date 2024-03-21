import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 dark:bg-slate-600">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-center text-xl font-medium text-gray-900 dark:text-white">
            Sign Up
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm  text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="text-sm w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-50 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
              placeholder="name"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-sm w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-50 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="text-sm w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-50 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
              required=""
            />
          </div>
          <div className="">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                defaultValue={disabled}
                onChange={() => setDisabled(!disabled)}
                className="w-4 h-4 text-amber-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the terms and conditions .
              </label>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full ${
              disabled
                ? "bg-gray-500 px-5 py-2.5 text-white text-sm rounded-lg font-medium"
                : "primary-btn"
            }`}
            disabled={disabled}
          >
            Continue
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have account?{" "}
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
