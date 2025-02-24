import { useSelector } from "react-redux";

function CartDropdown() {
  const cart = useSelector((state) => state.shoppingCart.cart);

  return (
    <div className="absolute left-0 top-full bg-white shadow-lg z-50 p-5 w-full md:w-auto min-w-[180px] md:max-w-[500px] rounded-md">
      {cart.length === 0 ? (
        <div>
          {" "}
          <p className="text-black font-bold">Sepetim </p>
          <p>Sepetiniz boş</p>
        </div>
      ) : (
        cart.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <img
              src={item.product.images[0].url}
              alt={item.product.name}
              className="w-10 h-10"
            />
            <div>
              <p className="text-sm">{item.product.name}</p>
              <p className="text-xs">
                {item.count} x {item.product.price} ₺
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartDropdown;
