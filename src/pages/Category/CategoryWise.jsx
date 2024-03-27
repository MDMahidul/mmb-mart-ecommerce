import React, { useContext } from "react";
import Container from "../../components/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopProvider";
import Product from "../../components/Product/Product";
import LoadPageTop from "../../components/LoadPageTop/LoadPageTop";
import banner from "../../assets/images/banner2_3.png";

const CategoryWise = () => {
  const { sub_category } = useParams();
  const { all_products } = useContext(ShopContext);
  const collections = all_products.filter(
    (product) => product.sub_category === sub_category
  );
  return (
    <div className="pt-[75px] md:pt-[81px] dark:bg-gray-500">
      <LoadPageTop />
      <div className="flex justify-center items-center p-2 lg:p-4 ">
        <img loading="lazy" className="rounded-xl" src={banner} alt="" />
      </div>

      <Container>
        <SectionHeader heading={sub_category} />
        {collections.length <= 0 ? (
          <p className="text-center text-2xl font-medium text-slate-400">
            No item found
          </p>
        ) : (
          <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 pb-10 md:pb-12">
            {collections.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CategoryWise;
