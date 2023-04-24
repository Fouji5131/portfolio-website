import React from "react";
import ProjectImg from "../../images/projectImg.png";
import ArrowBlack from "../../images/arrowBlack.png";

const ProjectItem = (props) => {
  return (
    <div className=" xl:space-y-0 xl:m-10  grid grid-cols-1 xl:grid-cols-2 gap-10 2xl:gap-20 space-y-0 ">
      {props.projectsData.map((projects) => (
        <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 rounded-3xl shadow-2xl p-10 zoomUp">
          <div className="xl:w-1/2 space-y-1 2xl:space-y-5 ">
            <p className="font-boldItalic text-sm sm:text-md 2xl:text-lg">
              {projects.title}
            </p>
            <h1 className="font-bold text-xl sm:text-3xl 2xl:text-4xl">
              {projects.projectName}
            </h1>
            {/* <img src={ArrowBlack} alt="" /> */}
          </div>
          <div className="flex justify-center object-contain xl:w-1/2 ">
            <img
              className="rounded-3xl shadow-2xl"
              src={projects.image}
              alt=""
            />
          </div>
        </div>
      ))}

      {/* <img src={ArrowBlack} alt="" /> */}
    </div>
  );
};

export default ProjectItem;
