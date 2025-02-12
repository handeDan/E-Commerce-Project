import React from "react";
import { ProductList } from "../../public/data";
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
      {ProductList.map((item, key) => (
        <ProductCard key={key} item={item} />
      ))}
    </div>
  );
}

export default ProductCategoryList;
