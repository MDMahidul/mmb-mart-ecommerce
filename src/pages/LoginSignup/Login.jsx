import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { ShopContext } from "../../Context/ShopProvider";

const Login = () => {
  const { setUserRole } = useContext(ShopContext);
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        loginData
      );
      //console.log(res.data);

      if (res.data.success) {
        localStorage.setItem("auth-token", res.data.token);
        setUserRole(res.data.role);
        toast.success("Successfully logged in");
        navigate("/");
      }else{
        toast.error(res.data.errors);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  /* to toggle password input type */
  const togglePassword = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
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
              className="add-input-field"
              placeholder="name@company.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">Email is required *</span>
            )}
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
