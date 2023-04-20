import React from "react";

const PageLayout = (props) => {
  return (
    <div className="w-full h-screen pt-20 xl:pt-0 flex flex-col sm:flex-col xl:flex-row items-center justify-center space-y-10">
      {props.children}
    </div>
  );
};

export default PageLayout;
