import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../firebase/hook/useAuth';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import searchImg from '../../img/search.png';
import './AllPlants.css';

const AllPlants = ({ setCartNum }) => {

    const { users } = useAuth();

    // console.log(users);

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);



    const cartProduct = (cart) => {

        const { productName, productPrice } = cart;

        const cartProduct = {
            productName,
            productPrice,
            email: users.email
        }

        // console.log(cartProduct);


        fetch('https://limitless-sierra-48789.herokuapp.com/', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(cartProduct),


        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted Successfully', data);
                fetch('https://limitless-sierra-48789.herokuapp.com/cart')
                    .then(res => res.json())
                    .then(data => setCartNum(data.length));

            }

            );

    }


    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => setCartNum(data.length));


    }, []);


    // useEffect(() => {
    //     cartTotal(cartNum)
    // }, [])


    return (
        <>
            <div className="row mt-5">

                {
                    products == '' ? <div className="spinner-border text-success text-center mx-auto my-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                        :
                        products.map(singleProduct =>
                            <div key={singleProduct.id} className="col-lg-4 col-md-6 mb-5">
                                <div className="product-box">
                                    <div className="product-media">
                                        <img src={singleProduct.productImg} className="w-100" height="250" alt="" />


                                        {/* cart hover section */}

                                        <div className="cart-hover-menu">
                                            <div className="d-flex cart-hover-content">
                                                <div>
                                                    <img src={searchImg} alt="" />
                                                </div>
                                                <div>
                                                    <img src={favoriteImg} alt="" />

                                                    {/* <i className="fa-solid fa-heart"></i> */}

                                                </div>
                                                <div>
                                                    <img onClick={() => { users.email ? cartProduct(singleProduct) : navigate("/login") }} src={cartImg} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                    <div className='mt-3'>


                                        <Link to={`/productDetails/${singleProduct.id}`} >

                                            <h6 className='product-title'>{singleProduct.productName}</h6>
                                        </Link>

                                        <h6 className='product-price'>$ <span>
                                            {singleProduct.productPrice}</span></h6>
                                    </div>






                                </div>
                            </div>


                        )

                }


            </div>
        </>
    );
};

export default AllPlants;