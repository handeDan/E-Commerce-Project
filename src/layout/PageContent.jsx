import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/AboutPage";
import ProductsList from "../components/ShopPage/ProductsList";
import CartPage from "../pages/CartPage";

const PageContent = () => {
  return (
    <div>
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/*" element={<ProductsList />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </>
    </div>
  );
};

export default PageContent;
