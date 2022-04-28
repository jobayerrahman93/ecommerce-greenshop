import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import searchImg from '../../img/search.png';
const Sales = () => {

    const [salesProduct, setSalesProduct] = useState([]);


    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/')
            .then(res => res.json())
            .then(data => {
                const Singleproduct = data.filter(sales => sales.category == "sales");



                setSalesProduct(Singleproduct);
            });
    }, []);

    console.log(salesProduct);

    return (
        <>
            <div className="row mt-5">

                {
                    salesProduct.map(singleSales =>
                        <div className="col-lg-4">

                            <div className="product-box">
                                <Link to={`/productDetails/${singleSales.id}`}>
                                    <div className="product-media">
                                        <img src={singleSales.productImg} className="" height="250" alt="" />

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
                                        <h6 className='product-title'>
                                            {singleSales.productName}
                                        </h6>
                                        <h6 className='product-price'>$  {singleSales.productPrice}</h6>
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

export default Sales;