import React from "react";
import Banner from "../components/TeamPage/Banner";
import Main from "../components/TeamPage/Main";
import TeamCards from "../components/TeamPage/TeamCards";
import Trial from "../components/TeamPage/Trial";

function TeamPage() {
  return (
    <div>
      <Banner />
      <Main />
      <TeamCards />
      <Trial />
    </div>
  );
}

export default TeamPage;
