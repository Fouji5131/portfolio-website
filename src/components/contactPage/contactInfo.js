import React from "react";

const ContactInfo = () => {
  return (
    <div className="w-full space-y-8 xl:space-y-16">
      <p>
        249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC 3000,
        London.
      </p>

      <div className="space-y-1 xl:space-y-2">
        <h1 className="font-bold text-xl sm:text-xl xl:text-3xl">
          +923214131187
        </h1>
        <h1 className="font-bold text-xl sm:text-xl xl:text-3xl">
          mabdullahr5131@gmail.com
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row xl:justify-between w-4/5">
        <a
          className="font-bold text-xs sm:text-md xl:text-lg"
          href="https://www.facebook.com/Abdullah.5131?mibextid=ZbWKwL"
          target="blank"
        >
          FACEBOOK
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
          href="https://instagram.com/abdullah.5131_?igshid=ZDdkNTZiNTM="
          target="blank"
        >
          INSTAGRAM
        </a>
        <a
          className="font-bold text-xs sm:text-md xl:text-lg"
          href="https://www.linkedin.com/in/muhammad-abdullah-4489a2202"
          target="blank"
        >
          LINKEDIN
        </a>

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
