import { Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
          {/* GitHub Linki */}
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800"
          >
            <FaGithub className="size-8" />
          </a>

          {/* LinkedIn Linki */}
          <a
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-icons-ln text-white rounded-full p-1"
          >
            <Linkedin className="size-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
