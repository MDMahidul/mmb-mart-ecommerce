import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopProvider";
import { Link, useParams } from "react-router-dom";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import { Rating } from "@smastrom/react-rating";
import Container from "../../components/Container";
import Description from "../../components/Description/Description";
import Reviews from "../../components/Reviews/Reviews";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const ProductDetails = () => {
  const { all_products } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_products.find((item) => item.id === parseInt(id));
  const { name, image, rating, old_price, new_price, category, sub_category } =
    product;
  const [activeComponent, setActiveComponent] = useState("Description");

  // Function to handle component toggle
  const handleComponentToggle = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className="py-12 md:py-20 dark:bg-gray-500">
      <Container>
        <Breadcrum product={product} />
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
          <div className="flex gap-4">
            <div className="flex flex-col gap-[15px]">
              <img className="w-40" src={image} alt="" />
              <img className="w-40" src={image} alt="" />
              <img className="w-40" src={image} alt="" />
              <img className="w-40" src={image} alt="" />
            </div>
            <div>
              <img className="w-[715px]" src={image} alt="" />
            </div>
          </div>
          <div className="flex flex-col md:mx-16">
            <h1 className="text-4xl font-bold text-gray-700 dark:text-white">
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
            <div className="flex gap-8 text-2xl my-8 font-bold">
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
              <p className="text-xl font-semibold mt-8 text-gray-600 dark:text-white">
                Select Size
              </p>
              <div className="flex gap-5 my-6">
                <div className="product_size">S</div>
                <div className="product_size">M</div>
                <div className="product_size">L</div>
                <div className="product_size">XL</div>
                <div className="product_size">XXL</div>
              </div>
            </div>
            <div>
              <button className="primary-btn w-full">ADD TO CART</button>
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
            className={`border px-10 py-3 font-semibold ${
              activeComponent === "Description" ? "bg-gray-200" : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => handleComponentToggle("Reviews")}
            className={`border px-10 py-3 font-semibold ${activeComponent === "Reviews" ? "bg-gray-200" : ""}`}
          >
            Reviews
          </button>
        </div>
        {activeComponent === "Description" ? <Description /> : <Reviews />}
        <div>
            <RelatedProducts/>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
