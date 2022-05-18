import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import cartImg from '../img/cart.png';
import favoriteImg from '../img/favorite.png';
import searchImg from '../img/search.png';
import './RelatedProducts.css';
const RelatedProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <>

            <section className="related-product-section my-5">
                <p className='section-title'>Related Products</p>

                <hr />


                <Slider {...settings}>
                    {
                        products.map(singleP => <div className="single-slide">

                            <div className="related-product">
                                <div className="product-media">
                                    <img className='productImg' src={singleP.productImg} alt="" />


                                    {/* cart hover section */}

                                    <div className="cart-hover-menu">
                                        <div className="d-flex cart-hover-content">
                                            <div>
                                                <img src={searchImg} alt="" />
                                            </div>
                                            <div>
                                                <img src={favoriteImg} alt="" />
                                            </div>
                                            <div>
                                                <img src={cartImg} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <h6 className="title mt-3">{singleP.productName}</h6>
                                <h6 className='price mt-2'> $ <span>{singleP.productPrice}</span></h6>
                            </div>

                        </div>)
                    }



                </Slider>


            </section>

        </>
    );
};

export default RelatedProducts;