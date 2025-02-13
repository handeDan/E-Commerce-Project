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
  ChevronDown,
} from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isList, setIsList] = useState(false);

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
          <img src="images/Bandage.svg" className="cursor-pointer" />
          <div className="flex items-center gap-5 cursor-pointer">
            <p className="font-medium hover:font-normal ">Home</p>

            <div
              className="relative"
              onMouseEnter={() => setIsList(true)}
              onMouseLeave={() => setIsList(false)}
            >
              <div className="font-medium hover:font-normal cursor-pointer flex items-center gap-1">
                Shop
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isList ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Açılır Menü */}
              {isList && (
                <nav className="absolute left-0 top-full bg-white shadow-lg z-50 p-5 w-full md:w-auto max-w-[300px] md:max-w-[500px] rounded-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <ul className="flex flex-col gap-4 text-primary font-medium cursor-pointer">
                      <p className="text-primary-dark font-bold">Kadın</p>
                      <p className="hover:text-secondary">Bags</p>
                      <p className="hover:text-secondary">Belts</p>
                      <p className="hover:text-secondary">Cosmetics</p>
                      <p className="hover:text-secondary">Hats</p>
                    </ul>
                    <ul className="flex flex-col gap-4 text-primary font-medium cursor-pointer">
                      <p className="text-primary-dark font-bold">Erkek</p>
                      <p className="hover:text-secondary">Bags</p>
                      <p className="hover:text-secondary">Belts</p>
                      <p className="hover:text-secondary">Cosmetics</p>
                      <p className="hover:text-secondary">Hats</p>
                    </ul>
                  </div>
                </nav>
              )}
            </div>

            <p className="font-medium hover:font-normal ml-1">About</p>
            <p className="font-medium hover:font-normal">Blog</p>
            <p className="font-medium hover:font-normal">Contact</p>
            <div className="relative group flex ">
              <p className="font-medium hover:font-normal">Pages</p>
              <ChevronDown className="absolute left-full top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-15" />
            </div>
          </div>
          <div className="flex">
            <UserRound className="text-secondary-blue font-bold cursor-pointer mr-2" />
            <p className="text-secondary-blue font-bold mr-5 lg:flex hidden cursor-pointer">
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
