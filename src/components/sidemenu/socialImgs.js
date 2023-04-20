import React from "react";
import Instagram from "../../images/instagram.png";
import Behance from "../../images/behance.png";
import Google from "../../images/google.png";

const SocialImgs = () => {
  return (
    <div className="flex flex-row xl:flex-col space-x-4 xl:space-x-0 xl:space-y-4  xl:w-1/4">
      <img className=" " src={Behance} alt="" />
      <img className=" " src={Google} alt="" />
      <img className=" " src={Instagram} alt="" />
    </div>
  );
};

export default SocialImgs;
