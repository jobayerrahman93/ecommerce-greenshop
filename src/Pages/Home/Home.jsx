import React from 'react';
import Footer from "../../Layout/Footer";
import Blogs from '../../Sections/HomeSection/Blogs';
import HeroSection from '../../Sections/HomeSection/HeroSection';
import ProductSection from '../../Sections/HomeSection/ProductSection';

const Home = () => {
    return (
        <>

            <HeroSection></HeroSection>
            <ProductSection></ProductSection>
            <Blogs></Blogs>
            <Footer></Footer>

        </>
    );
};

export default Home;