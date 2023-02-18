import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./firebase/hook/AuthProvider";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Checkout from "./Pages/Checkout/Checkout";
import Confirmation from "./Pages/Confirmation/Confirmation";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import UserLogin from "./Pages/Login/UserLogin";
import ProductCart from './Pages/ProductCart/ProductCart.jsx';
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AllPlants from "./Sections/HomeSection/AllPlants";
import NewArrival from "./Sections/HomeSection/NewArrival";
import Sales from "./Sections/HomeSection/Sales";


function App() {

  const [cartfromDetails,setCartfromDetails]=useState({});
  const [pastCartTotal,setPastCartTotal]=useState(0);
  
  const cartDetails=(cart,pdtl)=>{
    setCartfromDetails(pdtl);
    setPastCartTotal(cart);
  
  }


  const [checkoutCartDtl,setCheckOutCartDtl]=useState({});
  const [cartTotalBalance,setcartTotalBalance]=useState(0);
  const [totalCart,setTotalCart]=useState(0);
  

  const checkoutDetails=(cartDetails,totalBalance,totalCart)=>{
    setCheckOutCartDtl(cartDetails);
    setcartTotalBalance(totalBalance);
    setTotalCart(totalCart);

    
  }


  const [cartNum, setCartNum] = useState(0);

  return (


    <>
      <AuthProvider>
      <BrowserRouter>
        <Navbar cartNum={cartNum} />
        <Routes>
          <Route path="/" element={<Home setCartNum={setCartNum} />}>
            <Route path="allPlants" element={<AllPlants  />}/>
            <Route path="newArrival" element={<NewArrival setCartNum={setCartNum} />}/>
            <Route path="sales" element={<Sales setCartNum={setCartNum} />}/>
          </Route>

          <Route path="/blogs" element={<BlogPage/>}/>

          <Route
            path="/productDetails/:id"
            element={<ProductDetails cartDetails={cartDetails} />}
          />

          <Route path="/login" element={<Login />}>
            <Route path="register" element={<Register />}/>
            <Route path="UserLogin" element={<UserLogin hello="fuck"  />}/>
          </Route>

          <Route path="/product-cart" element={<ProductCart cartfromDetails={cartfromDetails} pastCartTotal={pastCartTotal} checkoutDetails={checkoutDetails} />}/>
          <Route path="/checkout" element={<Checkout checkoutCartDtl={checkoutCartDtl} cartTotalBalance={cartTotalBalance} totalCart={totalCart} />}/>
          <Route path="/confirmation" element={<Confirmation/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
