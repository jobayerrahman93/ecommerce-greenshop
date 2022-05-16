import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./firebase/hook/AuthProvider";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Checkout from "./Pages/Checkout/Checkout";
import Confirmation from "./Pages/Confirmation/Confirmation";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import UserLogin from "./Pages/Login/UserLogin";
import ProductCart from './Pages/ProductCart/ProductCart.jsx';
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AllPlants from "./Sections/HomeSection/AllPlants";
import Blogs from "./Sections/HomeSection/Blogs";
import NewArrival from "./Sections/HomeSection/NewArrival";
import Sales from "./Sections/HomeSection/Sales";


function App() {

  const [cartfromDetails,setCartfromDetails]=useState({});
  const [pastCartTotal,setPastCartTotal]=useState(0);
  // console.log(cartfromDetails);

  
  const cartDetails=(cart,pdtl)=>{
    // console.log("cart number",cart,pdtl);

    setCartfromDetails(pdtl);
    setPastCartTotal(cart);
  
  }


  const [checkoutCartDtl,setCheckOutCartDtl]=useState({});
  const [cartTotalBalance,setcartTotalBalance]=useState(0);
  const [totalCart,setTotalCart]=useState(0);
  

  const checkoutDetails=(cartDetails,totalBalance,totalCart)=>{
    console.log(cartDetails, totalBalance,totalCart, "come in");

    setCheckOutCartDtl(cartDetails);
    setcartTotalBalance(totalBalance);
    setTotalCart(totalCart);

    
  }


  const [cartNum, setCartNum] = useState(0);
  console.log(cartNum);

  // console.log(cartCount);

  // const cartTotal=(value)=>{
  //   console.log(value);
  // }

  
  
  return (


    <>
      <AuthProvider>
      <BrowserRouter>
        <Navbar cartNum={cartNum} ></Navbar>
        <Routes>
          <Route path="/" element={<Home setCartNum={setCartNum} />}>
            <Route path="allPlants" element={<AllPlants  />}></Route>
            <Route path="newArrival" element={<NewArrival setCartNum={setCartNum} />}></Route>
            <Route path="sales" element={<Sales setCartNum={setCartNum} />}></Route>
          </Route>

          <Route path="/blogs" element={<Blogs />}></Route>

          <Route
            path="/productDetails/:id"
            element={<ProductDetails cartDetails={cartDetails} />}
          ></Route>

          <Route path="/login" element={<Login />}>
            <Route path="register" element={<Register />}></Route>
            <Route path="UserLogin" element={<UserLogin hello="fuck"  />}></Route>
          </Route>

          <Route path="/product-cart" element={<ProductCart cartfromDetails={cartfromDetails} pastCartTotal={pastCartTotal} checkoutDetails={checkoutDetails} />}></Route>
          <Route path="/checkout" element={<Checkout checkoutCartDtl={checkoutCartDtl} cartTotalBalance={cartTotalBalance} totalCart={totalCart} />}></Route>
          <Route path="/confirmation" element={<Confirmation/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
