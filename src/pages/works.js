import React from "react";
import WorkTitle from "../components/workPage/workTitle";
import WelcomeAndDetail from "../components/aboutPage/welcomeAndDetail";
import ProjectsList from "../components/workPage/projectsList";
import Testimonial from "../components/workPage/testimonial";

const Works = () => {
  return (
    <div className="flex flex-col pt-20 sm:pt-20  xl:pt-20 xl:pb-0">
      <WorkTitle />

      <div className="flex flex-col items-center ">
        <div className="flex justify-center my-10 mb-20">
          <div className="w-4/5  ">
            <ProjectsList />
          </div>
        </div>

        {/* <div className="flex justify-center my-10">
          <div className="bg-darkGray text-white px-10 py-2">
            <h1>Learn more</h1>
          </div>
        </div> */}

        <div className="flex items-center justify-center xl:w-3/4 mb-10">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Works;
