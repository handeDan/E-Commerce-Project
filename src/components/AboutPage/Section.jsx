import React from "react";

function Section() {
  return (
    <div className="flex h-[600px]">
      <div className="bg-sky-600 flex flex-col p-40 w-2/3 gap-10 max-md:w-full max-md:p-24 max-md:text-center">
        <p className="text-white text-base font-bold">WORK WITH US</p>
        <p className="text-white text-[40px] font-bold">Now Let's grow Yours</p>
        <p className="text-white text-sm max-w-[500px]">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <button className="hover:bg-gray-500 border border-secondary-blue text-white font-bold py-3 rounded-md text-sm px-6 mr-auto max-md:mx-auto">
          Try it free now
        </button>
      </div>
      <img
        src="/images/aboutus/section.jpg"
        alt=""
        className="w-1/3 object-cover md:block hidden"
      />
    </div>
  );
}

export default Section;
