import React from "react";
import { useNavigate } from "react-router-dom";

function C2A() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div>
      <div className="text-center mx-auto w-1/2 mb-10 mt-20">
        <p className="mb-5 text-primary">SUMMER 2025</p>
        <p className="font-bold text-primary-dark text-4xl mb-2">
          Part of the Neural Universe
        </p>
        <p className="text-primary">
          We know how large objects will act, but things on a small scale.
        </p>
        <button
          onClick={handleClick}
          className="bg-secondary-blue hover:bg-gray-500  text-white font-bold py-3 px-8 rounded-md m-5"
        >
          BUY NOW
        </button>
        <button
          onClick={handleClick}
          className="bg-white hover:bg-gray-500 border border-secondary-blue text-secondary-blue font-bold py-3 px-8 rounded-md"
        >
          Learn More
        </button>
      </div>
      <img src="/images/c2a.png" alt="c2a" />
    </div>
  );
}

export default C2A;
