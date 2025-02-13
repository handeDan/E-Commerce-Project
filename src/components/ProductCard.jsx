import React from "react";

function ProductCard({ item }) {
  return (
    <div className="w-1/4">
      <img
        src={item.image}
        alt={item.title}
        className="my-5 px-10 max-h-full"
      />
      <div className="text-center">
        <p className="text-primary-dark font-bold mb-2">{item.title}</p>
        <p className="text-primary font-bold mb-2">{item.description}</p>
        <div className="flex justify-center gap-3 mb-2">
          <p className="text-primary-light font-bold">{item.price1}</p>
          <p className="text-secondary-green font-bold">{item.price2}</p>
        </div>
        <div className="flex justify-center gap-3">
          <div className="border bg-secondary-blue w-4 h-4 rounded-full"></div>
          <div className="border bg-secondary-green w-4 h-4 rounded-full"></div>
          <div className="border bg-secondary-alert w-4 h-4 rounded-full"></div>
          <div className="border bg-secondary-dark w-4 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
