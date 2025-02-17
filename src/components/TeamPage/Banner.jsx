import { ChevronRight } from "lucide-react";
import React from "react";

function Banner() {
  return (
    <div>
      <div className="py-10 gap-5 md:mx-48 mx-5 md:justify-between flex flex-col justify-center items-center">
        <p className="text-base text-primary font-bold">WHAT WE DO</p>
        <p className="font-bold text-primary-dark text-5xl max-md:text-[40px] text-center max-md:max-w-xl">
          Innovation tailored for you
        </p>
        <nav className="flex gap-5 pb-10">
          <p className="text-primary-dark font-bold hover:cursor-pointer">
            Home
          </p>
          <ChevronRight className="text-primary-light" />
          <p className="text-primary-light font-bold hover:cursor-pointer">
            Team
          </p>
        </nav>
      </div>
    </div>
  );
}

export default Banner;
