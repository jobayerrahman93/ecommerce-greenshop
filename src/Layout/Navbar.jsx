import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-lg-top">
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
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Plant Care
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Blogs</a>
              </li>
            </ul>

            <div>
              <div className="d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping mx-4"></i>
                <button
                  type="button"
                  className=" text-white login_btn text-center d-flex justify-content-center"
                >
                  <i class="fa-solid fa-arrow-right-from-bracket me-1"></i>
                  Login
                </button>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
