import { MapPin, Phone, Redo, Send } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <div className="bg-secondary-gray pt-20">
      <div className="mx-48 max-md:mx-12 flex max-md:flex-col w-fit md:m-auto">
        <div className="my-auto max-md:w-full">
          <p className="font-bold text-primary-dark max-md:text-center max-md:w-full text-center">
            VISIT OUR OFFICE
          </p>
          <p className="font-bold text-primary-dark text-[40px] max-md:text-center pb-10 py-3 text-center max-w-xl m-auto">
            We help small businesses with big ideas
          </p>
          <div className="flex flex-row max-md:flex-col   gap-5 max-md:gap-0">
            <div className="flex flex-col items-center p-10 bg-white mb-10">
              <Phone className="text-secondary-blue size-16" />
              <div className="py-5 flex flex-col gap-1">
                <p className="font-bold text-sm text-primary-dark text-center max-md:w-full">
                  georgia.young@example.com
                </p>
                <p className="font-bold text-sm text-primary-dark text-center max-md:w-full">
                  georgia.young@ple.com
                </p>
              </div>
              <p className="font-bold text-base text-primary-dark text-center max-md:w-full">
                Get Support
              </p>
              <button className="bg-white hover:bg-gray-500 border border-secondary-blue text-secondary-blue font-bold py-3 px-5 my-5 rounded-md text-sm">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col items-center p-10 bg-primary-dark mb-10">
              <MapPin className="text-secondary-blue size-16" />
              <div className="py-5 flex flex-col gap-1">
                <p className="font-bold text-sm text-white text-center max-md:w-full">
                  georgia.young@example.com
                </p>
                <p className="font-bold text-sm text-white text-center max-md:w-full">
                  georgia.young@ple.com
                </p>
              </div>
              <p className="font-bold text-base text-white text-center max-md:w-full">
                Get Support
              </p>
              <button className="bg-primary-dark hover:bg-gray-500 border border-secondary-blue text-secondary-blue font-bold py-3 px-5 my-5 rounded-md text-sm">
                Submit Request
              </button>
            </div>
            <div className="flex flex-col items-center p-10 bg-white mb-10">
              <Send className="text-secondary-blue size-16" />
              <div className="py-5 flex flex-col gap-1">
                <p className="font-bold text-sm text-primary-dark text-center max-md:w-full">
                  georgia.young@example.com
                </p>
                <p className="font-bold text-sm text-primary-dark text-center max-md:w-full">
                  georgia.young@ple.com
                </p>
              </div>
              <p className="font-bold text-base text-primary-dark text-center max-md:w-full">
                Get Support
              </p>
              <button className="bg-white hover:bg-gray-500 border border-secondary-blue text-secondary-blue font-bold py-3 px-5 my-5 rounded-md text-sm">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
