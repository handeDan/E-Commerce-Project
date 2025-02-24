import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions.js";
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
    dispatch(setCart(updatedCart));
  };

  // Ürünü sepetten kaldırma fonksiyonu
  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(setCart(updatedCart));
  };

  // Ürün seçimini değiştirme
  const toggleSelect = (productId) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId ? { ...item, checked: !item.checked } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(setCart(updatedCart));
  };

  // Seçili ürünlerin toplam fiyatını hesapla
  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.count * item.product.price, 0);

  console.log(cart);

  return (
    <div className="container bg-secondary-gray">
      <div className=" ml-48 max-w-3xl py-4">
        <p className="text-black text-base">Sepetim ({cart.length} Ürün)</p>
        <p className="text-xs mt-1 mb-4 text-red-700 font-semibold">
          150 ₺ ve üzeri ürünlerde kargo bedava!
        </p>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.product.id}>
              <div className="flex gap-2 items-center text-xs p-1 bg-blue-50 border">
                <p>Satıcı: </p>
                <p>Bandage</p>
                <p className="bg-secondary-light_green text-white p-[4px] border rounded-lg">
                  {" "}
                  {item.product.rating}
                </p>
              </div>
              {(item.count * item.product.price).toFixed(2) >= 150 && (
                <div className="bg-green-50 border">
                  <p className="p-2 font-semibold text-xs text-center">
                    Kargo Bedava!
                  </p>
                </div>
              )}
              <div
                key={item.product.id}
                className="flex flex-col p-4 bg-white shadow-md rounded-b-lg"
              >
                <div className="flex">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleSelect(item.product.id)}
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
                      {(item.count * item.product.price).toFixed(2)} ₺
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateCount(item.product.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                      disabled={item.count === 1} // Eğer 1 ise buton disabled olacak
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.count}</span>
                    <button
                      onClick={() => updateCount(item.product.id, 1)}
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
        <div className="mt-6 p-4 flex bg-gray-100 rounded-lg text-right justify-end items-center">
          <h3 className="text-base font-semibold">
            Total Price:&nbsp;&nbsp;&nbsp;
          </h3>
          <div className="text-lg font-bold text-secondary-alert">
            {cart
              .filter((item) => item.checked) // Sadece checked olanları al
              .reduce((acc, item) => acc + item.count * item.product.price, 0)
              .toFixed(2)}{" "}
            ₺
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
