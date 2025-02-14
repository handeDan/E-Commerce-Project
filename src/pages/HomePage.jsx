import React from "react";
import HeroSlider from "../components/HomePage/HeroSlider";
import CategoryPick from "../components/HomePage/CategoryPick";
import ProductCategoryList from "../components/HomePage/ProductCategoryList";
import Slider from "../components/HomePage/Slider";
import C2A from "../components/HomePage/C2A";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";

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
