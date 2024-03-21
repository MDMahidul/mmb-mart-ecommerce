import React from "react";
import Container from "../../../components/Container";
import offer from "../../../assets/images/offers.png";

const Offers = () => {
  return (
    <div className="dark:bg-gray-500 py-10">
      <Container>
        <div className="px-5 md:px-20 md:py-5 dark:bg-gradient-to-r dark:from-gray-500 dark:to-gray-400 bg-gradient-to-r from-amber-200 to-yellow-400">
          <div className="flex md:flex-row flex-col justify-center gap-5 md:gap-0 md:justify-between items-center h-[60vh] ">
            <div className="md:w-4/6">
              <h2 className="text-2xl md:text-6xl font-semibold dark:text-white">
                Unlock Exclusive Deals: Limited Time Only!
              </h2>
              <p className="md:text-lg font-semibold dark:text-white py-2 md:py-5">
                For Our Loyal Customers: Exclusive Offers Inside
              </p>
              <button
                type="button"
                className="primary-btn"
              >
                Check Now
              </button>
            </div>
            <div>
              <img className="md:w-full w-9/12 mx-auto" src={offer} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offers;
