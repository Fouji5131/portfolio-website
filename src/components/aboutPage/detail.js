import React from "react";
import Quotes from "../../images/quotes.png";

const Detail = () => {
  return (
    <div className="flex flex-col xl:w-4/5 space-y-10">
      <div className="flex flex-col sm:flex-row xl:flex-row font-boldItalic space-y-1 sm:space-y-0 sm:space-x-20 xl:space-x-3 xl:space-y-0  text-sm sm:text-md 2xl:text-lg">
        {/* <div className="flex flex-col w-1/2">
          <h1>+923214131187</h1>
          <h1>mabdullahr5131@gmail.com</h1>
        </div> */}
        <div className="flex flex-col w-1/2 ">
          <h1>22 Years</h1>
          <h1>Lahore, Pakistan</h1>
        </div>
        <div className="flex flex-col w-1/2">
          <h1>+923214131187</h1>
          <h1>mabdullahr5131@gmail.com</h1>
        </div>
      </div>

      <hr className="w-full flex justify-center border" />

      <div>
        <div className="flex flex-col sm:flex-row xl:flex-row font-regular space-y-1 sm:space-y-0 sm:space-x-10 xl:space-y-0 xl:space-x-20 text-xs sm:text-sm xl:text-sm">
          <div className="flex flex-col sm:w-1/2">
            <h1 className="font-boldItalic text-lg sm:text-lg 2xl:text-xl ">
              <span className="text-3xl sm:text-4xl 2xl:text-5xl font-bold gradient from-purpleGrad via-redGrad to-yellowGrad">
                1+{" "}
              </span>
              Years experience
            </h1>
            <p className="text-sm sm:text-sm 2xl:text-lg text-justify">
              With over a year of hands-on experience in the world of
              development, I have traversed the ever-evolving landscape of
              technology, gaining valuable insights, overcoming challenges, and
              refining my craft. This journey has nurtured my expertise,
              deepened my understanding, and instilled in me an unwavering
              dedication to delivering excellence in every project I undertake.
            </p>
          </div>
          <div className="flex flex-col sm:w-1/2">
            <h1 className="font-boldItalic text-lg sm:text-lg 2xl:text-xl">
              <span className="text-3xl sm:text-4xl 2xl:text-5xl font-bold gradient from-purpleGrad via-redGrad to-yellowGrad">
                8{" "}
              </span>
              Clients Worldwide
            </h1>
            <p className="text-sm sm:text-sm 2xl:text-lg text-justify">
              My clients are not just customers; they are partners on a shared
              journey. Together, we collaborate, innovate, and achieve digital
              success, building lasting relationships grounded in trust,
              communication, and mutual growth.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row p-4 bg-darkGray rounded-3xl shadow-2xl">
        <img className="object-contain" src={Quotes} alt="" />
        <h1 className="font-italic text-sm sm:text-sm 2xl:text-lg text-white">
          "Coding is my canvas, and algorithms are my brushes. Together, we can
          paint a world where technology enhances lives and sparks inspiration."
        </h1>
      </div>
    </div>
  );
};

export default Detail;
