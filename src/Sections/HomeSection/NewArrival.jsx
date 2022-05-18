import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../firebase/hook/useAuth';
import cartImg from '../../img/cart.png';
import favoriteImg from '../../img/favorite.png';
import searchImg from '../../img/search.png';

const NewArrival = ({ setCartNum }) => {



    const { users } = useAuth();

    // console.log(users);

    const navigate = useNavigate();

    const [arrivalProduct, setArrivalProduct] = useState([]);


    useEffect(() => {
        fetch('https://limitless-sierra-48789.herokuapp.com/')
            .then(res => res.json())
            .then(data => {
                const Singleproduct = data.filter(categorys => categorys.category == "newArrivals");



                setArrivalProduct(Singleproduct);
            });
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



    return (
        <>
            <div className="row mt-5">



                {
                    arrivalProduct == '' ? <div className="spinner-border text-success text-center mx-auto my-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                        :
                        arrivalProduct.map((singleArrival) =>
                            <div key={singleArrival.id} className="col-lg-4 col-md-6">
                                <div className="product-box">



                                    <div className="product-media">
                                        <img src={singleArrival.productImg} className="" height="250" alt="" />

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
                                                    <img onClick={() => { users.email ? cartProduct(singleArrival) : navigate("/login") }} src={cartImg} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <Link to={`/productDetails/${singleArrival.id}`}>
                                            <h6 className='product-title'>{singleArrival.productName}</h6>
                                        </Link>
                                        <h6 className='product-price'>$ {singleArrival.productPrice}</h6>
                                    </div>


                                </div>
                            </div>
                        )
                }


            </div>
        </>
    );
};

export default NewArrival;