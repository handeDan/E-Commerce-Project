import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const PageContent = () => {
  return (
    <div>
      <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
        </Routes>
      </>
    </div>
  );
};

export default PageContent;
