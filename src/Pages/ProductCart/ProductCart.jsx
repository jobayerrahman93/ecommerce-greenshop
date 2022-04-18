import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RelatedProducts from '../../Sections/RelatedProducts';
import './ProductCart.css';
const ProductCart = ({ cartfromDetails, pastCartTotal, checkoutDetails }) => {


    const [totalCart, setTotalCart] = useState(pastCartTotal);
    const [totalCartPrice, setTotalCartPrice] = useState(cartfromDetails.productPrice);
    console.log(cartfromDetails);


    const cartPlus = () => {

        setTotalCart(totalCart + 1);

    }

    const cartMinus = () => {

        if (totalCart > 1) {
            setTotalCart(totalCart - 1);
        }
        else {
            return
        }

    }

    console.log(totalCart);


    // const location = useLocation();
    // const { pDetails } = location.state;

    // console.log(pDetails)

    useEffect(() => {
        // console.log(totalCart);
        // console.log(totalCartPrice);
        let totalProductPrice = cartfromDetails.productPrice * totalCart;
        // console.log(totalProductPrice);
        setTotalCartPrice(totalProductPrice);
        // console.log(totalProductPrice);
    }, [totalCart])


    let shippingCharge = 16;

    let totalBalance = totalCartPrice + shippingCharge;


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

                                        <td>{cartfromDetails.productName}</td>
                                        <td>{cartfromDetails.productPrice}</td>
                                        <td>
                                            <div className='d-flex'>
                                                <button onClick={cartMinus} className='minusBtn'>-</button>
                                                <input defaultValue="0" value={totalCart} className='cartValue' type="text" />
                                                <button onClick={cartPlus} className='plusBtn'>+</button>
                                            </div>
                                        </td>
                                        <td className='table-price'>$ <span>{totalCartPrice}</span></td>
                                    </tr>
                                    {/* <tr>

                                        <td>Blushing Bromeliad</td>
                                        <td>238.00</td>
                                        <td>
                                            <div className='d-flex'>
                                                <button onClick={cartMinus} className='minusBtn'>-</button>
                                                <input defaultValue="0" value={totalCart} className='cartValue' type="text" />
                                                <button onClick={cartPlus} className='plusBtn'>+</button>
                                            </div>
                                        </td>
                                        <td className='table-price'>$ <span>238.00</span></td>
                                    </tr> */}

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
                                        <h6>$ <span>{totalCartPrice}</span></h6>
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
                                        <h6 className='main-color'>$ <span>{totalBalance}</span></h6>
                                    </div>

                                    <Link to="/checkout">
                                        <button onClick={() => checkoutDetails(cartfromDetails, totalBalance, totalCart)} type='button' className='btn cmn-btn w-100'>Proceed To Checkout</button>
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