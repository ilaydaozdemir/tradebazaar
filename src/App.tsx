import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products/Products";
import Home from "./components/pages/Home/Home";
import OrderTracking from "./components/pages/OrderTracking/OrderTracking";
import Discounts from "./components/pages/Discounts/Discounts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ordertracking" element={<OrderTracking />} />
        <Route path="/discounts" element={<Discounts />} />
      </Routes>
    </div>
  );
}

export default App;
