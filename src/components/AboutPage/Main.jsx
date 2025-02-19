import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  return (
    <div>
      <div className="mx-48 my-10 max-md:mb-0 flex max-md:flex-col w-fit bg-no-repeat bg-cover justify-between max-md:mx-20">
        <div className="flex flex-col items-start gap-5 my-auto w-1/2 max-md:w-full max-md:items-center max-md:mx-auto">
          <p className="font-bold text-primary-dark text-base  ">
            ABOUT COMPANY
          </p>
          <p className="font-bold text-primary-dark text-[40px] max-md:text-center">
            ABOUT US
          </p>
          <p className="text-xl text-primary max-md:text-center">
            We know how large objects will act, but things on a small scale.
          </p>
          <button
            className="bg-secondary-blue hover:bg-gray-500 border border-secondary-blue text-white font-bold py-3 mb-5 rounded-md text-sm px-6"
            onClick={goToShop}
          >
            Get Quote Now
          </button>
        </div>
        <img
          src="images/aboutus/background.png"
          alt=""
          className="w-1/2 min-w-[700px] max-md:min-w-full h-[570px]   max-md:my-14 max-md:h-auto max-md:mb-0"
        />
      </div>
    </div>
  );
}

export default Main;
