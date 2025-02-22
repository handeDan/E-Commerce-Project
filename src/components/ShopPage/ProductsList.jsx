import React, { useEffect, useState } from "react";
import ProductCard from "../HomePage/ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/thunkActions";

const LIMIT = 8;

function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [page, setPage] = useState(Number(params.get("page")) || 1);

  useEffect(() => {
    const offset = (page - 1) * LIMIT;
    dispatch(fetchProducts({ limit: LIMIT, offset }));
  }, [dispatch, page]);

  const products = useSelector(
    (state) => state.product.productList?.products || []
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    setPage(newPage);
    params.set("page", newPage);
    navigate(`?${params.toString()}`);
  };

  // Calculate the page range to display dynamically
  const pageNumbers = [];
  for (let i = Math.max(1, page - 1); i <= page + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {!products.length ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="my-10 flex flex-wrap justify-center mx-48 max-md:mx-5 gap-4 hover:cursor-pointer">
            {products.map((item, key) => (
              <ProductCard
                key={key}
                item={{ ...item, image: item.images[0].url }}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-16 mb-20 md:mb-10">
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-6 border rounded-l-md border-primary text-secondary-blue font-bold hover:bg-gray-200"
              disabled={page === 1}
              style={{
                opacity: page === 1 ? 0.5 : 1,
                color: page === 1 ? "text-gray" : "text-secondary-blue",
              }}
            >
              First
            </button>
            {pageNumbers.map((p) => (
              <button
                key={p}
                onClick={() => handlePageChange(p)}
                className={`px-4 py-6 border text-secondary-blue font-bold border-primary ${
                  page === p
                    ? "bg-secondary-blue text-white"
                    : "hover:bg-secondary-blue hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-6 border rounded-r-md border-primary text-secondary-blue font-bold hover:bg-gray-200"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsList;
