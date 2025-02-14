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
    <div className="text-primary flex flex-col items-center bg-secondary-gray">
      <div className="mt-20">
        <FaHooli size={150} />
        <FaLyft size={150} />
        <FaPiedPiperHat size={150} />
        <FaStripe size={150} />
        <FaAws size={150} />
        <FaRedditAlien size={150} />
      </div>
    </div>
  );
}

export default Logos;
