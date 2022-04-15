import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
import NewArrival from "./Sections/HomeSection/NewArrival";
import Sales from "./Sections/HomeSection/Sales";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="allPlants" element={<AllPlants />}></Route>
            <Route path="newArrival" element={<NewArrival />}></Route>
            <Route path="sales" element={<Sales />}></Route>
          </Route>

          <Route
            path="/productDetails/:id"
            element={<ProductDetails />}
          ></Route>

          <Route path="/login" element={<Login />}>
            <Route path="register" element={<Register />}></Route>
            <Route path="UserLogin" element={<UserLogin />}></Route>
          </Route>

          <Route path="/product-cart" element={<ProductCart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/confirmation" element={<Confirmation/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default App;
