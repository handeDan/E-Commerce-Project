import { ChevronRight } from "lucide-react";
import React from "react";

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-secondary-gray">
      <p className="font-bold text-primary-dark text-2xl">Shop</p>
      <nav className="flex gap-5 py-10">
        <p className="text-primary-dark font-bold hover:cursor-pointer">Home</p>
        <ChevronRight className="text-primary-light" />
        <p className="text-primary-light font-bold hover:cursor-pointer">
          Shop
        </p>
      </nav>
    </div>
  );
}

export default Banner;
