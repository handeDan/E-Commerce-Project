import React from "react";
import Banner from "../components/ProductDetailPage/Banner";
import ProductDetail from "../components/ProductDetailPage/ProductDetail";
import Description from "../components/ProductDetailPage/Description";
import Bestseller from "../components/ProductDetailPage/Bestseller";
import Logos from "../components/ShopPage/Logos";

function ProductDetailPage() {
  return (
    <div>
      <Banner />
      <ProductDetail />
      <Description />
      <Bestseller />
      <Logos />
    </div>
  );
}

export default ProductDetailPage;
