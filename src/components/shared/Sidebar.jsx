import React, { useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import logo from "../../assets/biglogo.png";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  /* handle sidebar responsiveness */
  const handleSidebarToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {/* for small dispaly */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img className="w-28" src={logo} alt="" />
          </div>
        </div>

        <button
          onClick={handleSidebarToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200 transform transition-all duration-300 ease-in-out"
        >
          {isActive ? (
            <RiMenuUnfoldLine className="h-5 w-5" />
          ) : (
            <RiMenuFoldLine className="h-5 w-5" />
          )}
        </button>
      </div>
      {/* main sidebar */}
      <div
        className={` z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 dark:bg-gray-600 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition-all duration-300 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex flex-col py-2 gap-8 justify-center items-center mx-auto">
            <Link to="/">
              <img className="w-48" src={logo} alt="" />
            </Link>
            <h3 className="text-xl font-bold bg-slate-100 px-4 py-2 rounded-md text-red-500">
              Admin Dashboard
            </h3>
          </div>
          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-20 h-20 mx-2 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/009/397/835/non_2x/man-avatar-clipart-illustration-free-png.png"
              alt=""
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-white  hover:underline">
              User Name
            </h4>
          </div>
        </div>
        <div>
          <nav>
            <NavLink
              to="addproduct"
              className={({ isActive }) =>
                `sidebar ${
                  isActive ? "sidebar-active" : "text-gray-600 dark:text-white"
                }`
              }
            >
              <MdShoppingCart className="w-5 h-5" />
              <span className="mx-4 font-medium">Add Product</span>
            </NavLink>
            <NavLink
              to="listproduct"
              className={({ isActive }) =>
                `sidebar ${
                  isActive ? "sidebar-active" : "text-gray-600 dark:text-white"
                }`
              }
            >
              <HiMiniRectangleStack className="w-5 h-5" />
              <span className="mx-4 font-medium">Product List</span>
            </NavLink>
          </nav>
        </div>
        <div>
          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar ${
                isActive ? "sidebar-active" : "text-gray-600 dark:text-white"
              }`
            }
          >
            <HiHome className="w-5 h-5" />

            <span className="mx-4 font-medium">Home Page</span>
          </NavLink>
          <button className="w-full sidebar text-gray-600 dark:text-white">
            <HiOutlineLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
