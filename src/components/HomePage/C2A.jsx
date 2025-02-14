import React from "react";
import { useNavigate } from "react-router-dom";

function C2A() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div className="flex flex-col md:flex-row items-center px-20">
      <img
        src="/images/c2a.png"
        alt="c2a"
        className="w-full md:w-1/2 md:mr-5 order-last md:order-none"
      />
      <div className="text-center mx-auto w-full md:w-1/2 mb-10 mt-20">
        <p className="mb-5 text-primary">SUMMER 2025</p>
        <p className="font-bold text-primary-dark text-4xl mb-2">
          Part of the Neural Universe
        </p>
        <p className="text-primary">
          We know how large objects will act, but things on a small scale.
        </p>
        <button
          onClick={handleClick}
          className="bg-secondary-green hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-md m-5"
        >
          BUY NOW
        </button>
        <button
          onClick={handleClick}
          className="bg-white hover:bg-gray-500 border border-secondary-green text-secondary-green font-bold py-3 px-8 rounded-md"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default C2A;
