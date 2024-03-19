import React from "react";
import banner from "../../../assets/images/banner.png";
import snow from "../../../assets/images/snowman.png";
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-screen md:pt-24 pt-20  dark:bg-gray-500">
      {/* bg-gradient-to-r from-amber-200 to-yellow-500 */}
      <Container>
        <div className="mt-5 md:mt-0 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className=" flex-col gap-10 hidden md:flex">
            <a href="">
              <FaFacebookF className="w-5 h-5 text-gray-400 hover:text-gray-600 hover:scale-105 transition-all duration-200" />
            </a>
            <a href="">
              <FaInstagram className="w-5 h-5 text-gray-400 hover:text-gray-600 hover:scale-105 transition-all duration-200" />
            </a>
            <a href="">
              <FaTwitter className="w-5 h-5 text-gray-400 hover:text-gray-600 hover:scale-105 transition-all duration-200" />
            </a>
            <a href="">
              <FaTiktok className="w-5 h-5 text-gray-400 hover:text-gray-600 hover:scale-105 transition-all duration-200" />
            </a>
          </div>
          <div className="flex  justify-center items-center gap-2">
            <div>
              <p className="text-sm md:text-base text-gray-700 dark:text-white mb-2 md:font-semibold flex items-end md:gap-7">
                Dive into Winter Collection Now!{" "}
                <img className="w-10 md:w-20" src={snow} />
              </p>
              <p className="lg:text-7xl md:text-5xl text-3xl leading-none font-robotoSlab font-semibold md:max-w-sm pb-5  md:my-5 bg-gradient-to-br from-pink-500 to-orange-400 text-transparent bg-clip-text">
                Shop Now & Elevate Your Style!
              </p>
              <button className="outline-btn group">
                <span className="relative flex items-center gap-2 px-3 md:px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-500 rounded-md group-hover:bg-opacity-0">
                  Explore More <FaArrowRightLong className="w-4 h-4" />
                </span>
              </button>
            </div>
            <img
              className="w-6/12 transform md:scale-100 scale-x-[-1]"
              src={banner}
              alt=""
            />
          </div>
          <div className="flex gap-5 md:gap-2 md:flex-col  md:gap-y-8 dark:text-white">
            <div>
              <p className="text-sm">Kids items</p>
              <Link className="md:text-lg font-semibold ">Special Price</Link>
            </div>
            <hr className="hidden md:block" />
            <div>
              <p className="text-sm">Stylist Hoodies</p>
              <Link className="md:text-lg font-semibold ">New Arrival</Link>
            </div>
            <hr className="hidden md:block" />
            <div>
              <p className="text-sm">Winter Colection</p>
              <Link className="md:text-lg font-semibold ">Trending</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
