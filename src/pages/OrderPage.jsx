import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OrderSummary from "../components/CartPage/OrderSummary";

const OrderPage = ({ subtotal, cart, shipmentPrice }) => {
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
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("addresses");

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
    <div className="p-6 bg-gray-100 min-h-screen flex justify-between">
      <div className="ml-48 py-4 flex-1 w-2/3">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "addresses"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("addresses")}
          >
            Adres Bilgileri
          </button>
          <button
            className={`px-4 py-2 ml-2 ${
              activeTab === "payment" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab("payment")}
          >
            Ödeme Seçenekleri
          </button>
        </div>

        {activeTab === "addresses" && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Adres Bilgileri</h2>
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
              <p className="text-gray-500">Kayıtlı adres bulunamadı.</p>
            )}
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => setShowForm(true)}
            >
              Yeni Adres Ekle
            </button>

            {showForm && (
              <div className="mt-4 bg-white p-4 rounded shadow">
                <h3 className="font-bold mb-2">Yeni Adres</h3>
                <input
                  type="text"
                  placeholder="Adres Başlığı"
                  className="border p-2 w-full mb-2"
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, title: e.target.value })
                  }
                />
                <button
                  className="mt-2 bg-green-500 text-white py-1 px-3 rounded"
                  onClick={handleAddAddress}
                >
                  Kaydet
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "payment" && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Ödeme Seçenekleri</h2>
            <p>Ödeme seçenekleri buraya gelecek.</p>
          </div>
        )}
      </div>
      <OrderSummary />
    </div>
  );
};

export default OrderPage;
