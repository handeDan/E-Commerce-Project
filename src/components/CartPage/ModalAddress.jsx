import React, { useState } from "react";

function ModalAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-xl max-h-full bg-white rounded-lg shadow-lg dark:bg-gray-700">
          {/* Modal content */}
          <div className="relative">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Address
              </h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5">
              {/* Form contents */}
              <div className="flex flex-col gap-4 mb-4 ">
                {/* title input */}
                <div className="w-full">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type your address title"
                    required
                  />
                </div>
                {/* name & surname input */}
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type your name"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="surname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Surname *
                    </label>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type your surname"
                      required
                    />
                  </div>
                </div>

                {/* phone & city input */}
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="0 (___) ___-__-__"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City *
                    </label>
                    <select
                      name="city"
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    >
                      <option value="" disabled>
                        Select a city
                      </option>
                      <option value="city1">Istanbul</option>
                      <option value="city2">Ankara</option>
                      <option value="city3">Izmir</option>
                      <option value="city4">Other</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                </div>

                {/* phone & city input */}
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <label
                      htmlFor="district"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      District *
                    </label>
                    <select
                      name="district"
                      id="district"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    >
                      <option value="" disabled>
                        Select a district
                      </option>
                      <option value="city1">Avcılar</option>
                      <option value="city2">Beşiktaş</option>
                      <option value="city3">Kadıköy</option>
                      <option value="city4">Üsküdar</option>
                      <option value="city4">Other</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="Neighborhood"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Neighborhood *
                    </label>
                    <select
                      name="Neighborhood"
                      id="Neighborhood"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    >
                      <option value="" disabled>
                        Select a neighborhood
                      </option>
                      <option value="city1">Cevizli</option>
                      <option value="city2">Moda</option>
                      <option value="city3">Ünalan</option>
                      <option value="city4">Other</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address *
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type your street, building number, etc."
                    required
                  />
                </div>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="text-white inline-flex items-center bg-secondary-green hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2 text-center  justify-center gap-2 w-full"
              >
                <span className="text-xl font-bold">+</span> Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddress;
