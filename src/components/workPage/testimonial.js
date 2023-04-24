import React, { useEffect } from "react";
import WorksData from "./worksData";
// import TestimonialImg from "../../images/testimonialImg.png";
import LeftClick from "../../images/leftClick.png";
import RightClick from "../../images/rightClick.png";
import CompanyLogo1 from "../../images/company1.png";
import CompanyLogo2 from "../../images/company2.png";
import CompanyLogo3 from "../../images/company3.png";
import CompanyLogo4 from "../../images/company4.png";
import { useState } from "react";

const Testimonial = () => {
  const [testimonialImg, setTestimonialImg] = useState(0);
  const length = WorksData.length;

  const nextClick = () => {
    setTestimonialImg((testimonialImg + 1) % length);

    // if (testimonialImg === length - 1) {
    //   setTestimonialImg(0);
    // } else {
    //   setTestimonialImg(testimonialImg + 1);
    // }
  };

  const prevClick = () => {
    setTestimonialImg(testimonialImg === 0 ? length - 1 : testimonialImg - 1);

    // if (testimonialImg === 0) {
    //   setTestimonialImg(length - 1);
    // } else {
    //   setTestimonialImg(testimonialImg - 1);
    // }
  };

  return (
    <div className="flex flex-col justify-center w-full p-10 2xl:p-20 space-y-10 rounded-3xl shadow-2xl  bg-gradient from-purpleGrad via-redGrad to-yellowGrad text-white">
      <div className="text-center space-y-3 xl:space-y-5">
        <p className="font-italic text-sm sm:text-md 2xl:text-lg">
          Testimonial
        </p>
        <h1 className="font-bold text-2xl sm:text-4xl 2xl:text-5xl">
          WHAT THE SAYS
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row  border-b-2">
        <div className="xl:w-2/5">
          <img
            className="xl:w-3/4"
            src={WorksData[testimonialImg].image}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center xl:w-3/5 space-y-10 mb-10">
          <h1 className="font-boldItalic text-xl sm:text-2xl 2xl:text-3xl">
            {WorksData[testimonialImg].testimonial}
          </h1>

          <div>
            <p className="font-bold text-sm sm:text-md 2xl:text-lg">
              {WorksData[testimonialImg].person}
            </p>

            <p className="font-regular text-sm sm:text-md 2xl:text-lg">
              {WorksData[testimonialImg].office}
            </p>
          </div>

          <div className="flex flex-row justify-center xl:justify-start space-x-5">
            <img
              className="rounded-3xl shadow-2xl zoomUp"
              src={LeftClick}
              alt=""
              onClick={prevClick}
            />
            <img
              className="rounded-3xl shadow-2xl zoomUp"
              src={RightClick}
              alt=""
              onClick={nextClick}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 ">
        <img className="object-contain zoomUp" src={CompanyLogo1} alt="" />
        <img className="object-contain zoomUp" src={CompanyLogo2} alt="" />
        <img className="object-contain zoomUp" src={CompanyLogo3} alt="" />
        <img className="object-contain zoomUp" src={CompanyLogo4} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
