import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopProvider";
import { Link, useParams } from "react-router-dom";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import { Rating } from "@smastrom/react-rating";
import Container from "../../components/Container";
import Description from "../../components/Description/Description";
import Reviews from "../../components/Reviews/Reviews";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import LoadPageTop from "../../components/LoadPageTop/LoadPageTop";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const ProductDetails = () => {
  const {addToCart } = useContext(ShopContext);
  const { itemName } = useParams();

  /* fetch poduct details from api */
  const { data: product=[], isLoading, isError } = useQuery({
    queryKey:['productDetails'],
    queryFn:async()=>{
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/product/details/${itemName}`
        );
        return res.data;
      } catch (error) {
        throw new Error("Failed to fetch category products");
      }
    }
  });

console.log(product);
  const {
    id,
    name,
    image,
    rating,
    old_price,
    new_price,
    category,
    sub_category,
  } = product;
  const [activeComponent, setActiveComponent] = useState("Description");

  // Function to handle component toggle
  const handleComponentToggle = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className="py-12 md:py-20 dark:bg-gray-500">
      <LoadPageTop />
      <Container>
        <Breadcrum product={product} />
        {isLoading && <Loader height={'h-screen'}/>}
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <div className="md:w-1/2   flex  lg:flex-col-reverse xl:flex-row gap-3">
            <div className="flex flex-col lg:flex-row xl:flex-col gap-[10px] md:gap-[15px]">
              <img
                className="w-[102px] md:w-[90px] lg:w-[90px] xl:w-40"
                src={image}
                alt=""
              />
              <img
                className="w-[102px] md:w-[90px] lg:w-[90px] xl:w-40"
                src={image}
                alt=""
              />
              <img
                className="w-[102px] md:w-[90px] lg:w-[90px] xl:w-40"
                src={image}
                alt=""
              />
              <img
                className="w-[102px] md:w-[90px] lg:w-[90px] xl:w-40"
                src={image}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[450px] md:w-[500px] lg:w-[500px] xl:w-[700px]"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="md:w-1/2  flex flex-col md:mx-8 lg:mx-14 xl:mx-15">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:4xl font-semibold md:font-bold text-gray-700 dark:text-white">
              {name}
            </h1>
            <div className="flex items-center my-3 ">
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating || 0)}
                readOnly
              />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {rating}
              </span>
            </div>
            <div className="flex gap-8 text-lg md:text-2xl my-2 lg:my-4 xl:my-8 font-semibold md:font-bold">
              <p className="line-through text-gray-400">${old_price}</p>
              <p className="text-red-500 dark:text-white">${new_price}</p>
            </div>
            <div>
              <p className="dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                dolores repellat, veniam optio ea illo similique consequuntur
                tempore porro mollitia.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold mt-4 lg:mt-8 text-gray-600 dark:text-white">
                Select Size
              </p>
              <div className="flex gap-5 my-4 lg:my-6">
                <div className="product_size">S</div>
                <div className="product_size">M</div>
                <div className="product_size">L</div>
                <div className="product_size">XL</div>
                <div className="product_size">XXL</div>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  addToCart(id);
                }}
                className="primary-btn w-full"
              >
                ADD TO CART
              </button>
            </div>
            <div className="dark:text-white mt-5 capitalize">
              <span className="font-semibold">Category:</span> {category},{" "}
              {sub_category}
            </div>
            <div className="dark:text-white  capitalize">
              <span className="font-semibold">Tags:</span> Modern, Latest
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-28">
          <button
            onClick={() => handleComponentToggle("Description")}
            className={`border px-9 md:px-10 py-3 font-semibold ${
              activeComponent === "Description" ? "bg-gray-200" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => handleComponentToggle("Reviews")}
            className={`border px-9 md:px-10 py-3 font-semibold ${
              activeComponent === "Reviews" ? "bg-gray-200" : ""
            }`}
          >
            Reviews
          </button>
        </div>
        {activeComponent === "Description" ? <Description /> : <Reviews />}
        <div>
          <RelatedProducts />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
