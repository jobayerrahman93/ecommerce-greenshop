import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import paymentImg from '../../img/paymentImg.png';
import './Checkout.css';
const Checkout = ({ cartTotalBalance, checkoutCartDtl, totalCart }) => {

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
            <div className="checkout-section">
                <div className="container">

                    {/* breadcrumbs */}

                    <div className="breadcrumbs my-5">
                        <p>Home/ Shop / Checkout</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="billing-info">
                                <h4>Billing Address</h4>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">First Name <span>*</span> </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">Last Name <span>*</span> </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">

                                            <label for="exampleFormControlInput1" class="form-label">Country/Region <span>*</span> </label>

                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select country / region</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">Town/City <span>*</span> </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">Street Address <span>*</span> </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">Optional</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apartment/suite, unit" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">State <span>*</span> </label>

                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select state</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">Zip <span>*</span> </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">Email <span>*</span> </label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example:jobayer@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="billing-info-box">
                                            <label for="exampleFormControlInput1" class="form-label">Phone Number <span>*</span> </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>

                                    <div class="form-check ms-2 d-flex align-items-center">
                                        <input class="form-check-input" type="radio" name="" id="flexRadioDefault1" />
                                        <label class="form-check-label different-address " for="flexRadioDefault1">
                                            Ship to different address ?
                                        </label>
                                    </div>



                                    <div class="mt-3 col-lg-6">
                                        <label for="exampleFormControlTextarea1" class="form-label">Order notes (optional)</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="your-orders-section">
                                <h4>Your Orders</h4>

                                <div className='d-flex justify-content-between'>
                                    <h6 className='category'>Products</h6>
                                    <h6 className='category'>subtotal</h6>
                                </div>

                                <hr />

                                <div className="all-orders-checkout">
                                    <div className="orders-checkout mb-2">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img src={checkoutCartDtl.productImg} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-lg-7 col-9">
                                                <div className="single-product-checkout d-flex">
                                                    <div>
                                                        <h6 className='product-name'>{checkoutCartDtl.productName}</h6>
                                                        <p className='product-sku'>SKU: 19957518757065</p>
                                                    </div>

                                                    <div className='total-single-products-checkout'>
                                                        <span>(x{totalCart})</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-3">
                                                <h5 className='total-singleProduct-price'>$ <span>{checkoutCartDtl.productPrice}</span></h5>
                                            </div>
                                        </div>
                                    </div>



                                </div>


                                <div className="subtotal-section">
                                    <div className='d-flex justify-content-between'>
                                        <p>Subtotal:</p>
                                        <h6>$ <span>{cartTotalBalance}</span></h6>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Coupon Discount:</p>
                                        <h6>$ <span>00</span></h6>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Shiping:</p>
                                        <h6>$ <span>00</span></h6>
                                    </div>

                                    <div>
                                        <p className='shipping-charge text-end'>View shipping charge</p>
                                    </div>

                                    <hr />

                                    <div className='d-flex justify-content-between'>
                                        <p className='total-cart-price'>Total:</p>
                                        <h6 className='main-color'>$ <span>{cartTotalBalance}</span></h6>
                                    </div>


                                    <div className="payment-method">

                                        <h2 className='payment-method-title'>Payment Method</h2>

                                        <div class="form-check mb-4 payment-form">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label different-address " for="flexRadioDefault2">
                                                <img src={paymentImg} alt="" />
                                            </label>
                                        </div>

                                        <div class="form-check mb-4 payment-form">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <label class="form-check-label different-address " for="flexRadioDefault3">
                                                Direct Bank Transfer
                                            </label>
                                        </div>

                                        <div class="form-check mb-5 payment-form">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                            <label class="form-check-label different-address " for="flexRadioDefault4">
                                                Cash on delivery
                                            </label>
                                        </div>

                                        <Link to="/confirmation">
                                            <button type='button' className="btn place-orderBtn w-100  ">
                                                Place order
                                            </button>
                                        </Link>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;