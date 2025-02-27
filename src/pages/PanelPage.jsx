import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "./SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../store/actions/clientActions";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/PanelPage/SideBar";
import MyProfile from "../components/PanelPage/MyProfile";
import MyOrders from "../components/PanelPage/MyOrders";

function PanelPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("my-profile");

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
    <div className="flex h-full bg-gray-100">
      <div className="mx-48 my-10 flex items-start">
        <SideBar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {selectedPage === "my-profile" && <MyProfile />}
        {selectedPage === "my-orders" && <MyOrders />}
      </div>
    </div>
  );
}

export default PanelPage;
