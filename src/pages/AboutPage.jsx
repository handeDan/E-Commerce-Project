import React from "react";
import Main from "../components/AboutPage/Main";
import Description from "../components/AboutPage/Description";
import Video from "../components/AboutPage/Video";
import TeamCards from "../components/TeamPage/TeamCards";
import Companies from "../components/AboutPage/Companies";
import Section from "../components/AboutPage/Section";

function AboutPage() {
  return (
    <div>
      <Main />
      <Description />
      <Video />
      <TeamCards />
      <Companies />
      <Section />
    </div>
  );
}

export default AboutPage;
