import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../firebase/hook/useAuth';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import searchImg from '../../img/search.png';
const Sales = ({ setCartNum }) => {


    const { users } = useAuth();

    console.log(users);

    const navigate = useNavigate();




    const [salesProduct, setSalesProduct] = useState([]);


    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/')
            .then(res => res.json())
            .then(data => {
                const Singleproduct = data.filter(sales => sales.category == "sales");



                setSalesProduct(Singleproduct);
            });
    }, []);

    // console.log(salesProduct);






    const cartProduct = (cart) => {

        const { productName, productPrice } = cart;

        const cartProduct = {
            productName,
            productPrice,
            email: users.email
        }

        console.log(cartProduct);


        fetch('http://localhost:5000/', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(cartProduct),


        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted Successfully', data);
                fetch('http://localhost:5000/cart')
                    .then(res => res.json())
                    .then(data => setCartNum(data.length));

            }

            );

    }


    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => setCartNum(data.length));


    }, []);



    return (
        <>
            <div className="row mt-5">

                {
                    salesProduct == '' ? <div class="spinner-border text-success text-center mx-auto my-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        :
                        salesProduct.map(singleSales =>
                            <div className="col-lg-4">

                                <div className="product-box">

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
                                                    <img onClick={() => { users.email ? cartProduct(singleSales) : navigate("/login") }} src={cartImg} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <Link to={`/productDetails/${singleSales.id}`}>
                                            <h6 className='product-title'>
                                                {singleSales.productName}
                                            </h6>
                                        </Link>
                                        <h6 className='product-price'>$  {singleSales.productPrice}</h6>
                                    </div>

                                </div>
                            </div>
                        )
                }




            </div>
        </>
    );
};

export default Sales;