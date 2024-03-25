import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../../../components/Product/Product';
import PopularProduct from '../PopularProduct/PopularProduct';
import Offers from '../Offers/Offers';
import NewCollection from '../NewCollection/NewCollection';
import NewsLetter from '../NewsLetter/NewsLetter';
import LoadPageTop from '../../../components/LoadPageTop/LoadPageTop';

const Home = () => {
    return (
        <div>
            <LoadPageTop/>
            <Banner/>
            <PopularProduct/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    );
};

export default Home;