import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ShopContext } from "../../Context/ShopProvider";

const SignUp = () => {
  const [disabled, setDisabled] = useState(true);
  const { setUserRole } = useContext(ShopContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };
  const onSubmit = async (data) => {
    const signUpData = {
      username: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        signUpData
      );
      localStorage.setItem("auth-token", res.data.token);
      setUserRole(res.data.role);
      navigate("/");
      toast.success("Successfully signed up");
    } catch (err) {
      console.log(err.message);
      if (err.response) {
        toast.error(err.response.data.errors || err.message);
      } else if (err.request) {
        toast.error("Network error. Please check your internet connection.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 dark:bg-slate-600">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          className="space-y-4"
          action="#"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              className="add-input-field"
              placeholder="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">Name is required *</span>
            )}
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
              className="add-input-field"
              placeholder="name@company.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">Email is required *</span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type={inputType}
              name="password"
              id="password"
              placeholder="••••••••"
              className="add-input-field"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                Password is required *
              </span>
            )}
            <div
              className={`absolute right-3 transform translate-y-1 cursor-pointer top-1/2`}
              onClick={togglePassword}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
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
                ? "bg-gray-500 px-5 py-2.5 md:py-3 text-white text-sm md:text-base rounded-lg font-medium"
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
