import React from 'react';
import p1 from '../../img/p1.png';
import './AllPlants.css';

const AllPlants = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="product-box">
                        <div className="product-media">
                            <img src={p1} className="w-100" height="250" alt="" />

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