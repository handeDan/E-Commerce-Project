import React from "react";
import { useSelector } from "react-redux";

function PlaceOrder({ handleCreateOrder }) {
  const cart = useSelector((state) => state.shoppingCart.cart);
  console.log("Cart state:", cart);
  
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
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-black text-base font-bold mb-5">Order summary</p>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-xs">Total Items:</span>
          <span className="font-semibold text-sm">{cart.length}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-xs">Total Price:</span>
          <span className="font-semibold text-sm">{(subtotal() + (shipmentPrice() === "free" ? 0 : 29.99)).toFixed(
                2
              )} TL</span>
        </div>
        <button
          onClick={handleCreateOrder}
          className="bg-secondary-alert hover:bg-secondary-dark text-white py-2 px-4 rounded-md w-full flex gap-2 items-center justify-center"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
