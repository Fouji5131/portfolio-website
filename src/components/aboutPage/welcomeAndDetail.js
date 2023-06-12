import React from "react";
import Welcome from "./welcome";
import Detail from "./detail";

const WelcomeAndDetail = () => {
  return (
    <div className="w-full h-1/2 space-y-10 mb-10 xl:mt-10">
      <div className="flex flex-col pt-10 mb-10 xl:pt-10 xl:pb-0 h-100">
        <Welcome />
        <div className="flex justify-center mt-10 w-100">
          <div className="xl:w-4/5 flex justify-center">
            <Detail />
          </div>
        </div>
      </div>
      {/* <div className="w-full xl:w-1/2">
        <Welcome />
      </div>
      <div className="w-full xl:w-1/2">
        <Detail />
      </div> */}
    </div>
  );
};

export default WelcomeAndDetail;
