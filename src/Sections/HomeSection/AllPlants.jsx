import React from 'react';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import p1 from '../../img/p1.png';
import searchImg from '../../img/search.png';
import './AllPlants.css';


const AllPlants = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="product-box">
                        <div className="product-media">
                            <img src={p1} className="w-100" height="250" alt="" />


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
                            <h6 className='product-price'>$120</h6>
                        </div>




                    </div>
                </div>

            </div>
        </>
    );
};

export default AllPlants;