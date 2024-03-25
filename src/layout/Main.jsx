import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import ScrollUpBtn from '../components/ScrollUpBtn/ScrollUpBtn';

const Main = () => {
    return (
        <div>
            <ScrollUpBtn/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;