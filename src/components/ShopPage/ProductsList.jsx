import React from "react";
import { productList } from "../../../public/data";
import ProductCard from "../HomePage/ProductCard";

function ProductsList() {
  return (
    <div>
      <div className="my-10 flex flex-wrap justify-center mx-48 max-md:mx-5 gap-4">
        {productList.map((item, key) => (
          <ProductCard key={key} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-16 mb-20 md:mb-10">
        <button className="px-4 py-6 border rounded-l-md text-primary border-primary bg-gray-200 font-bold">
          First
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="px-4 py-6 border text-secondary-blue font-bold border-primary hover:bg-secondary-blue hover:text-white"
          >
            {page}
          </button>
        ))}
        <button className="px-4 py-6 border rounded-r-md border-primary text-secondary-blue font-bold hover:bg-gray-200">
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
