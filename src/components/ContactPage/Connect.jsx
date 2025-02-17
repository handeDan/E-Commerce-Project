import { Redo } from "lucide-react";
import React from "react";

function Connect() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 bg-white">
        <Redo className="text-secondary-blue size-20" />
        <div className="py-5 flex flex-col gap-10">
          <p className="font-bold text-base text-primary-dark text-center max-md:w-full">
            WE Can't WAIT TO MEET YOU
          </p>
          <p className="font-bold text-5xl text-primary-dark text-center max-md:w-full">
            Let's Talk
          </p>
          <button className="bg-secondary-blue hover:bg-gray-500 border border-secondary-blue text-white font-bold py-3 mb-5 rounded-md text-sm px-6 mx-auto">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Connect;
