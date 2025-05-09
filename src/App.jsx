import "./App.css";
import { Button } from "../src/components/ui/button";
import Navbar from "./components/ui/Navbar";
import { BrowserRouter } from "react-router-dom"
 import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { Card } from "./components/ui/card";
import ProductList from "./components/ProductList";
import Cart from "./Pages/Cart";
import Signup from './Pages/Signup';



function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
     
    </BrowserRouter>
  );
}



export default App;
