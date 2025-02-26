import { ArrowRight } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.shoppingCart.cart);

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
    <div>
      <button
        className="bg-secondary-alert hover:bg-secondary-dark text-white py-2 px-4 rounded-t-md w-full flex gap-2 items-center justify-center"
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
              {(subtotal() + (shipmentPrice() === "free" ? 0 : 29.99)).toFixed(
                2
              )}{" "}
              TL
            </p>
          </div>
          <button className="bg-secondary-alert hover:bg-secondary-dark text-white py-2 px-4 rounded-md w-full flex gap-2 items-center justify-center">
            <p onClick={() => navigate("/order")}>Checkout</p>{" "}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
