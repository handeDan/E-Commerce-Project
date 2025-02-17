import { Facebook, Instagram, Linkedin, Redo, Twitter } from "lucide-react";
import React from "react";

function Trial() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 bg-white max-md:mb-10">
        <div className="py-5 flex flex-col gap-8 items-center">
          <p className="font-bold text-primary-dark text-center max-md:w-full text-[40px]">
            Start your 14 days free trial
          </p>
          <p className="text-sm text-primary text-center max-md:w-full max-w-96">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="bg-secondary-blue hover:bg-gray-500 border border-secondary-blue text-white font-bold py-3  rounded-md text-sm px-6 mx-auto">
            Try it free now
          </button>
          <div className="flex gap-5 max-md:mx-auto">
            <Twitter className="text-icons-tw fill-icons-tw size-7 hover:cursor-pointer" />
            <Facebook className="text-white bg-icons-fb size-7 hover:cursor-pointer" />
            <Instagram className="text-icons-ins size-7 hover:cursor-pointer" />
            <Linkedin className="text-white bg-icons-ln size-7 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trial;
