import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useFirebase from "../firebase/hook/useFirebase";
import logo from '../img/logo.png';
import "./Navbar.css";


const Navbar = ({ cartNum }) => {
  const { users, logOut } = useFirebase();
  // console.log(users);

  // console.log(cartNum);


  const [totalCart, setTotalCart] = useState(0)


  useEffect(() => {
    fetch('https://ecoshop-server-7a6r.vercel.app/cart')
      .then(res => res.json())
      .then(data => {
        if (users.email) {
          const userCartProduct = data.filter(userCart => userCart.email === users.email);
          console.log(userCartProduct);
          setTotalCart(userCartProduct.length)
        }
        else {
          setTotalCart(0)
        }
      })
  }, [cartNum, users.email]);


  const location = useLocation();
  // console.log(location);


  return (
    <>


      <nav className="navbar header-section navbar-expand-lg navbar-light bg-white sticky-lg-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt=""
              width="34"
              height="34"
              className="d-inline-block align-text-top me-2"
            />
            Green Shop
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                {location.pathname == "/" ? <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink> :
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productDetails/2">
                  Product Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product-cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/checkout">
                  Checkout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/blogs">Blogs</NavLink>
              </li>
            </ul>

            <div>
              <div className="d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-magnifying-glass"></i>
                <div>
                  <div className="">
                    <div className="cart-icon-div">
                      <i className="fa-solid fa-cart-shopping mx-5 "></i>
                      <div className="cart-icon">{totalCart}</div>
                    </div>



                  </div>
                </div>


                {

                  users.email ? <button onClick={logOut} className=" text-white login_btn text-center d-flex justify-content-center">

                    <i className="fa-solid fa-arrow-right-from-bracket me-1"></i>

                    Log Out</button> :


                    <NavLink to='/login' style={{ textDecoration: 'none' }}> <button
                      type="button"
                      className=" text-white login_btn text-center d-flex justify-content-center"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket me-1"></i>
                      Login
                    </button></NavLink>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
