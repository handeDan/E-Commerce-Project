import React, { useEffect } from "react";
import ProductCard from "../HomePage/ProductCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/thunkActions";

function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    const queryObj = Object.fromEntries(params.entries());
    dispatch(fetchProducts(queryObj));
  }, [location.search]); // URL değiştiğinde yeniden yükle

  const products = useSelector((state) => state.product.productList.products);

  useEffect(() => {
    dispatch(fetchProducts);
  }, []);

  const products = useSelector((state) => {
    return state.product.productList?.products;
  });

  return (
    <div>
      {!products ? ( // Yükleniyor durumunda spinner göster
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div
            className="my-10 flex flex-wrap justify-center mx-48 max-md:mx-5 gap-4 hover:cursor-pointer"
            onClick={() => navigate("/product")}
          >
            {(products || [])
              .map((i) => ({ ...i, image: i.images[0].url }))
              .map((item, key) => (
                <ProductCard key={key} item={item} />
              ))}
          </div>
          <div className="flex items-center justify-center mt-16 mb-20 md:mb-10">
            <button className="px-4 py-6 border rounded-l-md text-primary border-primary bg-gray-200 font-bold">
              First
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className="px-4 py-6 border text-secondary-blue font-bold border-primary hover:bg-secondary-blue hover:text-white"
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-6 border rounded-r-md border-primary text-secondary-blue font-bold hover:bg-gray-200">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsList;
