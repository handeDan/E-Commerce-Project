import React from "react";
import CategoryCard from "./CategoryCard";
import { categoryList } from "../../public/data";

function CategoryPick() {
  return (
    <div>
      <div className="text-center mx-auto w-1/2 mb-10 mt-20">
        <p className="font-bold text-primary-dark text-2xl mb-2">
          EDITOR'S PICK
        </p>
        <p className="text-primary">
          Problems trying to resolve the conflict between
        </p>
      </div>
      {categoryList.map((item, key) => (
        <CategoryCard key={key} item={item} />
      ))}
    </div>
  );
}

export default CategoryPick;
