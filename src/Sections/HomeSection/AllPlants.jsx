import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import searchImg from '../../img/search.png';
import './AllPlants.css';

const AllPlants = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);



    return (
        <>
            <div className="row mt-5">

                {
                    products == '' ? <div class="spinner-border text-success text-center mx-auto my-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        :
                        products.map(singleProduct =>
                            <div className="col-lg-4 col-md-6 mb-5">
                                <div className="product-box">
                                    <Link to={`/productDetails/${singleProduct.id}`} >

                                        <div className="product-media">
                                            <img src={singleProduct.productImg} className="w-100" height="250" alt="" />


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



                                        <div className='mt-3'>
                                            <h6 className='product-title'>{singleProduct.productName}</h6>
                                            <h6 className='product-price'>$ <span>
                                                {singleProduct.productPrice}</span></h6>
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

export default AllPlants;