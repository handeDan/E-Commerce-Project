import React from "react";
import { useSelector } from "react-redux";

function SideBar({ selectedPage, setSelectedPage }) {
  const user = useSelector((state) => {
    return state.client.user;
  });

  return (
    <div>
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-semibold mb-6">{user?.name}</h2>
        <ul className="space-y-3">
          <li>
            <a
              to="/my-profile"
              className={
                "block p-3 rounded-md hover:cursor-pointer" +
                (selectedPage === "my-profile"
                  ? " bg-primary-dark text-white"
                  : " hover:bg-gray-100")
              }
              onClick={() => setSelectedPage("my-profile")}
            >
              My Profile
            </a>
          </li>
          <li>
            <a
              to="/my-orders"
              className={
                "block p-3 rounded-md hover:cursor-pointer" +
                (selectedPage === "my-orders"
                  ? " bg-primary-dark text-white"
                  : " hover:bg-gray-100")
              }
              onClick={() => setSelectedPage("my-orders")}
            >
              My Orders
            </a>
          </li>
          <li>
            <a
              to="/my-addresses"
              className={
                "block p-3 rounded-md hover:cursor-pointer" +
                (selectedPage === "my-addresses"
                  ? " bg-primary-dark text-white"
                  : " hover:bg-gray-100")
              }
              onClick={() => setSelectedPage("my-addresses")}
            >
              My Addresses
            </a>
          </li>
          <li>
            <button
              className="block w-full text-left p-3 bg-red-50 rounded-md hover:cursor-pointer hover:bg-gray-100"
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
    </div>
  );
}

export default SideBar;
