import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import UserLogin from './Pages/Login/UserLogin';
import AllPlants from './Sections/HomeSection/AllPlants';
import NewArrival from './Sections/HomeSection/NewArrival';
import Sales from './Sections/HomeSection/Sales';


function App() {
  return (
    <>

  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home></Home>}>
        <Route path='allPlants' element={<AllPlants></AllPlants>} ></Route>
        <Route path='newArrival' element={<NewArrival></NewArrival>} ></Route>
        <Route path='sales' element={<Sales></Sales>} ></Route>
    </Route>
    <Route path='/login' element={<Login></Login>}>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='UserLogin' element={<UserLogin></UserLogin>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
