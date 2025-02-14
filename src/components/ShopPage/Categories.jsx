import React from "react";
import { shopList } from "../../../public/data";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="bg-secondary-gray">
      <div className="flex max-md:flex-col max-md:flex-wrap justify-center items-center gap-6 mx-48 max-md:mx-5">
        {shopList.map((item, key) => (
          <CategoryCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
