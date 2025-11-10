import React from "react";
import "../assets/Containar.css";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage ";
import Signup from "./Sign-up/Signup";
import Login from "./Log-in/Login";
import Logged from "./User-dropdown/logged";
import ProductDetails from "./Product detielse/ProductDetails";
import Checkout from "./Checkout/Checkout";
import Cart from "./Cart/Cart";
import { CartProvider } from "./Cart/contexts/CartProvider";

export const Containar = () => {
  return (
    <div className="containar">
      <CartProvider>
        <Navbar showUserAccount={true} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged" element={<Logged />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
};
