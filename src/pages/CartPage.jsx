import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions.js";
import { ArrowRight, Rocket, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
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

  const subtotal = () =>
    cart
      .filter((item) => item.checked) // Sadece checked olanları al
      .reduce((acc, item) => acc + item.count * item.product.price, 0);
  const shipmentPrice = () => {
    if (cart.length === 0) return "0,00 TL";
    const totalAmount = cart
      .filter((item) => item.checked)
      .every((item) => item.count * item.product.price >= 150);
    console.log(totalAmount, cart);

    if (totalAmount) {
      return "free";
    } else {
      return "29,99 TL";
    }
  };

  return (
    <div className="bg-secondary-gray flex gap-10 justify-center">
      <div className=" ml-48 py-4 flex-1 w-2/3">
        <p className="text-black text-base">My Cart ({cart.length})</p>
        <p className="text-xs mt-1 mb-4 text-red-700 font-semibold">
          Enjoy free shipping on purchases of 150TL and above!
        </p>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.product.id}>
              <div className="flex gap-2 items-center text-xs p-1 bg-blue-50 border">
                <p>Seller: </p>
                <p>Bandage</p>
                <p className="bg-secondary-light_green text-white p-[4px] border rounded-lg">
                  {" "}
                  {item.product.rating}
                </p>
              </div>
              {(item.count * item.product.price).toFixed(2) >= 150 && (
                <div className="bg-green-50 border">
                  <p className="p-2 font-semibold text-xs text-center">
                    Free Shipping!
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
                        {item.product.sell_count} items sold
                      </p>
                    </div>
                    <p className="text-secondary-alert font-bold">
                      {(item.count * item.product.price).toFixed(2)} TL
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
                    className="ml-4 p-1  flex gap-2 text-xs items-center my-auto max-h-fit text-primary"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 flex bg-gray-100 rounded-lg text-right justify-end items-center">
          <h3 className="text-base font-semibold">
            Subtotal:&nbsp;&nbsp;&nbsp;
          </h3>
          <div className="text-lg font-bold">{subtotal().toFixed(2)} TL</div>
        </div>
      </div>
      <div className="mr-48 mt-20 flex flex-col gap-4 w-1/5">
        <button
          className="text-center bg-secondary-alert hover:bg-secondary-dark text-white py-2 px-4 rounded-md"
          onClick={() => navigate("/shop")}
        >
          Continue shopping
        </button>
        <div className="border rounded-b-xl p-4">
          <p className="text-black text-base font-bold mb-5">Order summary</p>
          <div>
            <div className="flex gap-8 justify-between mb-4">
              <p className="text-xs">Subtotal </p>
              <p className="text-sm font-bold">{subtotal().toFixed(2)} TL</p>
            </div>
            <div className="flex gap-8 justify-between mb-4">
              <p className="text-xs">Shipping </p>
              <p className="text-sm font-bold">29.99 TL</p>
            </div>
            {shipmentPrice() === "free" && (
              <div className="flex gap-8 justify-between mb-4">
                <p className="text-xs">Free Shipping over 150 TL </p>
                <p className="text-sm text-secondary-light_green font-bold">
                  -29.99 TL
                </p>
              </div>
            )}
            <hr />
            <br />
            <div className="flex gap-8 justify-between mb-4">
              <p className="text-sm">Total </p>
              <p className="text-sm text-secondary-alert font-bold">
                {(
                  subtotal() + (shipmentPrice() === "free" ? 0 : 29.99)
                ).toFixed(2)}{" "}
                TL
              </p>
            </div>
            <button className="bg-secondary-alert hover:bg-secondary-dark text-white py-2 px-4 rounded-md w-full flex gap-2 items-center justify-center">
              <p>Checkout</p> <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
