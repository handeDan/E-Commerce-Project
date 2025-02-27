import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "./SignupPage";
import { useDispatch } from "react-redux";
import { setOrders } from "../store/actions/clientActions";
import { useNavigate } from "react-router-dom";

function PanelPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("account-settings");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      toast.error("Please log in to view your orders");
      return;
    }
    api
      .get("/order", { headers: { Authorization: token } })
      .then((res) => {
        dispatch(setOrders(res.data || []));
      })
      .catch((err) => {
        console.error(err);
        dispatch(setOrders([]));
      });
  }, [dispatch, navigate]);


  return (
    <div className="flex h-screen bg-gray-100">
      <div className="mx-48 my-10 flex items-start">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <a to="/account-settings" className={"block p-3 rounded-md" + (selectedPage === "account-settings" ? " bg-blue-500 text-white" : " hover:bg-gray-200")} onClick={() => setSelectedPage("account-settings")}>
              Account Settings
            </a>
          </li>
          <li>
            <a to="/my-orders" className={"block p-3 rounded-md" + (selectedPage === "my-orders" ? " bg-blue-500 text-white" : " hover:bg-gray-200")} onClick={() => setSelectedPage("my-orders")}>
              My Orders
            </a>
          </li>
          <li>
            <a to="/my-addresses" className={"block p-3 rounded-md" + (selectedPage === "my-addresses" ? " bg-blue-500 text-white" : " hover:bg-gray-200")} onClick={() => setSelectedPage("my-addresses")}>
              My Addresses
            </a>
          </li>
          <li>
            <a to="/my-cards" className={"block p-3 rounded-md" + (selectedPage === "my-cards" ? " bg-blue-500 text-white" : " hover:bg-gray-200")} onClick={() => setSelectedPage("my-cards")}>
              My Cards
            </a>
          </li>
          <li>
            <button
              className="block w-full text-left p-3 bg-red-500 text-white rounded-md"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
                toast.success("Logged out successfully");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

{selectedPage === "account-settings" && (
      <aside className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">My Orders</h1>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <p>Your profile.</p>
        </div>
      </aside>
 )}
 {(selectedPage === "my-orders") && (
  <aside className="flex-1 p-6">
  <h1 className="text-2xl font-bold mb-4">My Orders</h1>
  <div className="bg-white p-4 shadow-md rounded-lg">
    <p>Your order history will be displayed here.</p>
  </div>
</aside>
 )
      
}
      </div>
    </div>
  );
}

export default PanelPage;
