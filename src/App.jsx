import "./App.css";
import { Button } from "../src/components/ui/button";
import Navbar from "./components/ui/Navbar";
import { BrowserRouter } from "react-router-dom"
 import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { Card } from "./components/ui/card";
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Navbar/>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ProductList/>
    </BrowserRouter>
  );
}



export default App;
