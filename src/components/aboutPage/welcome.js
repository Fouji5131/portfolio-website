import React from "react";
import WelcomeDp from "../../images/welcomeDp.png";

const Welcome = () => {
  return (
    <div className="flex flex-col space-y-9">
      <div>
        <p className="font-boldItalic text-sm sm:text-md xl:text-lg">
          Nice to meet you!
        </p>
        <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl">
          WELCOME TOO...
        </h1>
      </div>

      <div className="flex flex-col items-center xl:space-y-5">
        <img src={WelcomeDp} alt="" />
        <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl gradient from-purpleGrad via-redGrad to-yellowGrad">
          MUHAMMAD ABDULLAH
        </h1>
        <h6 className="font-regular text-xl sm:text-2xl xl:text-3xl">
          Software <span className="font-boldItalic">Developer</span>
        </h6>
        <p className="font-bold underline text-sm sm:text-md xl:text-lg ">
          <a href="../../assets/resume.pdf" download="CV.pdf">
            Download CV
          </a>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
