import React from "react";

function BestsellerCard({ item }) {
  return (
    <div className="w-1/5 min-w-[200px] bg-white">
      <img src={item.image} alt={item.title} className="max-h-full h-[300px]" />
      <div className="text-left p-5">
        <p className="text-primary-dark font-bold mb-2">{item.title}</p>
        <p className="text-primary font-bold mb-2">{item.description}</p>
        <div className="flex justify-start gap-3 mb-2">
          <p className="text-primary-light font-bold">{item.price1}</p>
          <p className="text-secondary-green font-bold">{item.price2}</p>
        </div>
      </div>
    </div>
  );
}

export default BestsellerCard;
