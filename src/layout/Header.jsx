import React, { useState } from "react";
import {
  UserRound,
  Search,
  ShoppingCart,
  AlignRight,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Heart,
} from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* mobilde görünmeyen kısım: */}
      <div className="hidden md:flex bg-primary-dark justify-between items-center p-5 text-sm">
        <div className="flex gap-3 hover:cursor-pointer">
          <Phone className="text-white h-5" />
          <p className="text-white font-bold">(225) 555-0118</p>
        </div>
        <div className="flex gap-3 hover:cursor-pointer">
          <Mail className="text-white h-5" />
          <p className="text-white font-bold">michelle.rivera@example.com</p>
        </div>
        <p className="text-white font-bold lg:flex hidden">
          Follow Us and get a chance to win 80% off
        </p>
        <div className="flex gap-3">
          <p className="text-white font-bold">Follow Us :</p>
          <Instagram className="text-white h-5 hover:cursor-pointer" />
          <Youtube className="text-white h-5 hover:cursor-pointer" />
          <Facebook className="text-white h-5 hover:cursor-pointer" />
          <Twitter className="text-white h-5 hover:cursor-pointer" />
        </div>
      </div>

      <div>
        {/* mobilde görünmeyen kısım: */}
        <div className="hidden md:flex justify-between m-6 text-sm">
          <img src="images/Bandage.svg" />
          <div className="flex gap-4">
            <p className="font-medium hover:font-normal ">Home</p>
            <p className="font-medium hover:font-normal">Shop</p>
            <p className="font-medium hover:font-normal">About</p>
            <p className="font-medium hover:font-normal">Blog</p>
            <p className="font-medium hover:font-normal">Contact</p>
            <p className="font-medium hover:font-normal">Pages</p>
          </div>
          <div className="flex">
            <UserRound className="text-secondary-blue font-bold cursor-pointer mr-2" />
            <p className="text-secondary-blue font-bold mr-5 lg:flex hidden">
              Login / Register
            </p>
            <Search className="text-secondary-blue cursor-pointer mr-5" />
            <div className="text-secondary-blue cursor-pointer mr-5 gap-2 flex">
              <ShoppingCart />
              <p>1</p>
            </div>
            <div className="text-secondary-blue cursor-pointer mr-5 gap-2 flex">
              <Heart />
              <p>1</p>
            </div>
          </div>
        </div>
        {/* mobilde görünen kısım: */}
        <div className="flex md:hidden justify-between m-6 text-sm">
          <img src="images/Bandage.svg" />
          <div className="flex gap-5 cursor-pointer">
            <UserRound />
            <Search />
            <ShoppingCart />
            <AlignRight onClick={toggleNavbar} />
          </div>
        </div>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <ul className="flex flex-col items-center gap-6 pt-10 pb-20 text-3xl text-primary font-medium hover:font-normal cursor-pointer">
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
