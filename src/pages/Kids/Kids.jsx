import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopProvider";
import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container";
import Panjabi from "../../assets/carousel/kids/panjabi.webp";
import frock from "../../assets/carousel/kids/frock.jpg";
import tshirt from "../../assets/carousel/kids/tshirt.webp";
import shirt from "../../assets/carousel/kids/shirt.jpg";
import tops from "../../assets/carousel/kids/tops.webp";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import Product from "../../components/Product/Product";
import LoadPageTop from "../../components/LoadPageTop/LoadPageTop";

const Kids = () => {
  const images = [
    { id: 1, src: Panjabi },
    { id: 2, src: tops },
    { id: 3, src: shirt },
    { id: 4, src: tshirt },
    { id: 5, src: frock },
  ];
  const words = ["Panjabi", "Tops", "Shirt", "T-Shirt", "Frock"];
  const { all_products } = useContext(ShopContext);
  const men_collection = all_products.filter(
    (product) => product.category === "kid"
  );
  console.log(men_collection);

  return (
    <div className="pt-12 md:pt-24 dark:bg-gray-500">
      <LoadPageTop />
      <Container>
        <div className=" flex flex-col gap-y-5 md:flex-row justify-center items-center py-10">
          <div className="md:w-1/2  dark:text-white text-center ">
            <p className="md:text-lg py-2 dark:text-white text-red-500 font-semibold">
              Check Out New Collection{" "}
            </p>
            <h2 className="md:text-6xl text-2xl font-semibold ">
              Elevate Your Style with our Premier Kids's Collection
            </h2>
            <p className="mt-5 text-lg md:text-2xl mb-2 md:mb-0 md:py-4 dark:text-white text-amber-500 font-semibold">
              Exclusive Collections
            </p>

            {/* typing animation */}
            <TypingEffect words={words} />
          </div>

          <div className="w-10/12 md:w-1/2">
            <Carousel images={images} />
          </div>
        </div>
        <div>
          <SectionHeader heading={"Kids"} />
          <div className="flex justify-between mb-5">
            <p className="text-sm md:text-base md:font-semibold">
              Showing 1-12 out of 36 products
            </p>
            <div className="flex items-center gap-4">
              <form className="max-w-sm">
                <label htmlFor="underline_select" className="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  className="block  px-0 w-sm text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected="">Sort By</option>
                  <option value="shirt">Shirt</option>
                  <option value="tshirt">T-Shirt</option>
                  <option value="tops">Tops</option>
                  <option value="panjabi">Panjabi</option>
                  <option value="frock">Frock</option>
                  <option value="jacket">Jacket</option>
                  <option value="hoodie">Hoodie</option>
                </select>
              </form>
            </div>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 pb-10 md:pb-12">
            {men_collection.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="text-center pb-5 md:pb-10">
          <button type="btn" className="primary-btn">
            Explore More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Kids;
