import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

function TeamCard({ item }) {
  return (
    <div className="w-1/4 min-w-[200px] max-md:w-full bg-white">
      <img src={item.image} alt={item.title} />
      <div className="text-center p-5">
        <p className="text-primary-dark font-bold mb-2 text-base">
          {item.title}
        </p>
        <p className="text-primary font-bold mb-2 text-sm">
          {item.description}
        </p>
        <div className="flex justify-center mt-5 gap-4 text-secondary-blue">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
