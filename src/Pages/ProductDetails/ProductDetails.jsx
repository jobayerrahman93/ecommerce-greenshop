import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgVariant1 from '../../img/product-details-img.png';

const ProductDetails = () => {

    const [pDetails, setPDetails] = useState([]);
    const [pImg, setPImg] = useState('');

    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/products.json')
            .then(res => res.json())
            .then(data => {
                const img = data.filter(productImg => productImg.id == id);
                console.log(img)
            });
    }, []);



    return (

        <>
            <div className="container">
                {/* bar cucumber */}

                <div className="bar-cucumber mt-5">
                    <p>Home/Product Details</p>
                </div>


                <div className="product-details-section">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="img-variant mb-2">
                                    <img className='img-fuid' src={imgVariant1} alt="" />
                                </div>
                                <div className="img-variant mb-2">
                                    <img className='img-fuid' src={imgVariant1} alt="" />
                                </div>
                                <div className="img-variant mb-2">
                                    <img className='img-fuid' src={imgVariant1} alt="" />
                                </div>
                                <div className="img-variant mb-2">
                                    <img className='img-fuid' src={imgVariant1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="detailsImg-box">
                                    <div className="productDetails-media">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>


            </div>

        </>
    );
};

export default ProductDetails;