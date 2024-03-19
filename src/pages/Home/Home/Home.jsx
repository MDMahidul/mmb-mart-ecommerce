import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../../../components/Product/Product';
import PopularProduct from '../PopularProduct/PopularProduct';
import Offers from '../Offers/Offers';
import NewCollection from '../NewCollection/NewCollection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularProduct/>
            <Offers/>
            <NewCollection/>
        </div>
    );
};

export default Home;