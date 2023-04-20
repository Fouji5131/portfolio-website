import React from "react";
import ProjectItem from "./projectItem";

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4  space-y-5 ">
      <div className="xl:w-4/5 ">
        <ProjectItem />
      </div>
      <div className="xl:w-4/5 ">
        <ProjectItem />
      </div>
    </div>
  );
};

export default ProjectsList;
