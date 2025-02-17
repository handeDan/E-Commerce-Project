import React from "react";
import { teamList } from "../../../public/data";
import TeamCard from "./TeamCard";

function TeamCards() {
  return (
    <div className="flex flex-col my-16 max-md:mb-20">
      <p className="font-bold text-[40px] text-primary-dark text-center mb-16 max-md:mx-20 max-md:mb-10">
        Meet Our Team
      </p>
      <div className="flex max-md:flex-col max-md:flex-wrap justify-center flex-wrap items-center gap-10 mx-48 max-md:mx-5">
        {teamList.map((item, key) => (
          <TeamCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TeamCards;
