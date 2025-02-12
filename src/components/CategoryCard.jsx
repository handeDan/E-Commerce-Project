import React from "react";

function CategoryCard({ item }) {
  return (
    <div>
      <div
        className="my-5 mx-10 h-96 flex justify-start items-end"
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
