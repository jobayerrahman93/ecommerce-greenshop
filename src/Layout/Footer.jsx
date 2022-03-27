import React from 'react';
import newsltr1 from "../img/newsltr1.png";
import newsltr2 from "../img/newsltr2.png";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    {/* newsletter section */}
                    <div className="newsletter-section">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="newsletter-media">
                                    <img src={newsltr1} alt="" />

                                </div>
                                <div className="newsletter-des-box">
                                    <h3 className='newsletter-post-title'>Garden Care</h3>
                                    <p className='newsletter-post-des'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="newsletter-media">
                                    <img src={newsltr2} alt="" />

                                </div>
                                <div className="newsletter-des-box">
                                    <h3 className='newsletter-post-title'>Plant Renovation</h3>
                                    <p className='newsletter-post-des'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="newsletter-media">
                                    <img src={newsltr2} alt="" />

                                </div>
                                <div className="newsletter-des-box">
                                    <h3 className='newsletter-post-title'>Plant Renovation</h3>
                                    <p className='newsletter-post-des'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;