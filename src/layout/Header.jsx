import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/clientActions";
import { fetchCategories } from "../store/actions/thunkActions";
import CartDropdown from "../components/CartPage/CartDropdown";

function Header() {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const user = useSelector((state) => {
    return state.client.user;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [isList, setIsList] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  const categories = useSelector((state) => {
    return state.product.categories;
  });

  const handleClick = () => {
    navigate("/shop");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  const goToTeam = () => {
    navigate("/team");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    dispatch(setUser(null));
    localStorage.removeItem("token");
    navigate("/");
  };
  // Gender Mapping
  const genderMapping = { k: "kadin", e: "erkek" };
  return (
    <div>
      {/* Mobilde görünmeyen kısım */}
      <div className="hidden md:flex bg-primary-dark justify-between items-center p-5 text-sm px-48">
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
        {/* Menü kısımları */}
        <div className="hidden md:flex justify-between my-6 text-sm px-48">
          <img
            src="images/Bandage.svg"
            className="cursor-pointer"
            onClick={goToHome}
          />
          <div className="flex items-center gap-5 cursor-pointer">
            <p className="font-medium hover:font-normal" onClick={goToHome}>
              Home
            </p>

            <div
              className="relative"
              onMouseEnter={() => setIsList(true)}
              onMouseLeave={() => setIsList(false)}
            >
              <div
                className="font-medium hover:font-normal cursor-pointer flex items-center gap-1"
                onClick={handleClick}
              >
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
                    {["k", "e"].map((gender) => (
                      <ul
                        key={gender}
                        className="flex flex-col gap-4 text-primary font-medium cursor-pointer"
                      >
                        <p className="text-primary-dark font-bold">
                          {gender === "k" ? "Kadın" : "Erkek"}
                        </p>
                        {categories
                          .filter((item) => item.gender === gender)
                          .map((item) => (
                            <a
                              key={item.id}
                              href={`/shop/${
                                genderMapping[item.gender]
                              }/${item.title.toLowerCase()}/${item.id}`}
                              className="hover:text-secondary"
                            >
                              {item.title}
                            </a>
                          ))}
                      </ul>
                    ))}
                  </div>
                </nav>
              )}
            </div>

            <p
              className="font-medium hover:font-normal ml-1"
              onClick={goToAbout}
            >
              About
            </p>
            <p className="font-medium hover:font-normal">Blog</p>
            <p className="font-medium hover:font-normal" onClick={goToContact}>
              Contact
            </p>
            <div className="relative group flex ">
              <p className="font-medium hover:font-normal" onClick={goToTeam}>
                Team
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="ml-auto flex items-center gap-4 hover:cursor-pointer relative"
              onMouseEnter={() => setShowAccountMenu(true)}
              onMouseLeave={() => setShowAccountMenu(false)}
            >
              {user?.email ? (
                <>
                  <img
                    src={user?.avatar}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-secondary-alert font-bold mr-3">
                    {user?.name}
                  </span>

                  {/* Açılır Menü */}
                  {showAccountMenu && (
                    <nav className="absolute left-0 top-full bg-white shadow-lg z-50 p-5 w-full md:w-auto min-w-[180px] md:max-w-[500px] rounded-md">
                      <div className="flex flex-col md:flex-row gap-6">
                        <ul className="flex flex-col gap-4 text-primary font-medium cursor-pointer">
                          <p className="text-primary hover:font-bold" onClick={() => navigate("/panel")}>Profile</p>
                          <p
                            className="text-primary hover:font-bold"
                            onClick={() => navigate("/panel")}
                          >
                            My orders
                          </p>
                          <p
                            className="text-primary hover:font-bold"
                            onClick={() => logout()}
                          >
                            Log out
                          </p>
                        </ul>
                      </div>
                    </nav>
                  )}
                </>
              ) : (
                <div className="flex items-center">
                  <UserRound className="text-secondary-blue font-bold cursor-pointer mr-2" />
                  <p
                    className="text-secondary-blue font-bold mr-5 lg:flex hidden cursor-pointer"
                    onClick={goToLogin}
                  >
                    Login
                  </p>
                  <p className="text-secondary-blue font-bold mr-3 lg:flex hidden cursor-pointer">
                    /
                  </p>
                  <p
                    className="text-secondary-blue font-bold mr-5 lg:flex hidden cursor-pointer"
                    onClick={goToSignup}
                  >
                    Register
                  </p>
                </div>
              )}
            </div>

            <Search className="text-secondary-blue cursor-pointer mr-5" />
            <div
              className="text-secondary-blue cursor-pointer mr-5 flex ml-auto items-center gap-2 hover:cursor-pointer relative"
              onMouseEnter={() => setShowCartDropdown(true)}
              onMouseLeave={() => setShowCartDropdown(false)}
            >
              <ShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
              {showCartDropdown && <CartDropdown />}
            </div>
            <div className="text-secondary-blue cursor-pointer mr-5 gap-2 flex">
              <Heart />
              <p>1</p>
            </div>
          </div>
        </div>
        {/* Mobilde görünen kısım */}
        <div className="flex md:hidden justify-between m-6 text-sm">
          <img
            src="images/Bandage.svg"
            className="cursor-pointer"
            onClick={goToHome}
          />
          <div className="flex gap-5 cursor-pointer relative">
            {user?.email ? (
              <>
                <div
                  className="ml-auto flex items-center gap-4 hover:cursor-pointer relative"
                  onMouseEnter={() => setShowAccountMenu(true)}
                  onMouseLeave={() => setShowAccountMenu(false)}
                >
                  <img
                    src={user?.avatar}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-secondary-alert font-bold mr-3 max-md:max-w-[60px]">
                    {user?.name}
                  </span>

                  {/* Açılır Menü */}
                  {showAccountMenu && (
                    <nav className="absolute left-0 top-full bg-white shadow-lg z-50 p-5 w-full md:w-auto min-w-[180px] md:max-w-[500px] rounded-md">
                      <div className="flex flex-col md:flex-row gap-6">
                        <ul className="flex flex-col gap-4 text-primary font-medium cursor-pointer">
                          <p className="text-primary-light">Profile</p>
                          <p
                            className="text-primary hover:font-bold"
                            onClick={() => logout()}
                          >
                            Log out
                          </p>
                        </ul>
                      </div>
                    </nav>
                  )}
                </div>
              </>
            ) : (
              <UserRound
                className="text-secondary-blue font-bold cursor-pointer mr-2"
                onClick={goToLogin}
              />
            )}

            <Search />
            <ShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 max-md:right-8 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
            {showCartDropdown && <CartDropdown />}
            <AlignRight onClick={toggleNavbar} />
          </div>
        </div>
      </div>

      <nav className={`${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <ul className="flex flex-col items-center gap-6 pt-10 pb-20 text-3xl text-primary font-medium hover:font-normal cursor-pointer">
          <li className="font-medium hover:font-normal" onClick={goToHome}>
            Home
          </li>
          <li className="font-medium hover:font-normal" onClick={handleClick}>
            Product
          </li>
          <li className="font-medium hover:font-normal" onClick={handleClick}>
            Pricing
          </li>
          <li className="font-medium hover:font-normal" onClick={goToContact}>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
