import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "../components/CartPage/PlaceOrder";
import { CreditCard, MapPin, Trash2, UserRound } from "lucide-react";
import ModalAddress from "../components/CartPage/ModalAddress";
import ModalCard from "../components/CartPage/ModalCard";
import { api } from "./SignupPage";
import { useDispatch, useSelector } from "react-redux";
import { setAddresses, setCards, addCard, updateCard, deleteCard } from "../store/actions/clientActions.js";
import { clearCart } from "../store/actions/cartActions.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS dosyası eklendi

const OrderPage = () => {  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addresses = useSelector((state) => state.client.addresses || []);
  const cards = useSelector((state) => state.client.cards || []);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const checkedItems = cart.filter(item => item.checked);

  // Calculate subtotal first
  const subtotal = checkedItems.reduce(
    (acc, item) => acc + item.count * item.product.price, 
    0
  );
  
  // Then calculate shipping cost
  const shippingCost = checkedItems.length > 0 && subtotal < 150 ? 29.99 : 0;
  
  // Finally calculate total price
  const totalPrice = subtotal + shippingCost;

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [activeTab, setActiveTab] = useState("addresses");
  const [modalTitle, setModalTitle] = useState("Create New Address");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedAddressEditing, setSelectedAddressEditing] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardEditing, setSelectedCardEditing] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

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
      dispatch(addCard(res.data));
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
      dispatch(updateCard(updatedCardData));
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
      dispatch(deleteCard(cardId));
    })
    .catch((err) => console.error("Error deleting card:", err));
};

const handlePaymentMethodChange = (method) => {
  setSelectedPaymentMethod(method);
  // If card payment is selected and there are cards, select the first card
  if (method === "card" && cards.length > 0) {
    handleSelectCard(cards[0].id);
  } else {
    // If cash payment is selected, clear selected card
    setSelectedCard(null);
  }
};

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    toast.error("Please log in to view your orders");
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
      toast.error("Please log in to continue");
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

  const handleCreateOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address");
      return;
    }

    if (selectedPaymentMethod === "card" && !selectedCard) {
      toast.error("Please select a payment card");
      return;
    }

    if (checkedItems.length === 0) {
      toast.error("Please select items to order");
      return;
    }

    const selectedCardData = cards.find(card => card.id === selectedCard);

    const orderData = {
      address_id: selectedAddress,
      order_date: new Date().toISOString(),
      price: totalPrice,
      products: checkedItems.map(item => ({
        product_id: item.product.id,
        count: item.count,
        detail: `${item.product.color} - ${item.product.size}`
      }))
    };

    // Add card details if paying by card
    if (selectedPaymentMethod === "card" && selectedCardData) {
      orderData.card_no = selectedCardData.card_no;
      orderData.card_name = selectedCardData.name_on_card;
      orderData.card_expire_month = selectedCardData.expire_month;
      orderData.card_expire_year = selectedCardData.expire_year;
      orderData.card_ccv = selectedCardData.ccv;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await api.post("/order", orderData, {
        headers: { Authorization: token }
      });

      if (response.status === 200 || response.status === 201) {
        // Clear the cart
        dispatch(clearCart());
        
        // Show success message using toast
        toast.success("Order placed successfully! Thank you for your purchase.");
        
        // Reset selected values
        setSelectedAddress(null);
        setSelectedCard(null);
        setSelectedPaymentMethod("card");
        
        // Redirect to home
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to create order. Please try again.");
    }
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
           <label className="inline-flex items-center mb-4">
            <input
              type="radio"
              name="payment_method"
              value="card"
              checked={selectedPaymentMethod === "card"}
              onChange={() => handlePaymentMethodChange("card")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <div className="flex flex-col items-baseline gap-1">
              <span className="ml-2">Credit / Debit card</span>
              <p className="text-xs w-2/3">You can make your payment securely using a bank or credit card.</p>
            </div>
          </label>
          {selectedPaymentMethod === "card" && (
            <>
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
                          type="radio"
                          name="selected_card"
                          checked={selectedCard === card.id}
                          onChange={() => handleSelectCard(card.id)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                        <div>
                          <p className="font-semibold">{card.name_on_card}</p>
                          <p className="text-sm text-gray-600">
                            **** **** **** {card.card_no?.slice(-4)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Expires: {card.expire_month}/{card.expire_year}
                          </p>
                        </div>
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
                  </div>
                ))
              ) : (
                <p className="text-gray-500 mb-4">No saved cards found.</p>
              )}
              <button
                className="mb-4 text-primary-dark font-bold text-sm flex items-center gap-2 rounded-md border w-full py-10 justify-center bg-secondary-gray hover:bg-white"
                onClick={() => toggleCardModal()}
              >
                <CreditCard className="w-4 h-4" />
                Add New Card
              </button>
            </>
          )}
           <label className="inline-flex items-center">
            <input
              type="radio"
              name="payment_method"
              value="cash"
              checked={selectedPaymentMethod === "cash"}
              onChange={() => handlePaymentMethodChange("cash")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <span className="ml-2">Pay at the door</span>
          </label>
         </div>
        )}
        {isCardModalOpen && (
          <ModalCard
            toggleModal={toggleCardModal}
            handleAddCard={handleAddCard}
            modalTitle={modalTitle}
            selectedCard={selectedCardEditing}
          />
        )}
      </div>
      <div className="mr-48 mt-20 flex flex-col gap-4 w-1/5">
        <PlaceOrder handleCreateOrder={handleCreateOrder} />
      </div>
    </div>
  );
};

export default OrderPage;
