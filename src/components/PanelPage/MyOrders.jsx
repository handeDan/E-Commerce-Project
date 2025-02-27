import React from "react";
import { useSelector } from "react-redux";

function MyOrders() {
  const orders = useSelector((state) => {
    console.log(state.client.orders);
    return state.client.orders;
  });

  return (
    <div>
      <aside className="flex-1 p-6 pt-2">
        <h1 className="text-black text-base mb-4 pl-4 md:pl-5">My Orders</h1>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <aside className="p-4 md:p-5">
            <div className="flex flex-col gap-10 mb-4">
              <div className="w-full flex flex-col gap-4 text-nowrap">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white p-4 shadow-md rounded-lg border border-orange-500"
                  >
                    <h2 className="text-lg font-bold text-gray-800">
                      Order #{order.id} -{" "}
                      {new Date(order.order_date).toLocaleDateString()}
                    </h2>
                    <p className="text-gray-600">
                      Total Price: ${order.price.toFixed(2)}
                    </p>

                    {/* Ürün Kartları */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {order.products.map((product) => (
                        <div
                          key={product.id}
                          className="flex bg-gray-100 p-3 rounded-lg shadow-sm"
                        >
                          <img
                            src={product.images[0]?.url}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-md"
                          />
                          <div className="ml-4">
                            <h3 className="text-md font-semibold">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              Price: ${product.price}
                            </p>
                            <p className="text-sm text-gray-500">
                              Count: {product.count}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}{" "}
              </div>
            </div>
          </aside>
        </div>
      </aside>
    </div>
  );
}

export default MyOrders;
