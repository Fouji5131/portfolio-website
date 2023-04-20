import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full h-full my-10 p-10 xl:p-20 space-y-5 font-regular bg-gradient from-purpleGrad via-redGrad to-yellowGrad text-white">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl xl:text-4xl">
          ANY PROJECTS?
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row justify-between w-full font-regular space-y-5 xl:space-y-0">
        <div className="flex flex-col xl:flex-row border-b-2 py-1 xl:py-4">
          <label className=" text-sm sm:text-sm xl:text-lg" for="name">
            NAME
          </label>

          <input
            id="name"
            className=" xl:w-56 xl:pl-5 focus:outline-none bg-transparent text-white placeholder-white"
            type="text"
            // placeholder="enter your name"
          />
        </div>

        <div className="flex flex-col xl:flex-row border-b-2 py-1 xl:py-4">
          <label className=" text-sm sm:text-sm xl:text-lg" for="email">
            EMAIL
          </label>
          <input
            id="email"
            className="xl:w-56 xl:pl-5 focus:outline-none bg-transparent text-white placeholder-white"
            type="email"
            // placeholder="enter your email"
          />
        </div>
      </div>

      <div className=" border-b-2 py-1 xl:py-4">
        <label className=" text-sm sm:text-sm xl:text-lg" for="message">
          MESSAGE
        </label>
        <input
          id="message"
          className="w-full xl:pt-1 focus:outline-none bg-transparent text-white placeholder-white"
          type="text"
          //   placeholder="enter your message"
        />
      </div>

      <div className=" text-sm sm:text-sm xl:text-lg">
        <p>ATTACH FILE</p>
      </div>

      <div className="xl:w-1/3 flex justify-center py-3 bg-darkGray">
        <p>Submit Now</p>
      </div>
    </div>
  );
};

export default ContactForm;
