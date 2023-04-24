import React from "react";
import Instagram from "../../images/instagram.png";
import Twitter from "../../images/twitter.png";
import LinkedIn from "../../images/linkedin.png";

const ContactInfo = () => {
  return (
    <div className="w-full space-y-8 2xl:space-y-16">
      <div className="space-y-5 2xl:space-y-5">
        <p>Green Town, Lahore, Pakistan.</p>
        <div>
          <h1 className="font-bold text-md sm:text-xl 2xl:text-2xl">
            +923214131187
          </h1>
          <h1 className="font-bold text-md sm:text-xl 2xl:text-2xl">
            mabdullahr5131@gmail.com
          </h1>
        </div>
      </div>

      <div className="flex flex-row justify-between w-2/5">
        <a
          className="w-3/12 font-bold text-xs sm:text-md 2xl:text-lg"
          href="https://instagram.com/abdullah.5131_?igshid=ZDdkNTZiNTM="
          target="blank"
        >
          <img className="object-contain" src={Instagram} alt="" />
        </a>
        <a
          className="w-3/12 font-bold text-xs sm:text-md 2xl:text-lg"
          href="https://twitter.com/mabdullah_5131?t=-hcWoZv201l1ypsWaThG0w&s=09"
          target="blank"
        >
          <img className="" src={Twitter} alt="" />
        </a>
        <a
          className="w-3/12 font-bold text-xs sm:text-md 2xl:text-lg"
          href="https://www.linkedin.com/in/muhammad-abdullah-4489a2202"
          target="blank"
        >
          <img className=" " src={LinkedIn} alt="" />
        </a>
        {/* <a
          className="font-bold text-xs sm:text-md xl:text-lg"
          href="https://www.facebook.com/Abdullah.5131?mibextid=ZbWKwL"
          target="blank"
        >
          FACEBOOK
        </a> */}

        {/* <a
          className="font-bold text-xs sm:text-md xl:text-lg"
          href="https://instagram.com/abdullah.5131_?igshid=ZDdkNTZiNTM="
          target="blank"
        >
          INSTAGRAM
        </a>
        <a
          className="font-bold text-xs sm:text-md xl:text-lg"
          href="https://twitter.com/mabdullah_5131?t=-hcWoZv201l1ypsWaThG0w&s=09"
          target="blank"
        >
          TWITTER
        </a>
        <a
          className="font-bold text-xs sm:text-md xl:text-lg"
          href="https://www.linkedin.com/in/muhammad-abdullah-4489a2202"
          target="blank"
        >
          LINKEDIN
        </a> */}

        {/* <div className="flex flex-row w-1/2">
          <p className="font-bold text-sm sm:text-md xl:text-lg">FACEBOOK</p>
          <p className="font-bold text-sm sm:text-md xl:text-lg">TWITTER</p>
        </div>
        <div className="flex flex-row w-1/2">
          <p className="font-bold text-sm sm:text-md xl:text-lg">INSTAGRAM</p>
          <p className="font-bold text-sm sm:text-md xl:text-lg">LINKEDIN</p>
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
