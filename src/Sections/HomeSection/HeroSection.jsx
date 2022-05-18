import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import heroImg from '../../img/hero-img.png';
import './HeroSection.css';

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="hero-section">
                <div className="container bg-light ">

                    <Slider {...settings}>
                        <div className='single-hero-slide'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-8">
                                    <p className='hero-welcome'>Welcome to GreenShop</p>
                                    <h1 className='hero-title '>Let’s Make a
                                        Better <span>Planet</span></h1>
                                    <p className='hero-subtitle'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>

                                    <button type='button' className=' cmn-btn mt-2 mt-md-5 mt-lg-5 mb-5'>Shop Now</button>
                                </div>
                                <div className="col-lg-6 col-4">
                                    <img className='img-fluid' src={heroImg} height="518" alt="" />
                                </div>
                            </div>
                        </div>


                        <div className='single-hero-slide'>
                            <div className="row  align-items-center">
                                <div className="col-lg-6  col-8">
                                    <p className='hero-welcome'>Welcome to GreenShop</p>
                                    <h1 className='hero-title '>Let’s Make a
                                        Better <span>work</span></h1>
                                    <p className='hero-subtitle'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>

                                    <button type='button' className=' cmn-btn mt-2 mt-md-5 mt-lg-5 mb-5'>Shop Now</button>
                                </div>
                                <div className="col-lg-6 col-4">
                                    <img className='img-fluid' src={heroImg} height="518" alt="" />
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>

        </>
    );
};

export default HeroSection;