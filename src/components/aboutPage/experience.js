import React from "react";
import CV from "../../assets/cv/Abdullah CV.pdf";

const Experience = () => {
  return (
    <div className="flex justify-center w-full xl:w-4/5 mb-10 xl:mb-10 bg-gradient from-purpleGrad via-redGrad to-yellowGrad text-white rounded-3xl shadow-2xl">
      <div className="flex flex-col xl:flex-row justify-center w-full 2xl:w-4/5 p-10 xl:p-20 2xl:px-0 2xl:py-28 space-y-5">
        <div className="flex flex-col w-full xl:w-1/2 ">
          <div className="flex flex-col items-center xl:items-start xl:w-4/5 space-y-5 xl:space-y-10 text-sm sm:text-sm 2xl:text-lg">
            {/* <p className="font-boldItalic ">Nice to meet you!</p> */}
            <h1 className="font-bold text-3xl sm:text-4xl 2xl:text-5xl">
              EXPERIENCE
            </h1>
            <p className="font-regular text-justify">
              My experience as a developer has been a transformative journey,
              filled with countless lines of code, problem-solving triumphs, and
              continuous learning. Each project has deepened my expertise, honed
              my skills, and fueled my passion for crafting exceptional digital
              solutions.
            </p>
            <div className="w-4/5 2xl:w-3/4 py-3  bg-darkGray text-white text-center font-regular rounded-3xl shadow-2xl zoomUp">
              <a href={CV} download="CV.pdf">
                Download my resume
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full xl:w-1/2 space-y-5 xl:space-y-10 font-regular">
          <div className="flex flex-col space-y-5 ">
            <div className="flex flex-col xl:flex-row text-sm sm:text-sm 2xl:text-lg">
              <p className="font-boldItalic w-3/5 ">- The Game Strome Studio</p>
              <p>1 month</p>
            </div>
            <h1 className="font-bold text-1xl sm:text-2xl 2xl:text-3xl">
              GAME DEVELOPER (internship)
            </h1>
          </div>
          <hr className="w-full flex justify-center border" />
          <div className="flex flex-col space-y-5 ">
            <div className="flex flex-col xl:flex-row text-sm sm:text-sm 2xl:text-lg">
              <p className="font-boldItalic w-3/5 ">- Fiverr</p>
              <p>1 year +</p>
            </div>
            <h1 className="font-bold text-1xl sm:text-2xl 2xl:text-3xl">
              GRAPHIC DESIGNER
            </h1>
          </div>
          <hr className="w-full flex justify-center border" />
          <div className="flex flex-col space-y-5 ">
            <div className="flex flex-col xl:flex-row text-sm sm:text-sm 2xl:text-lg">
              <p className="font-boldItalic w-3/5 ">- NIXXE Solutions</p>
              <p>2 years +</p>
            </div>
            <h1 className="font-bold text-1xl sm:text-2xl 2xl:text-3xl">
              DESKTOP SUPPORT ADMINISTRATOR & JUNIOR IT AGENT
            </h1>
          </div>
          <hr className="w-full flex justify-center border" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
