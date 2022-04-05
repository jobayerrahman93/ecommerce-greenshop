import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../img/logo.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-lg-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="logo.png"
              alt=""
              width="34"
              height="34"
              class="d-inline-block align-text-top me-2"
            />
            Green Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="">
                  Shop
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="">
                  Plant Care
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " to="">Blogs</NavLink>
              </li>
            </ul>

            <div>
              <div className="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping mx-4"></i>


                <NavLink to='/login' style={{ textDecoration: 'none' }}> <button
                  type="button"
                  className=" text-white login_btn text-center d-flex justify-content-center"
                >
                  <i class="fa-solid fa-arrow-right-from-bracket me-1"></i>
                  Login
                </button></NavLink>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </nav> */}


      <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-lg-top">
        <div class="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              width="34"
              height="34"
              class="d-inline-block align-text-top me-2"
            />
            Green Shop
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="">
                  Shop
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="">
                  Plant Care
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " to="">Blogs</NavLink>
              </li>
            </ul>

            <div>
              <div className="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping mx-4"></i>


                <NavLink to='/login' style={{ textDecoration: 'none' }}> <button
                  type="button"
                  className=" text-white login_btn text-center d-flex justify-content-center"
                >
                  <i class="fa-solid fa-arrow-right-from-bracket me-1"></i>
                  Login
                </button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
