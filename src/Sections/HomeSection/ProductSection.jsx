import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import discountImg from '../../img/discount-banner.png';
import AllPlants from './AllPlants';
import './ProductSection.css';

const ProductSection = () => {

    const location = useLocation();


    return (
        <>

            <div className="container product-section">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="category-filter">
                            <h6 className='category-title p-2'>Category</h6>
                            <div className="product-category-item ms-4">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>House Plants</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>33</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Potter Plants</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>12</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Seeds</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>65</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Small Plants</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>39</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Big Plants</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>23</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Succulents Plants</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>17</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Trerrariums</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>19</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Gardening</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>13</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h6>Accessories</h6>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6>18</h6>
                                    </div>
                                </div>
                            </div>

                            {/* price range */}

                            <div className="price-range mt-4">
                                <h6 className='category-title p-2'>Price Range</h6>
                                <div className='ms-4'>

                                    <p>Price: <span>$ 660</span> <span>- $1230</span> </p>

                                    <button type='button' className='btn filter-btn '> Filter</button>
                                </div>
                            </div>


                            {/* product size */}

                            <div className="product-size mt-4">
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
                    <div className="col-lg-9">
                        <div className="all-products-section container">
                            <div className='d-flex'>
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

                                <div className='ms-auto d-flex'>
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
            </div>

        </>
    );
};

export default ProductSection;