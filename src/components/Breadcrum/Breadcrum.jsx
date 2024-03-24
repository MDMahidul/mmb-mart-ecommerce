import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Breadcrum = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center text-xs md:text-base font-semibold text-gray-600 dark:text-white mt-10 mb-4 md:my-10">
      <div className="flex">
        HOME <MdOutlineKeyboardArrowRight className="w-5 h-4 md:w-6 md:h-6" /> SHOP{" "}
        <MdOutlineKeyboardArrowRight className="w-5 h-4 md:w-6 md:h-6" />
        <p className="uppercase">{product.category}</p>
        <MdOutlineKeyboardArrowRight className="w-5 h-4 md:w-6 md:h-6" />
      </div>
      <p>{product.name}</p>
    </div>
  );
};

export default Breadcrum;
