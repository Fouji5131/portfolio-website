import React from "react";
import Welcome from "./welcome";
import Detail from "./detail";

const WelcomeAndDetail = () => {
  return (
    <div className="w-full h-screen flex flex-col sm:flex-col xl:flex-row items-center justify-center space-y-10 mb-44 sm:mb-16 2xl:mb-5">
      <div className="w-full xl:w-1/2">
        <Welcome />
      </div>
      <div className="w-full xl:w-1/2">
        <Detail />
      </div>
    </div>
  );
};

export default WelcomeAndDetail;
