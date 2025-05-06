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
import Signin from "./Pages/Signin";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
      <ProductList />
    </BrowserRouter>
  );
}



export default App;
