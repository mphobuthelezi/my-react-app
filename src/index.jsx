import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



import {BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/products";
import Header from "./components/Header";
import ProductsDetails from "./components/ProductsDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      
        {/* <Route path="/"exact >
        <Redirect to ='/home' />
      </Route> */}

        <Router>
          <Routes>
            <Route path="/home" exact   element={<Home />} />
            <Route path="/products" exact  element={<Products />} />
            <Route path="/produts/:id" element={<ProductsDetails />} />          
        </Routes>
        </Router>
        
     
    </main>
  </React.StrictMode>
);
