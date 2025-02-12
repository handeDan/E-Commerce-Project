import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryPick from "../components/CategoryPick";
import ProductCategoryList from "../components/ProductCategoryList";
import Slider from "../components/Slider";
import C2A from "../components/C2A";
import FeaturedPosts from "../components/FeaturedPosts";

function HomePage() {
  return (
    <div>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
      <Slider />
      <C2A />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;
