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

      <div className="flex max-md:flex-col max-md:flex-wrap justify-center items-center gap-5 mx-48 max-md:mx-5">
        {/* Sol tarafta büyük görseller */}
        <div className="flex w-1/2 min-w-[300px]">
          {categoryList.slice(0, 1).map((item, key) => (
            <CategoryCard key={key} item={item} size="x-large" />
          ))}
        </div>
        {/* Sol tarafta ortadaki görsel */}
        <div className="flex w-1/4 min-w-[300px]">
          {categoryList.slice(1, 2).map((item, key) => (
            <CategoryCard key={key} item={item} size="large" />
          ))}
        </div>

        {/* Sağ tarafta küçük görseller */}
        <div className="flex flex-col w-1/4 gap-5 min-w-[300px]">
          {categoryList.slice(2, 4).map((item, key) => (
            <CategoryCard key={key} item={item} size="small" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPick;
