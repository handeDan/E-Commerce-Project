import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  REMOVE_FROM_CART,
  SET_CART,
} from "../store/actions/shoppingCartActions.js";
import { Rocket, Trash2 } from "lucide-react";

const CartPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  // Ürün miktarını artırma/azaltma fonksiyonu
  const updateCount = (productId, delta) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId
        ? { ...item, count: Math.max(1, item.count + delta) }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(SET_CART(updatedCart));
  };

  // Ürünü sepetten kaldırma fonksiyonu
  const handleRemove = (productId) => {
    dispatch(REMOVE_FROM_CART(productId));
  };

  // Ürün seçimini değiştirme
  const toggleSelect = (productId) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId ? { ...item, checked: !item.checked } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(SET_CART(updatedCart));
  };

  // Seçili ürünlerin toplam fiyatını hesapla
  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.count * item.product.price, 0);

  return (
    <div className="container bg-secondary-gray">
      <div className=" ml-48 max-w-3xl py-4">
        <p className="text-black text-base mb-4">
          Sepetim ({cart.length} Ürün)
        </p>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div>
              <div className="flex gap-2 items-center text-xs p-1 bg-blue-50 border">
                <p>Satıcı: </p>
                <p>Bandage</p>
                <p className="bg-secondary-light_green text-white p-[4px] border rounded-lg">
                  {" "}
                  {item.product.rating}
                </p>
              </div>
              <div className="bg-green-50 border">
                <p className="p-2 font-semibold text-xs text-center">
                  Kargo Bedava!
                </p>
              </div>
              <div
                key={item.product.id}
                className="flex flex-col p-4 bg-white shadow-md rounded-b-lg"
              >
                <div className="flex">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                      const updatedCart = cart.map((cartItem) =>
                        cartItem.product.id === item.product.id
                          ? { ...cartItem, checked: !cartItem.checked }
                          : cartItem
                      );
                      dispatch(SET_CART(updatedCart));
                    }}
                    className="mr-4"
                  />
                  <img
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 flex flex-row justify-between items-center ml-5 mr-10">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-base">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-red-700 font-bold bg-red-50 p-1 max-w-fit flex gap-1">
                        <Rocket size={14} />
                        {item.product.sell_count} tanesi satıldı
                      </p>
                    </div>
                    <p className="text-secondary-alert font-bold">
                      {item.product.price} ₺
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCountChange(item.product.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.count}</span>
                    <button
                      onClick={() => handleCountChange(item.product.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.product.id)}
                    className="ml-4 p-1 bg-secondary-danger text-white rounded flex gap-2 text-xs items-center my-auto max-h-fit"
                  >
                    <Trash2 size={14} /> Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right">
          <h3 className="text-lg font-bold">
            Total:
            {cart
              .reduce((acc, item) => acc + item.count * item.product.price, 0)
              .toFixed(2)}{" "}
            ₺
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
