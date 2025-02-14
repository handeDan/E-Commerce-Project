import React from "react";
import {
  FaAws,
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaRedditAlien,
  FaStripe,
} from "react-icons/fa";

function Logos() {
  return (
    <div className="bg-secondary-gray">
      <div className=" max-md:mb-0 text-primary flex flex-col items-center md:flex-row md:justify-around md:mx-48 md:gap-5">
        <FaHooli size={150} className="md:w-28" />
        <FaLyft size={150} className="md:w-28" />
        <FaPiedPiperHat size={150} className="md:w-28" />
        <FaStripe size={150} className="md:w-28" />
        <FaAws size={150} className="md:w-28" />
        <FaRedditAlien size={150} className="md:w-28" />
      </div>
    </div>
  );
}

export default Logos;
