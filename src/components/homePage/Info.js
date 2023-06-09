import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center xl:w-1/2 sm:w-full ">
      <div className="xl:ml-24 xl:space-y-6 space-y-3">
        <h1 className="font-regular text-5xl sm:text-6xl xl:text-6xl 2xl:text-8xl  text-darkGray">
          MY NAME IS <span className="font-bold">MUHAMMAD ABDULLAH...</span>
        </h1>
        <p className="font-boldItalic text-lg sm:text-3xl xl:text-3xl 2xl:text-4xl  text-darkGray">
          <span className="font-regular">Web </span>
          Developer
        </p>
        <div className="xl:w-2/4 2xl:w-1/3 w-1/2 py-3  bg-darkGray text-white text-center font-regular rounded-3xl shadow-2xl zoomUp">
          <Link to="/contact">Let's talk with me</Link>
        </div>
        <div className="flex flex-col sm:flex-row font-boldItalic sm:space-x-20 xl:space-x-20">
          <p>+923214131187</p>
          <p>mabdullahr5131@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
