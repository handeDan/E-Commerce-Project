import React from "react";
import { useSelector } from "react-redux";

function PlaceOrder({ handleCreateOrder }) {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const checkedItems = cart.filter(item => item.checked);

  const subtotal = () =>
    checkedItems.reduce((acc, item) => acc + item.count * item.product.price, 0);

  const shipmentPrice = () => {
    if (checkedItems.length === 0) return 0;
    const totalAmount = subtotal();
    return totalAmount >= 150 ? 0 : 29.99;
  };

  const totalPrice = subtotal() + shipmentPrice();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-black text-base font-bold mb-5">Order summary</p>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-xs">Subtotal:</span>
          <span className="font-semibold text-sm">₺{subtotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-xs">Shipping:</span>
          <span className="font-semibold text-sm">
            {shipmentPrice() === 0 ? "Free" : `₺${shipmentPrice().toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t">
          <span className="text-gray-800 text-sm font-medium">Total Price:</span>
          <span className="font-bold text-sm">₺{totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCreateOrder}
          disabled={checkedItems.length === 0}
          className={`w-full py-2 px-4 rounded-md flex gap-2 items-center justify-center ${
            checkedItems.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-secondary-alert hover:bg-secondary-dark text-white"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
