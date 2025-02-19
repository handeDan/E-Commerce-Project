import React from "react";

function Description() {
  return (
    <div className="flex flex-col mx-48 max-md:mx-20">
      <div className="flex flex-col gap-5 max-md:text-center max-md:pt-20">
        <p className="text-secondary-danger text-sm">Problems trying</p>
        <div className="flex gap-14 max-md:flex-col max-md:items-center">
          <p className="text-2xl text-primary-dark font-bold w-2/5 max-md:w-full">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
          <p className="text-sm text-primary w-3/5 max-md:w-full">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-between my-10 max-md:flex-col max-md:gap-14 max-md:my-20">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[58px] text-primary-dark">15K</p>
          <p className="font-bold text-base text-primary">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[58px] text-primary-dark">150K</p>
          <p className="font-bold text-base text-primary">Monthly Visitors</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[58px] text-primary-dark">15</p>
          <p className="font-bold text-base text-primary">
            Countries Worldwide
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[58px] text-primary-dark">100+</p>
          <p className="font-bold text-base text-primary">Top Partners</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
