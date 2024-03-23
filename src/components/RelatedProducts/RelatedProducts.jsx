import React from 'react';
import data_product from "../../assets/data/data";
import Product from '../Product/Product';
import SectionHeader from '../SectionHeader/SectionHeader';

const RelatedProducts = () => {
    return (
      <div className="md:mt-10">
        <SectionHeader heading={"Related Products"} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 pb-10 md:pb-12">
          {data_product.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
};

export default RelatedProducts;