import React from "react";
import PageLayout from "../components/layout/pageLayout";

import Experience from "../components/aboutPage/experience";
import WelcomeAndDetail from "../components/aboutPage/welcomeAndDetail";

const About = () => {
  return (
    <div className="flex flex-col items-center pt-52  sm:pt-32  xl:pt-0 xl:pb-0">
      <WelcomeAndDetail />
      <Experience />
    </div>
  );
};

export default About;
