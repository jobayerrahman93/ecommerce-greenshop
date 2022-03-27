import React from 'react';
import p3 from '../../img/p3.png';
const Sales = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="product-box">
                        <div className="product-media">
                            <img src={p3} className="" height="250" alt="" />

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