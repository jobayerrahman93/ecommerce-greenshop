import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgVariant1 from '../../img/product-details-img.png';
import './ProductDetails.css';

const ProductDetails = () => {

    const [pDetails, setPDetails] = useState({});


    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/products.json')
            .then(res => res.json())
            .then(data => {
                const Singleproduct = data.filter(productImg => productImg.id == id);

                Singleproduct.map(pd => setPDetails(pd))
            });
    }, []);

    console.log(pDetails);


    const { productName, productDes, productPrice, productImg } = pDetails;
    console.log(productName);

    return (

        <>
            <div className="container">
                {/* bar cucumber */}

                <div className="breadcrumbs my-5">
                    <p>Home/Product Details</p>
                </div>


                <div className="product-details-section">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-5 variant-img-col">
                                    <div className="img-variant mb-4">
                                        <img className='img-fuid' src={imgVariant1} alt="" />
                                    </div>
                                    <div className="img-variant mb-4">
                                        <img className='img-fuid' src="/product-details2.png" alt="" />
                                    </div>
                                    <div className="img-variant mb-4">
                                        <img className='img-fuid' src={imgVariant1} alt="" />
                                    </div>
                                    <div className="img-variant mb-4">
                                        <img className='img-fuid' src={imgVariant1} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">

                                    <div className="productDetails-media">



                                        <img src={productImg} height="" width="" alt="" />


                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">

                            <div className="product-details-wrapper">
                                <div className="product-fullDetails">
                                    <h1 className='pdtls-title'>{productName}</h1>

                                    <div className='d-flex justify-content-between align-items-center my-4'>
                                        <div >
                                            <h6> $ {productPrice}</h6>
                                        </div>
                                        <div className='d-flex total-customer-review align-items-center'>
                                            <div className='me-2'>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <div >
                                                <p><span>19</span> customers review</p>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                </div>

                                <div className="product-cart-area">
                                    <div className="short-description">
                                        <h6>Short Description:</h6>
                                        <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                                    </div>

                                    <h6>Size:</h6>

                                    <div className="product-size mt-3">
                                        <ul>
                                            <li className='active'>S</li>
                                            <li>M</li>
                                            <li>L</li>
                                            <li>X</li>
                                        </ul>
                                    </div>

                                    <div className='mt-4 row'>

                                        <div className="col-lg-3 col-12">
                                            <div className='d-flex'>
                                                <button className='minusBtn'>-</button>
                                                <input defaultValue="0" min='0' className='cartValue' type="text" />
                                                <button className='plusBtn'>+</button>
                                            </div>
                                        </div>

                                        <div className="col-lg-9 col-12">
                                            <div className='d-flex mt-4 mt-md-4 mt-lg-0'>
                                                <button className="buyNowBtn">Buy Now</button>
                                                <button className="addToCartBtn ms-3">add to cart</button>

                                                <button type='button' className='favoriteBtn ms-3'>
                                                    <i class="fa-solid fa-heart"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='product-categoriesDetails mt-3'>
                                        <p>
                                            <span>SKU:</span> 1995751877966
                                        </p>

                                        <p><span>Categories:</span> Potter Plants</p>

                                        <p><span>Tags:</span> Home, Garden, Plants</p>

                                        <div className='share-section'>
                                            <p>Share this products:

                                                <div class="product-social-icon d-inline">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>

                                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                                </div>


                                            </p>
                                        </div>

                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="row mt-5">
                        {/* details nav tabs area */}


                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Product Description</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Reviews (<span>0</span>)</a>
                            </li>

                        </ul>
                        <div className='my-5 px-0 product-details-tab'>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                                    <p>
                                        {

                                            productDes
                                        }

                                    </p>



                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Review not found</div>
                            </div>

                        </div>

                    </div>




                </div>


            </div>

        </>
    );
};

export default ProductDetails;