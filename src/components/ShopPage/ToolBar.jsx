import { Component, TableOfContents } from "lucide-react";
import React, { useState } from "react";
import Select from "react-select";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/thunkActions";

const sortOptions = [
  { value: "price:asc", label: "Price: Low to High" },
  { value: "price:desc", label: "Price: High to Low" },
  { value: "rating:asc", label: "Rating: Low to High" },
  { value: "rating:desc", label: "Rating: High to Low" },
];

function ToolBar() {
  const [selectedSort, setSelectedSort] = useState(null);
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const handleFilter = () => {
    // Parametreleri koruyarak yeni istek oluştur
    const queryParams = new URLSearchParams();

    if (params["*"]) {
      const category = params["*"].split("/")[2];
      if (category) queryParams.append("category", category);
    }

    if (filterText) queryParams.append("filter", filterText);
    if (selectedSort) queryParams.append("sort", selectedSort.value);

    // Yeni URL oluştur ve yönlendir
    const queryString = queryParams.toString();
    navigate(`/shop?${queryString}`);

    // API isteğini başlat
    dispatch(fetchProducts(Object.fromEntries(queryParams)));
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:mx-48 items-center gap-8 md:gap-5 mt-10 mb-14">
      <p className="font-bold text-primary">Showing all results</p>
      <div className="flex gap-4 items-center">
        <p className="font-bold text-primary">Views:</p>
        <div className="border border-primary">
          <Component
            size="35"
            name="grid"
            className="text-primary-dark p-1 rotate-45 hover:cursor-pointer"
          />
        </div>

        <TableOfContents
          size="35"
          name="list"
          className="text-primary-dark border border-primary p-1 hover:cursor-pointer"
        />
      </div>
      <div className="flex gap-4 items-center">
        {/* Filtre Input */}
        <input
          type="text"
          placeholder="Filter products..."
          className="border p-2 rounded"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />

        {/* Sıralama Select */}
        <div className="w-40">
          <Select
            options={sortOptions}
            value={selectedSort}
            onChange={setSelectedSort}
            className="text-sm"
          />
        </div>

        <button
          className="hover:bg-gray-500 border bg-secondary-blue text-white font-bold py-2 px-8 rounded-md"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default ToolBar;
