import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary-gray">
      <div className="py-10 md:py-0 gap-5 md:gap-0 md:mx-48 md:flex-row flex flex-col md:justify-between items-center justify-center">
        <p className="font-bold text-primary-dark text-2xl">Shop</p>
        <nav className="flex gap-5 py-5">
          <p
            className="text-primary-dark font-bold hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <ChevronRight className="text-primary-light" />
          <p className="text-primary-light font-bold hover:cursor-pointer">
            Shop
          </p>
        </nav>
      </div>
    </div>
  );
}

export default Banner;
