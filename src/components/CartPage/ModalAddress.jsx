import React, { useState } from "react";

function ModalAddress({ toggleModal, handleAddAddress }) {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddAddress(formData);
    toggleModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-xl max-h-full bg-white rounded-lg shadow-lg">
        <div className="relative">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Create New Address
            </h3>
            <button
              onClick={toggleModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <span>X</span>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="flex flex-col gap-4 mb-4">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address Title *
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type your address title"
                  required
                />
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type your name"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="surname"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Surname *
                  </label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type your surname"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-1/2">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="0 (___) ___-__-__"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    City *
                  </label>
                  <select
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  >
                    <option value="">Select a city</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Izmir">Izmir</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-1/2">
                  <label
                    htmlFor="district"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    District *
                  </label>
                  <select
                    name="district"
                    id="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  >
                    <option value="">Select a district</option>
                    <option value="Avcılar">Avcılar</option>
                    <option value="Beşiktaş">Beşiktaş</option>
                    <option value="Kadıköy">Kadıköy</option>
                    <option value="Üsküdar">Üsküdar</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="neighborhood"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Neighborhood *
                  </label>
                  <select
                    name="neighborhood"
                    id="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  >
                    <option value="">Select a neighborhood</option>
                    <option value="Cevizli">Cevizli</option>
                    <option value="Moda">Moda</option>
                    <option value="Ünalan">Ünalan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address *
                </label>
                <textarea
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type your street, building number, etc."
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-secondary-green hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center justify-center gap-2 w-full"
            >
              <span className="text-xl font-bold">+</span> Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalAddress;
