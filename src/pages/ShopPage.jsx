import React from "react";
import Banner from "../components/ShopPage/Banner";
import Categories from "../components/ShopPage/Categories";
import ToolBar from "../components/ShopPage/ToolBar";
import ProductsList from "../components/ShopPage/ProductsList";
import Logos from "../components/ShopPage/Logos";

function ShopPage() {
  return (
    <div>
      <Banner />
      <Categories />
      <ToolBar />
      <ProductsList />
      <Logos />
    </div>
  );
}

export default ShopPage;
