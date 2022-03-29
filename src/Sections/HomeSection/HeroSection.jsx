import React from 'react';
import heroImg from '../../img/hero-img.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <>
            <div className="container bg-light">
                <div className="row">
                    <div className="col-lg-6">
                        <p className='hero-welcome'>Welcome to GreenShop</p>
                        <h1 className='hero-title '>Let’s Make a
                            Better <span>Planet</span></h1>
                        <p className='hero-subtitle'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>

                        <button type='button' className=' cmn-btn mt-2 mt-md-5 mt-lg-5'>Shop Now</button>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src={heroImg} height="518" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;