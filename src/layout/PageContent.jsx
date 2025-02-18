import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import SignupPage from "../pages/SignupPage";

const PageContent = () => {
  return (
    <div>
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </>
    </div>
  );
};

export default PageContent;
