import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OrderSummary from "../components/CartPage/OrderSummary";
import PlaceOrder from "../components/CartPage/PlaceOrder";
import { CreditCard, MapPin } from "lucide-react";
import ModalAddress from "../components/CartPage/ModalAddress";

const OrderPage = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const [activeTab, setActiveTab] = useState("addresses");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get("/user/address", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (res.data && Array.isArray(res.data.addresses)) {
          setAddresses(res.data.addresses);
        } else {
          setAddresses([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setAddresses([]);
      });
  }, [navigate]);

  const handleSelectAddress = (id) => {
    setSelectedAddress(id);
  };

  const handleAddAddress = () => {
    const token = localStorage.getItem("token");
    axios
      .post("/user/address", newAddress, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAddresses([...addresses, res.data]);
        setShowForm(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 min-h-screen bg-secondary-gray flex gap-10 justify-center pt-10">
      <div className="ml-48 py-4 flex-1 w-2/3">
        <div className="flex mb-4 shadow-md shadow-secondary-alert">
          <button
            className={`px-4 py-4 w-full font-semibold flex gap-2 justify-center ${
              activeTab === "addresses"
                ? "bg-secondary-alert text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("addresses")}
          >
            <MapPin />
            Address
          </button>
          <button
            className={`px-4 py-4 w-full font-semibold flex gap-2 justify-center ${
              activeTab === "payment"
                ? "bg-secondary-alert text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("payment")}
          >
            <CreditCard />
            Payment
          </button>
        </div>

        {activeTab === "addresses" && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Delivery address</h2>
            {addresses.length > 0 ? (
              addresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`p-2 border rounded mb-2 ${
                    selectedAddress === addr.id ? "border-orange-500" : ""
                  }`}
                  onClick={() => handleSelectAddress(addr.id)}
                >
                  <p className="font-bold">{addr.title}</p>
                  <p>
                    {addr.name} {addr.surname}
                  </p>
                  <p>{addr.phone}</p>
                  <p>
                    {addr.city}, {addr.district}, {addr.neighborhood}
                  </p>
                  <p>{addr.address}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No saved addresses found.</p>
            )}
            <button
              className="mt-2 text-primary-dark font-bold text-lg flex items-center gap-2 rounded-md border w-1/2 py-10 px-24 bg-secondary-gray hover:bg-white"
              onClick={toggleModal}
            >
              <span className="text-secondary-alert font-bold text-4xl">+</span>{" "}
              Add address
            </button>
            {isModalOpen && <ModalAddress />}
          </div>
        )}

        {activeTab === "payment" && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            <p>Ödeme seçenekleri buraya gelecek.</p>
          </div>
        )}
      </div>
      <div className="mr-48 mt-20 flex flex-col gap-4 w-1/5">
        <PlaceOrder />
      </div>
    </div>
  );
};

export default OrderPage;
