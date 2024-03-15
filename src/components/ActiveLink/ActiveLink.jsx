import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? " block bg-primary text-white py-2 px-3 rounded md:px-1 md:py-0 md:rounded-none md:pb-1  md:text-gray-700 md:dark:text-white  md:border-b-2 md:bg-transparent border-primary"
            : "nav-item"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
