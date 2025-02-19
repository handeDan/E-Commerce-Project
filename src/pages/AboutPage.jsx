import React from "react";
import Main from "../components/AboutPage/Main";
import Description from "../components/AboutPage/Description";
import Video from "../components/AboutPage/Video";
import TeamCards from "../components/TeamPage/TeamCards";

function AboutPage() {
  return (
    <div>
      <Main />
      <Description />
      <Video />
      <TeamCards />
    </div>
  );
}

export default AboutPage;
