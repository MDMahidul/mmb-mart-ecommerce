import React from 'react';
import Container from '../../../components/Container';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import popular_data from '../../../assets/data/data'
import Product from '../../../components/Product/Product';

const PopularProduct = () => {
    return (
      <div className="dark:bg-gray-600 pb-10">
        <Container>
          <SectionHeader heading={"Popular Products"} />
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {popular_data.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </div>
    );
};

export default PopularProduct;