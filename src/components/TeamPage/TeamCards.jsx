import React from "react";
import { teamList } from "../../../public/data";
import TeamCard from "./TeamCard";

function TeamCards() {
  return (
    <div className="flex flex-col mt-16 mb-0 max-md:mb-0">
      <p className="font-bold text-[40px] text-primary-dark text-center mb-16 max-md:mx-20 max-md:mb-10">
        Meet Our Team
      </p>
      <div className="flex max-md:flex-col max-md:flex-wrap justify-center items-center max-md:gap-10 gap-32 mx-48 max-md:mx-5">
        {teamList.map((item, key) => (
          <TeamCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TeamCards;
