import React from "react";
import Container from "../../../components/Container";
import { FaEnvelope } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="py-10 dark:bg-gray-500">
      <Container>
        <div className="text-center dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-400 bg-gradient-to-r from-amber-200 to-yellow-400 flex flex-col justify-center items-center p-5 h-[40vh]">
          <h2 className="text-2xl md:text-5xl font-semibold dark:text-white">
            Get Exclusive Offers On Your Email
          </h2>
          <p className="md:text-lg font-medium dark:text-white py-2 md:py-5">
            Subscribe to our newsletter and stay updated
          </p>
          <div className="flex">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pb-2 pointer-events-none">
                <FaEnvelope className=" text-gray-400" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border-none  text-gray-900 text-sm rounded-s-lg focus:ring-transparent  block w-full ps-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-none"
                placeholder="example@email.com"
              />
            </div>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-e-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
