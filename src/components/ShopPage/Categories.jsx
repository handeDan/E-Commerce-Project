import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions/thunkActions";

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  const categories = useSelector((state) => {
    return state.product.categories;
  });

  return (
    <div className="bg-secondary-gray">
      <div className="flex max-md:flex-col max-md:flex-wrap justify-center items-center gap-6 mx-48 max-md:mx-5">
        {categories
          .map((i) => ({ ...i, image: i.img }))
          .sort((a, b) => b.rating - a.rating) // Rating'e göre sırala
          .slice(0, 5) // İlk 5 kategori
          .map((item, key) => (
            <CategoryCard key={key} item={item} />
          ))}
      </div>
    </div>
  );
}

export default Categories;
