import React from "react";
import ProjectItem from "./projectItem";
import ProjectsData from "./projectData";

const ProjectsList = () => {
  return (
    <div>
      <ProjectItem projectsData={ProjectsData} />

      {/* <div className="xl:w-4/5 ">
        <ProjectItem />
      </div> */}
    </div>
  );
};

export default ProjectsList;
