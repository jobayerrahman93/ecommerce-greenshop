import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import searchImg from '../../img/search.png';

const NewArrival = () => {

    const [arrivalProduct, setArrivalProduct] = useState([]);


    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/')
            .then(res => res.json())
            .then(data => {
                const Singleproduct = data.filter(categorys => categorys.category == "newArrivals");



                setArrivalProduct(Singleproduct);
            });
    }, []);





    return (
        <>
            <div className="row mt-5">



                {
                    arrivalProduct == '' ? <div class="spinner-border text-success text-center mx-auto my-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        :
                        arrivalProduct.map((singleArrival) =>
                            <div className="col-lg-4 col-md-6">
                                <div className="product-box">
                                    <Link to={`/productDetails/${singleArrival.id}`}>


                                        <div className="product-media">
                                            <img src={singleArrival.productImg} className="" height="250" alt="" />

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
                                        <div>
                                            <h6 className='product-title'>{singleArrival.productName}</h6>
                                            <h6 className='product-price'>$ {singleArrival.productPrice}</h6>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        )
                }


            </div>
        </>
    );
};

export default NewArrival;