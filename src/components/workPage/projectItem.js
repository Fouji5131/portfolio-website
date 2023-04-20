import React from "react";
import ProjectImg from "../../images/projectImg.png";
import ArrowBlack from "../../images/arrowBlack.png";

const ProjectItem = () => {
  return (
    <div className=" xl:space-y-0 xl:m-10">
      <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0">
        <div className="xl:w-1/2 space-y-1 xl:space-y-5 ">
          <p className="font-boldItalic text-sm sm:text-md xl:text-lg">
            UX case study
          </p>
          <h1 className="font-bold text-xl sm:text-3xl xl:text-4xl">
            Bally Website Research
          </h1>
          {/* <img src={ArrowBlack} alt="" /> */}
        </div>
        <div className="flex justify-center object-contain xl:w-1/2 ">
          <img src={ProjectImg} alt="" />
        </div>
      </div>
      {/* <img src={ArrowBlack} alt="" /> */}
    </div>
  );
};

export default ProjectItem;
