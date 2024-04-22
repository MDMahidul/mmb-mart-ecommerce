import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Container from "../../../components/Container";
import categories from "../../../assets/data/categories";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { Link } from "react-router-dom";

export default function Categories() {
  const [swiperRef, setSwiperRef] = useState(null);
 
  return (
    <div className="dark:bg-gray-600">
      <Container>
        <SectionHeader heading={"Categories"} />
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1248: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiper2 lg:pb-10 -mt-5 lg:mt-0"
          style={{ width: "100%", height: "170px" }} // Inline styles for Swiper
        >
          {categories.map((category) => (
            <SwiperSlide
              className="swiper-slide2 font-semibold dark:text-white text-center"
              key={category.sub_category}
            >
              <Link to={`/category/${category.sub_category}`}>
                <div
                  className="-mt-14 flex justify-center items-center flex-col gap-4 mx-auto"
                  style={{ width: "77%", height: "80%" }} // Inline styles for div
                >
                  <img
                    className="img !border-none"
                    src={category.image}
                    alt=""
                    style={{
                      width: "72%",
                      height: "31%",
                    }} // Inline styles for img
                  />
                  <p>{category.sub_category}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
