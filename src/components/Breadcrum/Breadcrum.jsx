import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Breadcrum = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center font-semibold text-gray-600 dark:text-white my-10">
      <div className="flex">
        HOME <MdOutlineKeyboardArrowRight className="w-6 h-6" /> SHOP{" "}
        <MdOutlineKeyboardArrowRight className="w-6 h-6" />
        <p className="uppercase">{product.category}</p>
        <MdOutlineKeyboardArrowRight className="w-6 h-6" />
      </div>
      <p>{product.name}</p>
    </div>
  );
};

export default Breadcrum;
