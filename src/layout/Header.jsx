import React from "react";
import { UserRound, Search, ShoppingCart, AlignRight } from "lucide-react";

function Header() {
  const toggleNavbar = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
  };
  return (
    <div>
      <div className="flex justify-between m-10">
        <img src="images/Bandage.svg" />
        <div className="flex gap-5 cursor-pointer">
          <UserRound />
          <Search />
          <ShoppingCart />
          <AlignRight onClick={toggleNavbar} />
        </div>
      </div>

      <nav>
        <ul className="flex flex-col items-center gap-6 pt-10 text-3xl text-gray-600 cursor-pointer">
          <li className="font-medium hover:font-normal ">Home</li>
          <li className="font-medium hover:font-normal">Product</li>
          <li className="font-medium hover:font-normal">Pricing</li>
          <li className="font-medium hover:font-normal">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
