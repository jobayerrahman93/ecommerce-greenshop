import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import thankImg from '../../img/thank-you.png';
import './Confirmation.css';

const Confirmation = () => {

    const location = useLocation();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        })
    }, [location])

    return (
        <>

            <div className="confirmation-section">
                <div className="container">

                    <div className="confirmation-box mt-5 d-flex flex-column justify-content-center align-items-center">
                        <img src={thankImg} alt="" />

                        <h1 className='mt-5'>
                            Your order has been received
                        </h1>

                        <Link to="/">
                            <p className='main-color mt-4 text-center d-flex align-items-center'>Continue Shopping <i className="fa-solid fa-arrow-right-long ms-2"></i></p>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Confirmation;