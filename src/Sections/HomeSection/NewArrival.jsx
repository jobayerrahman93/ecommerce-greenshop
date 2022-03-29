import React from 'react';
import p2 from '../../img/p2.png';

const NewArrival = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="product-box">
                        <div className="product-media">
                            <img src={p2} className="" height="250" alt="" />

                        </div>
                        <div>
                            <h6 className='product-title'>Beach Spider Lily</h6>
                            <h6 className='product-price'>$160</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NewArrival;