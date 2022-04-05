import React from 'react';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import p3 from '../../img/p3.png';
import searchImg from '../../img/search.png';
const Sales = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="product-box">
                        <div className="product-media">
                            <img src={p3} className="" height="250" alt="" />

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
                            <h6 className='product-title'>Beach Spider Lily</h6>
                            <h6 className='product-price'>$140</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Sales;