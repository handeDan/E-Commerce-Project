import React, { useEffect, useState } from "react";
import { CreditCard, Save, X } from "lucide-react";

function ModalCard({ toggleModal, handleAddCard, modalTitle, selectedCard }) {
  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  useEffect(() => {
    if (selectedCard) {
      setFormData({
        card_no: selectedCard.card_no || "",
        expire_month: selectedCard.expire_month || "",
        expire_year: selectedCard.expire_year || "",
        name_on_card: selectedCard.name_on_card || "",
        id: selectedCard.id,
      });
    } else {
      setFormData({
        card_no: "",
        expire_month: "",
        expire_year: "",
        name_on_card: "",
      });
    }
  }, [selectedCard]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCard(formData, selectedCard ? "update" : null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-xl max-h-full bg-white rounded-lg shadow-lg">
        <div className="relative">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              {modalTitle}
            </h3>
            <button
              onClick={toggleModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <span className="sr-only">Close modal</span>
              <X />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="flex flex-col gap-4 mb-4">
              <div className="w-full">
                <label
                  htmlFor="card_no"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Card Number *
                </label>
                <input
                  type="text"
                  name="card_no"
                  id="card_no"
                  value={formData.card_no}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="1234 1234 1234 1234"
                  required
                  maxLength="16"
                  pattern="[0-9]{16}"
                />
              </div>
              <div className="flex gap-5">
                <div className="w-1/3">
                  <label
                    htmlFor="expire_month"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Expire Month *
                  </label>
                  <input
                    type="number"
                    name="expire_month"
                    id="expire_month"
                    value={formData.expire_month}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="MM"
                    required
                    min="1"
                    max="12"
                  />
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="expire_year"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Expire Year *
                  </label>
                  <input
                    type="number"
                    name="expire_year"
                    id="expire_year"
                    value={formData.expire_year}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="YYYY"
                    required
                    min={new Date().getFullYear()}
                    max={new Date().getFullYear() + 10}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="name_on_card"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name on Card *
                </label>
                <input
                  type="text"
                  name="name_on_card"
                  id="name_on_card"
                  value={formData.name_on_card}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter name on card"
                  required
                />
              </div>
            </div>
            {selectedCard ? (
              <button
                type="submit"
                className="text-white inline-flex items-center bg-secondary-blue hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2 text-center justify-center gap-2 w-full"
              >
                <span className="text-xl font-bold">
                  <Save />
                </span>{" "}
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="text-white inline-flex items-center bg-secondary-green hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center justify-center gap-2 w-full"
              >
                <span className="text-xl font-bold">+</span> Save
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;
