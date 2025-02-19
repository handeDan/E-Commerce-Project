import React from "react";
import Logos from "../ShopPage/Logos";

function Companies() {
  return (
    <div className="mt-10 pb-10 bg-secondary-gray">
      <div className="flex flex-col items-center gap-5 pt-10 pb-5 text-center">
        <p className="text-[40px] font-bold text-primary-dark max-md:px-10">
          Big Companies Are Here
        </p>
        <p className="text-sm text-primary w-2/6 max-md:w-full  max-md:px-20 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <Logos />
    </div>
  );
}

export default Companies;
