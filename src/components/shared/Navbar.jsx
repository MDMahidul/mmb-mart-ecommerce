import { useEffect, useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import Logo from "../../assets/biglogo.png";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  /* handle theme toggle */
  const handleThemeToggle = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
    /* setIsRotated(!isRotated); */
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-500 shadow-md">
      <Container>
        <div className=" flex flex-wrap items-center justify-between mx-auto py-4">
          <Link href="/">
            <img src={Logo} className="w-32 md:w-56" alt="Flowbite Logo" />
          </Link>
          <div className="flex md:gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="relative">
              <BsCart3 className="w-6 h-6 dark:text-white" />
              <span className="absolute top-1 -right-1 bg-primary rounded-full text-xs px-1 text-white">
                0
              </span>
            </button>
            <button onClick={handleThemeToggle}>
              {theme == "light" ? (
                <FiMoon className={`w-6 h-6 dark:text-white animate-rotate`} />
              ) : (
                <FiSun className={`w-6 h-6 dark:text-white animate-rotate`} />
              )}
            </button>
            <button className="outline-btn group">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-500 rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </button>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MdMenu className="w-8 h-8 dark:text-white" />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-500 dark:border-gray-700">
              <li>
                <ActiveLink href="#" aria-current="page">
                  Shop
                </ActiveLink>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Kids
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
