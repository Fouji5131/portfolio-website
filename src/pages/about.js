import React from "react";
// import PageLayout from "../components/layout/pageLayout";

import Experience from "../components/aboutPage/experience";
import WelcomeAndDetail from "../components/aboutPage/welcomeAndDetail";

const About = () => {
  return (
    <div className="flex flex-col items-center pt-10 xl:pt-0 xl:pb-10">
      <WelcomeAndDetail />
      {/* <div className="flex justify-center mt-10">
        <div className="w-4/5 ">
        <Experience />
        </div>
      </div> */}
      <Experience />
    </div>
  );
};

export default About;
