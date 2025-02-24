import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const categories = useSelector((state) => state.product.categories);

  const navigate = useNavigate();
  const handleClick = () => {
    const foundCategory = categories.find((c) => c.id === item.category_id);

    if (!foundCategory) {
      navigate("/shop");
      return;
    }
    const gender = foundCategory.gender;
    window.scrollTo(0, 0);
    navigate(
      `/shop/${gender}/${foundCategory.title}/${item.category_id}/${item.name
        .replace(/\s+/g, "-")
        .toLowerCase()}/item:${item.id}`
    );
  };

  return (
    <div className="w-1/5 min-w-[200px]" onClick={handleClick}>
      <img
        src={item.image}
        alt={item.title}
        className="mb-5 max-h-full h-[300px]"
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
