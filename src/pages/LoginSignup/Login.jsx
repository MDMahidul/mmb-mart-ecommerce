import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  /* to toggle password input type */
  const togglePassword = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 dark:bg-slate-600">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-center text-xl font-medium text-gray-900 dark:text-white">
            Sign In
          </h5>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm  text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-50 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div className="relative">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
            </div>
            <input
              type={inputType}
              name="password"
              id="password"
              placeholder="*******"
              className="w-full px-3 py-2 border rounded-md border-amber-500 focus:outline-none bg-gray-50 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
            />
            <div
              className={`absolute right-3 transform translate-y-1 cursor-pointer top-1/2`}
              onClick={togglePassword}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <div className="">
            <Link
              to="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forget Password?
            </Link>
          </div>
          <button type="submit" className="w-full primary-btn">
            Continue
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
