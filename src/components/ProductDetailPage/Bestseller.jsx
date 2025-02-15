import React from "react";
import { bestsellerList } from "../../../public/data";
import BestsellerCard from "./BestsellerCard";

function Bestseller() {
  return (
    <div className="bg-secondary-gray">
      <div className="text-left mx-48 py-10">
        <p className="font-bold text-primary-dark text-2xl mb-5">
          BESTSELLER PRODUCTS
        </p>
        <hr />
      </div>
      <div className="pb-10 flex flex-wrap justify-center mx-48 max-md:mx-5 gap-4">
        {bestsellerList.map((item, key) => (
          <BestsellerCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
