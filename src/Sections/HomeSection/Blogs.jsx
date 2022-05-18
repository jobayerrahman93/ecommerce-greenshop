import React from 'react';
import { NavLink } from 'react-router-dom';
import blog1 from '../../img/blog1.png';
import './Blogs.css';


const Blogs = () => {
    return (
        <>
            <div className="container blogs">
                <h1 className='blogs-title text-center'>Our Blog Posts</h1>
                <p className='blogs-subtitle'>
                    We are an online plant shop offering a wide range of cheap and trendy plants.
                </p>

                <div className="row blogs-box">
                    <div className="col-lg-3  col-md-6">
                        <div className="blog-media">
                            <img src={blog1} className="img-fluid" alt="" />
                        </div>
                        <div className="blog-des p-2">
                            <p className='blog-date'>September 12  | Read in 6 minutes</p>
                            <h3 className='blogs-post-title mt-3'>Cactus & Succulent
                                Care Tips</h3>
                            <p className='blogs-post-details my-3'>Cacti are succulents are easy care plants for any home or patio. </p>

                            <NavLink to="/">Read More  <i class="fa-solid fa-arrow-right"></i> </NavLink>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Blogs;