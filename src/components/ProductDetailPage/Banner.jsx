import { ChevronRight } from "lucide-react";
import React from "react";

function Banner() {
  return (
    <div className=" bg-secondary-gray">
      <div className="py-10 md:py-0 gap-5 md:gap-0 md:mx-48 md:flex-row flex flex-col md:justify-between items-center justify-center">
        <nav className="flex gap-5 py-5 max-md:pt-0 md:justify-center">
          <p className="text-primary-dark font-bold hover:cursor-pointer">
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
