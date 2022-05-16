import React from 'react';
import Blogs from '../../Sections/HomeSection/Blogs';
import HeroSection from '../../Sections/HomeSection/HeroSection';
import ProductSection from '../../Sections/HomeSection/ProductSection';

const Home = ({ setCartNum }) => {
    // console.log(props);
    return (
        <>

            <HeroSection></HeroSection>
            <ProductSection setCartNum={setCartNum}></ProductSection>
            <Blogs></Blogs>


        </>
    );
};

export default Home;