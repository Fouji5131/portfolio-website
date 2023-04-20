import React from "react";
import TestimonialImg from "../../images/testimonialImg.png";
import LeftClick from "../../images/leftClick.png";
import RightClick from "../../images/rightClick.png";
import CompanyLogo1 from "../../images/company1.png";
import CompanyLogo2 from "../../images/company2.png";
import CompanyLogo3 from "../../images/company3.png";
import CompanyLogo4 from "../../images/company4.png";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center w-full p-10 xl:p-28 space-y-10 bg-gradient from-purpleGrad via-redGrad to-yellowGrad text-white">
      <div className="text-center space-y-3 xl:space-y-5">
        <p className="font-italic text-sm sm:text-md xl:text-lg">Testimonial</p>
        <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl">
          WHAT THE SAYS
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row  border-b-2">
        <div className="xl:w-2/5">
          <img className="xl:w-3/4" src={TestimonialImg} alt="" />
        </div>

        <div className="flex flex-col justify-center xl:w-3/5 space-y-10 mb-10">
          <h1 className="font-boldItalic text-xl sm:text-2xl xl:text-3xl">
            “ File storage made easy – including powerful features you won’t
            find anywhere else. Whether you’re.”
          </h1>

          <div>
            <p className="font-bold text-sm sm:text-md xl:text-lg">
              - Larry Diamond
            </p>

            <p className="font-regular text-sm sm:text-md xl:text-lg">
              Chief Executive Officer, Besnik.
            </p>
          </div>

          <div className="flex flex-row justify-center xl:justify-start space-x-5">
            <img src={LeftClick} alt="" />
            <img src={RightClick} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between m-10 space-y-10 xl:space-y-0">
        <img className="object-contain" src={CompanyLogo1} alt="" />
        <img className="object-contain" src={CompanyLogo2} alt="" />
        <img className="object-contain" src={CompanyLogo3} alt="" />
        <img className="object-contain" src={CompanyLogo4} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
