import React, { useEffect, useState } from "react";
import ProductCard from "../HomePage/ProductCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchProducts } from "../../store/actions/thunkActions";
import { setDetailProduct } from "../../store/actions/productActions";
import ProductDetail from "../ProductDetailPage/ProductDetail";
import ProductDetailPage from "../../pages/ProductDetailPage";

const LIMIT = 8;

function ProductsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const usePrm = useParams();

  const params = new URLSearchParams(location.search);
  const products = useSelector(
    (state) => state.product.productList?.products || []
  );
  const selectedProduct = useSelector((state) => state.product.detailProduct);

  const [page, setPage] = useState(Number(params.get("page")) || 1);

  useEffect(() => {
    return () => {
      // Component unmount'da detailProduct'i temizle
      dispatch(setDetailProduct(null));
    };
  }, [dispatch]);

  useEffect(() => {
    // Sayfa değiştiğinde offset'i yeniden hesapla
    const offset = (page - 1) * LIMIT;
    dispatch(setDetailProduct(null));
    dispatch(fetchProducts({ limit: LIMIT, offset }, usePrm));
  }, [dispatch, page, location.pathname]);

  useEffect(() => {
    // URL'deki "item:" kısmını kontrol et
    const urlParts = location.pathname.split("/");
    const itemPart = urlParts.find((part) => part.includes("item:"));

    if (itemPart) {
      const productId = itemPart.split(":")[1];
      // ID'yi kullanarak ürünü çağır
      dispatch(fetchProduct(productId));
    }
  }, [location.pathname, dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    // Offset'i dinamik olarak hesapla
    const offset = (newPage - 1) * LIMIT;
    setPage(newPage);

    // URL parametrelerini güncelle
    params.set("limit", LIMIT);
    params.set("offset", offset); // Offset parametresi ekleniyor

    navigate(`?${params.toString()}`);
  };

  // Calculate the page range to display dynamically
  const pageNumbers = [];
  for (let i = Math.max(1, page - 1); i <= page + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {selectedProduct && <ProductDetailPage product={selectedProduct} />}
      {!products.length ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        !selectedProduct && (
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
        )
      )}
    </div>
  );
}

export default ProductsList;
