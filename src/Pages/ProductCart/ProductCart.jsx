import React from 'react';
import { Link } from 'react-router-dom';
import RelatedProducts from '../../Sections/RelatedProducts';
import './ProductCart.css';
const ProductCart = () => {
    return (
        <>
            <section className='products-cart-section'>
                <div className="container">
                    {/* breadcrumbs */}

                    <div className="breadcrumbs my-5">
                        <p>Home/Shop/Product-Cart</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <table class="table table-responsive table-borderless align-middle">
                                <thead>
                                    <tr >
                                        <th scope="col">Products</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="spacer highlighted">

                                        <td>Barberton Daisy</td>
                                        <td>238.00</td>
                                        <td>
                                            <div className='d-flex'>
                                                <button className='minusBtn'>-</button>
                                                <input defaultValue="0" min='0' className='cartValue' type="text" />
                                                <button className='plusBtn'>+</button>
                                            </div>
                                        </td>
                                        <td className='table-price'>$ <span>238.00</span></td>
                                    </tr>
                                    <tr>

                                        <td>Blushing Bromeliad</td>
                                        <td>238.00</td>
                                        <td>
                                            <div className='d-flex'>
                                                <button className='minusBtn'>-</button>
                                                <input defaultValue="0" min='0' className='cartValue' type="text" />
                                                <button className='plusBtn'>+</button>
                                            </div>
                                        </td>
                                        <td className='table-price'>$ <span>238.00</span></td>
                                    </tr>
                                    <tr>

                                        <td>Larry the Bird</td>
                                        <td>238.00</td>
                                        <td>
                                            <div className='d-flex'>
                                                <button className='minusBtn'>-</button>
                                                <input defaultValue="0" min='0' className='cartValue' type="text" />
                                                <button className='plusBtn'>+</button>
                                            </div>
                                        </td>
                                        <td className='table-price'>$ <span>238.00</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-4">

                            <div className="product-cart-right">
                                <h3 >Cart Totals</h3>
                                <hr />
                                <p className='mb-3'>Coupon Apply</p>

                                <div class="input-group mb-3">
                                    <input type="text" class="form-control apply-input" placeholder="Enter cupon code here" aria-label="" aria-describedby="button-addon2" />
                                    <button class="btn apply-btn" type="button" id="button-addon2">Apply</button>
                                </div>


                                <div className="subtotal-section">
                                    <div className='d-flex justify-content-between'>
                                        <p>Subtotal:</p>
                                        <h6>$ <span>2,683.00</span></h6>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Coupon Discount:</p>
                                        <h6>$ <span>00</span></h6>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Shiping:</p>
                                        <h6>$ <span>16</span></h6>
                                    </div>

                                    <div>
                                        <p className='shipping-charge'>View shipping charge</p>
                                    </div>


                                    <div className='d-flex justify-content-between'>
                                        <p className='total-cart-price'>Total:</p>
                                        <h6 className='main-color'>$ <span>1690.00</span></h6>
                                    </div>

                                    <Link to="/checkout">
                                        <button type='button' className='btn cmn-btn w-100'>Proceed To Checkout</button>
                                    </Link>

                                    <p className='main-color mt-4 text-center'>Continue Shopping</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <RelatedProducts></RelatedProducts>
                </div>
            </section>
        </>
    );
};

export default ProductCart;