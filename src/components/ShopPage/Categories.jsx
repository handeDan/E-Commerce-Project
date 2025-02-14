import React from "react";
import { shopList } from "../../../public/data";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="bg-secondary-gray">
      {shopList.map((item, key) => (
        <CategoryCard key={key} item={item} />
      ))}
    </div>
  );
}

export default Categories;
