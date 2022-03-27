import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AllPlants from './Sections/HomeSection/AllPlants';
import NewArrival from './Sections/HomeSection/NewArrival';
import Sales from './Sections/HomeSection/Sales';

function App() {
  return (
    <>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}>
        <Route path='allPlants' element={<AllPlants></AllPlants>} ></Route>
        <Route path='newArrival' element={<NewArrival></NewArrival>} ></Route>
        <Route path='sales' element={<Sales></Sales>} ></Route>
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
