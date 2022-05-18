import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Blogs from '../../Sections/HomeSection/Blogs';
import HeroSection from '../../Sections/HomeSection/HeroSection';
import ProductSection from '../../Sections/HomeSection/ProductSection';

const Home = ({ setCartNum }) => {
    // console.log(props);

    const location = useLocation();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        })
    }, [location]);
    return (
        <>

            <HeroSection></HeroSection>
            <ProductSection setCartNum={setCartNum}></ProductSection>
            <Blogs></Blogs>


        </>
    );
};

export default Home;