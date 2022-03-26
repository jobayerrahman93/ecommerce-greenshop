import React from 'react';
import Navbar from "../../Layout/Navbar";
import HeroSection from '../../Sections/HomeSection/HeroSection';
import ProductSection from '../../Sections/HomeSection/ProductSection';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <ProductSection></ProductSection>

        </>
    );
};

export default Home;