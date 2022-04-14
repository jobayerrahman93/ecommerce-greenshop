import React from 'react';
import cartImg from '../img/cart.png';
import favoriteImg from '../img/favorite.png';
import p1 from '../img/p1.png';
import searchImg from '../img/search.png';
import './RelatedProducts.css';
const RelatedProducts = () => {

    return (
        <>

            <section className="related-product-section my-5">
                <p className='section-title'>Related Products</p>

                <hr />

                <div className="row">
                    <div className="col-lg-3">

                        <div className="related-product">
                            <div className="product-media">
                                <img src={p1} alt="" />


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

                            <h6 className="title mt-3">Beach Spider Lily</h6>
                            <h6 className='price mt-2'> $ <span>199</span></h6>
                        </div>

                    </div>
                    <div className="col-lg-3">

                        <div className="related-product">
                            <div className="product-media">
                                <img src={p1} alt="" />


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

                            <h6 className="title mt-3">Beach Spider Lily</h6>
                            <h6 className='price mt-2'> $ <span>199</span></h6>
                        </div>

                    </div>
                    <div className="col-lg-3">

                        <div className="related-product">
                            <div className="product-media">
                                <img src={p1} alt="" />


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

                            <h6 className="title mt-3">Beach Spider Lily</h6>
                            <h6 className='price mt-2'> $ <span>199</span></h6>
                        </div>

                    </div>
                    <div className="col-lg-3">

                        <div className="related-product">
                            <div className="product-media">
                                <img src={p1} alt="" />


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

                            <h6 className="title mt-3">Beach Spider Lily</h6>
                            <h6 className='price mt-2'> $ <span>199</span></h6>
                        </div>

                    </div>

                </div>
            </section>

        </>
    );
};

export default RelatedProducts;