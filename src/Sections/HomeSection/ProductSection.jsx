import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import discountImg from '../../img/discount-banner.png';
import p3 from '../../img/p3.png';
import p5 from '../../img/p5.png';
import AllPlants from './AllPlants';
import './ProductSection.css';

const ProductSection = () => {

    const location = useLocation();


    return (
        <>

            <div className="container product-section">
                <div className="row">
                    <div className="col-lg-3 col-md-4 d-none d-md-block d-lg-block">
                        <div className="category-filter">
                            <h6 className='category-title p-2'>Category</h6>
                            <div className="product-category-item ms-4">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>House Plants</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>33</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Potter Plants</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>12</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Seeds</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>65</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Small Plants</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>39</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Big Plants</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>23</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Succulents Plants</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>17</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Trerrariums</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>19</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Gardening</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>13</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h6>Accessories</h6>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <h6>18</h6>
                                    </div>
                                </div>
                            </div>

                            {/* price range */}

                            <div className="price-range d-none d-md-block d-lg-block mt-4">
                                <h6 className='category-title p-2'>Price Range</h6>
                                <div className='ms-4'>

                                    <p>Price: <span>$ 660</span> <span>- $1230</span> </p>

                                    <button type='button' className='btn filter-btn '> Filter</button>
                                </div>
                            </div>


                            {/* product size */}

                            <div className="product-size mt-4 d-none d-md-block d-lg-block" >
                                <h6 className="category-title p-2">Size</h6>

                                <div className="product-size-items ms-4">
                                    <div className="row">
                                        <div className="col-lg-8">Small</div>
                                        <div className="col-lg-4">119</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">Medium</div>
                                        <div className="col-lg-4">86</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8">Small</div>
                                        <div className="col-lg-4">78</div>
                                    </div>
                                </div>
                            </div>

                            <div className="discount-banner mt-4">
                                <img className='img-fluid' height="470" src={discountImg} alt="" />
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-9 col-md-8 col-12 ">
                        <div className="all-products-section container">
                            <div className='d-flex allProduct-nav'>
                                <div>
                                    <NavLink to="/allPlants">
                                        All Plants
                                    </NavLink>
                                    <NavLink to="/newArrival">
                                        New arrival
                                    </NavLink>
                                    <NavLink to="/sales">
                                        Sales
                                    </NavLink>
                                </div>

                                <div className='ms-auto d-flex align-items-center sortBySide'>
                                    <p className='mb-0 me-2 short-by'>Sort By: </p>
                                    <select class="form-select filter-form-select" aria-label="Default select example">
                                        <option selected>Default Sorting</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>

                                    </select>
                                </div>
                            </div>


                            {


                                location.pathname == '/' ? <AllPlants></AllPlants> : <Outlet></Outlet>
                            }





                        </div>


                        <nav aria-label="Page navigation example ">
                            <ul class="pagination flex justify-content-end">

                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* find plants */}


                <div className="row find-plants-row">
                    <div className="col-lg-6 col-12 col-md-6">
                        <div className="plants-container d-flex">
                            <div className="left d-none d-md-block d-lg-block">
                                <img src={p5} alt="" />
                            </div>
                            <div className="right text-end p-4">
                                <h3 className='findPlants-title'>Summer Cactus Succulents</h3>
                                <p className='findPlants-subTitle'>we are an online plant shop offering a wide range of cheap and trendy plants</p>

                                <button className="findBtn btn">Find More <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="plants-container d-flex">
                            <div className="left d-none d-md-block d-lg-block">
                                <img src={p3} alt="" />
                            </div>
                            <div className="right text-end p-4">
                                <h3 className='findPlants-title'>Styling Trends & Much More</h3>
                                <p className='findPlants-subTitle'>we are an online plant shop offering a wide range of cheap and trendy plants</p>

                                <button className="findBtn btn">Find More <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default ProductSection;