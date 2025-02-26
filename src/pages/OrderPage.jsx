import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "../components/CartPage/PlaceOrder";
import { CreditCard, MapPin, Trash2, UserRound } from "lucide-react";
import ModalAddress from "../components/CartPage/ModalAddress";
import ModalCard from "../components/CartPage/ModalCard";
import { api } from "./SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { setAddresses, setCards } from "../store/actions/clientActions.js";

const OrderPage = () => {  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addresses = useSelector((state) => state.client.addresses || []);
  console.log("Addresses from store:", addresses);
  const cards = useSelector((state) => state.client.cards || []);
  
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [activeTab, setActiveTab] = useState("addresses");
  const [modalTitle, setModalTitle] = useState("Create New Address");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedAddressEditing, setSelectedAddressEditing] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardEditing, setSelectedCardEditing] = useState(null);

  const toggleCardModal = (isNew = true, card = null) => {
    console.log("Modal açılmadan önce:", isCardModalOpen);
  
    if (isNew) {
      setModalTitle("Add New Card");
      setSelectedCardEditing(null);
    } else {
      setModalTitle("Update Card");
      setSelectedCardEditing(card);
    }
  
    setIsCardModalOpen((prev) => {
      console.log("Yeni Modal durumu:", !prev);
      return !prev;
    });
  };
  

const handleSelectCard = (id) => {
  setSelectedCard(id);
};

const handleAddCard = (newCardData, type) => {
  if (type === "update") {
    handleUpdateCard(newCardData);
    return;
  }
  const token = localStorage.getItem("token");
  api
    .post("/user/card", newCardData, {
      headers: { Authorization: token },
    })
    .then((res) => {
      dispatch(setCards([...cards, res.data]));
      toggleCardModal();
    })
    .catch((err) => console.error("Error adding card:", err));
};

const handleUpdateCard = (updatedCardData) => {
  const token = localStorage.getItem("token");
  const cardToUpdate = { ...updatedCardData, id: selectedCardEditing.id };
  api
    .put("/user/card", cardToUpdate, {
      headers: { Authorization: token },
    })
    .then((res) => {
      const updatedCards = cards.map((card) =>
        card.id === selectedCardEditing.id ? res.data : card
      );
      dispatch(setCards(updatedCards));
      setSelectedCardEditing(null);
      toggleCardModal();
    })
    .catch((err) => console.error("Error updating card:", err));
};

const handleDeleteCard = (cardId) => {
  const token = localStorage.getItem("token");
  api
    .delete(`/user/card/${cardId}`, {
      headers: { Authorization: token },
    })
    .then(() => {
      dispatch(setCards(cards.filter((card) => card.id !== cardId)));
    })
    .catch((err) => console.error("Error deleting card:", err));
};

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }

  // Fetch cards
  api
    .get("/user/card", { headers: { Authorization: token } })
    .then((res) => {
      if (res.data) {
        dispatch(setCards(res.data));
      } else {
        dispatch(setCards([]));
      }
    })
    .catch((err) => {
      console.error("Error fetching cards:", err);
      dispatch(setCards([]));
    });
}, [dispatch]);

{/* Payment Section */}
<div className={`${activeTab === "payment" ? "" : "hidden"}`}>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Payment Methods</h2>
    <button
      onClick={() => toggleCardModal(true)}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
    >
      <CreditCard className="w-4 h-4 mr-2" />
      Add New Card
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {cards.map((card) => (
      <div
        key={card.id}
        className={`p-4 border rounded-lg ${
          selectedCard === card.id ? "border-primary-500" : "border-gray-200"
        }`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-primary-600" />
            <span className="font-medium">{card.name_on_card}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleCardModal(false, card)}
              className="text-gray-500 hover:text-primary-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteCard(card.id)}
              className="text-gray-500 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-gray-600">
          <p>**** **** **** {card.card_no.slice(-4)}</p>
          <p>
            Expires: {card.expire_month}/{card.expire_year}
          </p>
        </div>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="selected_card"
              checked={selectedCard === card.id}
              onChange={() => handleSelectCard(card.id)}
              className="form-radio text-primary-600"
            />
            <span className="ml-2">Use this card</span>
          </label>
        </div>
      </div>
    ))}
  </div>
</div>

 
  const toggleModal = (isNew = true, address = null) => {
    if (isNew) {
      setModalTitle("Create New Address");
      setSelectedAddressEditing(null);
    } else {
      setModalTitle("Update Address");
      setSelectedAddressEditing(address);
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
    const addressToUpdate = { ...updatedAddressData, id: selectedAddressEditing.id };
    api
      .put(
        "/user/address",
        addressToUpdate,
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        // Update local state first
        const updatedAddress = res.data;
        const updatedAddresses = addresses.map((address) =>
          address.id === selectedAddressEditing.id ? updatedAddress : address
        );
        dispatch(setAddresses(updatedAddresses));
        
        // Fetch fresh data from server to ensure sync
        api
          .get("/user/address", { headers: { Authorization: token } })
          .then((response) => {
            if (response.data) {
              dispatch(setAddresses(response.data));
            }
          })
          .catch((err) => console.error("Error fetching updated addresses:", err));

        setSelectedAddressEditing(null);
        toggleModal();
      })
      .catch((err) => console.error("Error updating address:", err));
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
         <h2 className="text-xl font-bold mb-4">Payment methods</h2>
         {cards.length > 0 ? (
           cards.map((card, index) => (
             <div
               key={index}
               className={`p-4 border rounded mb-2 ${
                 selectedCard === card.id ? "border-orange-500" : ""
               }`}
               onClick={() => handleSelectCard(card.id)}
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
                   <p className="font-semibold">{card.title}</p>
                 </div>
                 <div className="flex justify-end gap-5">
                   <a
                     href="#"
                     className="underline font-semibold cursor-pointer"
                     onClick={() => toggleCardModal(false, card)}
                   >
                     Edit
                   </a>
                   <Trash2
                     className="cursor-pointer"
                     onClick={() => handleDeleteCard(card.id)}
                   />
                 </div>
               </div>

               <p className="flex gap-2 items-center text-secondary-alert my-2 text-sm font-semibold">
                 <UserRound size={14} /> {card.name} {card.surname}
               </p>
               <p className="text-sm">{card.phone}</p>
               <p className="font-medium my-2 text-sm">
                 {card.city}, {card.district}, {card.neighborhood}
               </p>
               <p className="font-medium text-sm">{card.address}</p>
             </div>
           ))
         ) : (
           <p className="text-gray-500">No saved cards found.</p>
         )}
         <button
           className="mt-2 text-primary-dark font-bold text-sm flex items-center gap-2 rounded-md border w-full py-10 justify-center bg-secondary-gray hover:bg-white"
           onClick={() => toggleCardModal()}
         >
           <span className="text-secondary-alert font-bold text-2xl">+</span>{" "}
           Add new card
         </button>
        {/* Card Modal */}
{isCardModalOpen && (
  <ModalCard
    toggleModal={toggleCardModal}
    handleAddCard={handleAddCard}
    modalTitle={modalTitle}
    selectedCard={selectedCardEditing}
  />
)}
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
