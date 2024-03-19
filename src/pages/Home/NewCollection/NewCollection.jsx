import React from "react";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import new_collection from '../../../assets/data/new_collections';
import Product from "../../../components/Product/Product";
const NewCollection = () => {
  return (
    <div className="dark:bg-gray-600 pb-10">
      <Container>
        <SectionHeader heading={"New Collection"} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {new_collection.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewCollection;
