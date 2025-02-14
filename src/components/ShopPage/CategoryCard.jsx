import React from "react";

function CategoryCard({ item }) {
  return (
    <div>
      <div
        className={`relative flex justify-center items-end bg-no-repeat bg-cover w-80 h-80 md:w-60 md:h-60 mb-5 mx-auto`}
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-30 w-full h-full absolute top-0 left-0 gap-2">
          <p className="text-white font-bold text-xl">{item.title}</p>
          <p className="text-white font-bold text-lg">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
