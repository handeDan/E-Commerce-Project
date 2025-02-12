import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryPick from "../components/CategoryPick";
import ProductCategoryList from "../components/ProductCategoryList";

function HomePage() {
  return (
    <div>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
    </div>
  );
}

export default HomePage;
