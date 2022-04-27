import React from 'react';
import { Link } from 'react-router-dom';
import callImg from '../img/Calling.png';
import facebookImg from "../img/Facebook.png";
import instagramImg from "../img/Instagram.png";
import linkedinImg from "../img/Linkedin.png";
import locationImg from "../img/Location.png";
import logo from '../img/logo.png';
import messageImg from "../img/Message.png";
import newsltr1 from "../img/newsltr1.png";
import newsltr2 from "../img/newsltr2.png";
import paymentImg from "../img/paymentImg.png";
import twitterImg from "../img/Twitter.png";
import uniconImg from "../img/Union.png";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    {/* newsletter section */}
                    <div className="newsletter-section">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-3 mb-lg-0">
                                <div className="newsletter-media">
                                    <img src={newsltr1} alt="" />

                                </div>
                                <div className="newsletter-des-box">
                                    <h3 className='newsletter-post-title'>Garden Care</h3>
                                    <p className='newsletter-post-des'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-0 mb-lg-0 mb-md-3">
                                <div className="newsletter-media">
                                    <img src={newsltr2} alt="" />

                                </div>
                                <div className="newsletter-des-box">
                                    <h3 className='newsletter-post-title'>Plant Renovation</h3>
                                    <p className='newsletter-post-des'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-0 mb-lg-0">
                                <div className="newsletter-media">
                                    <img src={newsltr1} alt="" />

                                </div>
                                <div className="newsletter-des-box">
                                    <h3 className='newsletter-post-title'>Plant Renovation</h3>
                                    <p className='newsletter-post-des'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                                </div>


                            </div>

                            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-md-0 mb-lg-0">
                                <h3 className='newsletter-subscribe-title'>Would you like to join newsletters?</h3>


                                <div class="input-group subscribe-input-group">
                                    <input type="text" class="form-control " placeholder="Enter your email address" aria-label="Enter your email address" aria-describedby="button-addon2" />
                                    <button class="btn newsletter-subscribe-btn" type="button" id="button-addon2">Button</button>
                                </div>

                                <p className='newsletter-subscribe-des'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                            </div>
                        </div>
                    </div>


                    {/* contact section */}


                    <div className="contact-section">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mb-2 mb-md-0 mb-lg-0 d-flex align-items-center">
                                <img src={logo} alt="" />
                                <span className='company-title'>Eco Shop</span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-2 mb-md-0 mb-lg-0">
                                <div className="d-flex">
                                    <div><img src={locationImg} alt="" /></div>

                                    <div><p className='ms-2'>70 palashbari,
                                        Gaibandha</p></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 mb-2 mb-md-0 mb-lg-0 ">
                                <div className="d-flex">
                                    <div><img src={messageImg} alt="" /></div>

                                    <div><p className='ms-2'>contact@greenshop.com</p></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6  col-12 mb-2 mb-md-0 mb-lg-0">
                                <div className="d-flex">
                                    <div><img src={callImg} alt="" /></div>

                                    <div><p className='ms-2'>01749666529</p></div>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/* main footer section */}

                    <div className="main-footer">
                        <div className="row">
                            <div className="col-lg-3  col-md-6">
                                <h3>My Account</h3>

                                <ul>
                                    <li>
                                        <Link to="/">
                                            My Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Our stores
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Career
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Specials
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>Help & Guide</h3>

                                <ul>
                                    <li>
                                        <Link to="/">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            How to Buy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Shipping and Delivery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Product Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            How to Return
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>Categories</h3>

                                <ul>
                                    <li>
                                        <Link to="/">
                                            House plants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Potter Plants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Seeds
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Small Plants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Accessories
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <h3>Social Media</h3>

                                <div className="social-iconBox d-flex">
                                    <div className="social-icon">
                                        <img src={facebookImg} alt="" />
                                    </div>

                                    <div className="social-icon">
                                        <img src={instagramImg} alt="" />
                                    </div>
                                    <div className="social-icon">
                                        <img src={twitterImg} alt="" />
                                    </div>
                                    <div className="social-icon">
                                        <img src={linkedinImg} alt="" />
                                    </div>

                                    <div className="social-icon">
                                        <img src={uniconImg} alt="" />
                                    </div>
                                </div>

                                <h3 className='we-accept'>We Accept</h3>
                                <img src={paymentImg} alt="" />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container copy-right py-3">
                    <p className='text-center'>© 2021 JobayerDevs. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;