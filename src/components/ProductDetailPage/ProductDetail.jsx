import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";

function ProductDetail({ product }) {
  const navigate = useNavigate();

  if (!product) return <p>Ürün bulunamadı</p>;
  return (
    <div className="bg-secondary-gray">
      <div className="mx-48 flex max-md:mx-5 max-md:flex-col gap-12 py-5">
        <div className="flex flex-col gap-5 w-1/2 ">
          <div
            style={{
              backgroundPosition: "center",
              backgroundImage: `url(${product.images[0].url})`,
            }}
            className="h-96 bg-cover bg-top flex justify-between items-center max-md:h-unset max-md:w-96"
          >
            <button className=" bg-black/50 text-white p-3 rounded-full text-3xl">
              &lt;
            </button>
            <button className=" bg-black/50 text-white p-3 rounded-full text-3xl">
              &gt;
            </button>
          </div>
          <div className="flex gap-3">
            {product.images.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundPosition: "center",
                  backgroundImage: `url(${image.url})`,
                }}
                alt={product.name}
                className="w-1/2 h-[100px] image bg-cover bg-top"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-1/2 max-md:w-full max-md:px-5">
          <p className="text-xl text-primary-dark mb-4">{product.name}</p>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500 fill-yellow-500" />
            <Star className="text-yellow-500" />
            <p className="text-sm font-bold text-primary ml-3">
              {product.rating}
            </p>
          </div>
          <p className="text-2xl text-primary-dark font-bold mb-2">
            {product.price} ₺
          </p>
          <p className="text-sm font-bold text-primary mb-8">
            Availability :{" "}
            <span className="text-secondary-blue font-bold"> In Stock</span>
          </p>
          <p className="text-primary mb-5 text-sm">{product.description}</p>
          <hr className="border-2" />
          <div className="flex justify-start gap-3 mt-5 mb-10 hover:cursor-pointer">
            <div className="border bg-secondary-blue w-7 h-7 rounded-full"></div>
            <div className="border bg-secondary-green w-7 h-7 rounded-full"></div>
            <div className="border bg-secondary-alert w-7 h-7 rounded-full"></div>
            <div className="border bg-secondary-dark w-7 h-7 rounded-full"></div>
          </div>
          <div>
            <div className="flex gap-5">
              <button
                className="hover:bg-gray-500 border bg-secondary-blue text-white font-bold py-2 px-8 rounded-md"
                onClick={() => navigate("/cart")}
              >
                Add to Cart
              </button>{" "}
              <div className="flex gap-3">
                <Heart className="border border-primary rounded-full p-2 h-9 w-9 hover:cursor-pointer" />
                <ShoppingCart className="border border-primary rounded-full p-2 h-9 w-9 hover:cursor-pointer" />
                <Eye className="border border-primary rounded-full p-2 h-9 w-9 hover:cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
