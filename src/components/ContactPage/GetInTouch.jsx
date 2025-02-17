import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
function GetInTouch() {
  return (
    <div>
      <div className="mx-48 my-10 max-md:mx-20 flex max-md:flex-col w-fit bg-no-repeat bg-cover">
        <div className="flex flex-col items-start gap-5 my-auto w-1/2 max-md:w-full">
          <p className="font-bold text-primary-dark text-base max-md:text-center max-md:w-full">
            CONTACT US
          </p>
          <p className="font-bold text-primary-dark text-[40px] max-md:text-center">
            Get in touch today!
          </p>
          <p className="text-xl text-primary max-md:text-center">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <p className="font-bold text-xl text-primary-dark text-center max-md:w-full">
            Phone : +451 215 215
          </p>
          <p className="font-bold text-xl text-primary-dark text-center max-md:w-full">
            Fax : +451 215 215
          </p>
          <div className="flex gap-5 max-md:mx-auto">
            <Twitter className="text-primary-dark fill-primary-dark size-7 hover:cursor-pointer" />
            <Facebook className="text-white bg-primary-dark size-7 hover:cursor-pointer" />
            <Instagram className="text-primary-dark size-7 hover:cursor-pointer" />
            <Linkedin className="text-white bg-primary-dark size-7 hover:cursor-pointer" />
          </div>
        </div>
        <img
          src="images/contact/background.png"
          alt=""
          className="w-1/2 h-[570px] max-md:w-full max-md:mx-auto max-md:my-14 max-md:h-auto"
        />
      </div>
    </div>
  );
}

export default GetInTouch;
