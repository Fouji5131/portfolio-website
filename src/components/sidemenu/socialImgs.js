import React from "react";
import Instagram from "../../images/instagram.png";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Github from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";

const SocialImgs = () => {
  return (
    <div className="flex flex-row space-x-6 ">
      <a
        className="font-bold text-xs sm:text-md xl:text-lg"
        href="https://instagram.com/abdullah.5131_?igshid=ZDdkNTZiNTM="
        target="blank"
      >
        <img className=" " src={Instagram} alt="" />
      </a>
      {/* <a
        className="font-bold text-xs sm:text-md xl:text-lg"
        href="https://instagram.com/abdullah.5131_?igshid=ZDdkNTZiNTM="
        target="blank"
      >
        <img className=" " src={Facebook} alt="" />
      </a> */}
      <a
        className="font-bold text-xs sm:text-md xl:text-lg"
        href="https://twitter.com/mabdullah_5131?t=-hcWoZv201l1ypsWaThG0w&s=09"
        target="blank"
      >
        <img className=" " src={Twitter} alt="" />
      </a>
      <a
        className="font-bold text-xs sm:text-md xl:text-lg"
        href="https://www.linkedin.com/in/muhammad-abdullah-4489a2202"
        target="blank"
      >
        <img className=" " src={LinkedIn} alt="" />
      </a>
      {/* <a
        className="font-bold text-xs sm:text-md xl:text-lg"
        href="https://instagram.com/abdullah.5131_?igshid=ZDdkNTZiNTM="
        target="blank"
      >
        <img className=" " src={Github} alt="" />
      </a> */}
    </div>
  );
};

export default SocialImgs;
