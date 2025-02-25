import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "../components/CartPage/PlaceOrder";
import { CreditCard, MapPin, Trash2, UserRound } from "lucide-react";
import ModalAddress from "../components/CartPage/ModalAddress";
import { api } from "./SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { setAddresses } from "../store/actions/clientActions.js";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addresses = useSelector((state) => state.client.addresses || []);
  console.log("Addresses from store:", addresses);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [activeTab, setActiveTab] = useState("addresses");
  const [modalTitle, setModalTitle] = useState("Create New Address");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddressEditing, setSelectedAddressEditing] = useState(null);
  const toggleModal = (isNew = true, address = null) => {
    console.log("toggleModal", isNew, address);

    setSelectedAddressEditing(null);
    if (isNew) {
      setModalTitle("Create New Address");
    } else {
      setModalTitle("Update Address");
      if (address) {
        setSelectedAddressEditing(address);
      }
    }
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    api
      .get("/user/address", { headers: { Authorization: token } })
      .then((res) => {
        console.log("Fetched Addresses:", res.data);
        if (res.data) {
          dispatch(setAddresses(res.data)); // Redux store'a adresleri ekle
        } else {
          dispatch(setAddresses([]));
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch(setAddresses([]));
      });
  }, [dispatch]);

  const handleSelectAddress = (id) => {
    setSelectedAddress(id);
  };

  const handleAddAddress = (newAddressData, type) => {
    if (type === "update") {
      handleUpdateAddress(newAddressData);
      return;
    }
    const token = localStorage.getItem("token");
    api
      .post("/user/address", newAddressData, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch(setAddresses([...addresses, res.data[0]])); // Yeni adresi Redux store'a ekle
        toggleModal();
      })
      .catch((err) => console.error(err));
  };
  const handleUpdateAddress = (updatedAddressData) => {
    const token = localStorage.getItem("token");
    api
      .put(
        "/user/address",
        { ...updatedAddressData, id: selectedAddressEditing.id },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        dispatch(
          setAddresses(
            addresses.map((address) =>
              address.id === updatedAddressData.id ? res.data : address
            )
          )
        ); // Adres güncellemesini Redux store'a kaydet
        toggleModal();
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteAddress = (addressId) => {
    const token = localStorage.getItem("token");
    api
      .delete("/user/address/" + addressId, {
        headers: { Authorization: token },
      })
      .then((res) => {
        dispatch(
          setAddresses(addresses.filter((address) => address.id !== addressId))
        ); // Adres güncellemesini Redux store'a kaydet
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
              addresses.map((addr, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded mb-2 ${
                    selectedAddress === addr.id ? "border-orange-500" : ""
                  }`}
                  onClick={() => handleSelectAddress(addr.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <p className="font-semibold">{addr.title}</p>
                    </div>
                    <div className="flex justify-end gap-5">
                      <a
                        href="#"
                        className="underline font-semibold cursor-pointer"
                        onClick={() => toggleModal(false, addr)}
                      >
                        Edit
                      </a>
                      <Trash2
                        className="cursor-pointer"
                        onClick={() => handleDeleteAddress(addr.id)}
                      />
                    </div>
                  </div>

                  <p className="flex gap-2 items-center text-secondary-alert my-2 text-sm font-semibold">
                    <UserRound size={14} /> {addr.name} {addr.surname}
                  </p>
                  <p className="text-sm">{addr.phone}</p>
                  <p className="font-medium my-2 text-sm">
                    {addr.city}, {addr.district}, {addr.neighborhood}
                  </p>
                  <p className="font-medium text-sm">{addr.address}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No saved addresses found.</p>
            )}
            <button
              className="mt-2 text-primary-dark font-bold text-sm flex items-center gap-2 rounded-md border w-full py-10 justify-center bg-secondary-gray hover:bg-white"
              onClick={() => toggleModal()}
            >
              <span className="text-secondary-alert font-bold text-2xl">+</span>{" "}
              Add new address
            </button>
            {isModalOpen && (
              <ModalAddress
                toggleModal={toggleModal}
                handleAddAddress={handleAddAddress}
                modalTitle={modalTitle}
                selectedAddress={selectedAddressEditing}
              />
            )}
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
