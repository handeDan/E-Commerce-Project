import React from "react";
import { productList } from "../../public/data";
import ProductCard from "./ProductCard";

function ProductCategoryList() {
  return (
    <div>
      <div className="text-center mx-auto w-1/2 mb-10 mt-20">
        <p className="text-primary font-semibold text-lg mt-10">
          Featured Products
        </p>
        <p className="font-bold text-primary-dark text-2xl my-2">
          BESTSELLER PRODUCTS
        </p>
        <p className="text-primary">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="mb-20 flex flex-wrap justify-center mx-48 max-md:mx-5 gap-4">
        {productList.map((item, key) => (
          <ProductCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategoryList;
