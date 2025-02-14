import React from "react";

function CategoryCard({ item, size }) {
  return (
    <div className="w-full">
      <div
        className={`relative flex justify-center items-end bg-no-repeat bg-cover ${
          size === "large"
            ? "w-full h-[400px]"
            : size === "x-large"
            ? "w-full h-[400px]" // x-large boyutu için height
            : "w-full h-[200px]"
        }`}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <button className="bg-white px-16 py-3 ml-5 mb-5 text-primary-dark font-bold">
          {item.title}
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
