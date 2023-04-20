import React from "react";
import { useState } from "react";
import SpecialtyImg from "../../images/specialtyImg.png";

const SpecialtyItem = () => {
  const [openImg, setOpenImg] = useState(false);

  const openImgHandler = () => {
    setOpenImg = true;
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-row w-full items-center font-regular">
        <div className="flex flex-col xl:flex-row xl:w-11/12">
          <div className="xl:w-1/2 font-bold text-1xl sm:text-2xl xl:text-3xl">
            <ul style={{ listStyleType: "disc" }}>
              <li>WEB DESIGN</li>
            </ul>
          </div>

          <div className="xl:w-1/2 pr-5 space-y-5">
            {openImg && <img src={SpecialtyImg} alt="" />}
            <p>
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal. You can customize a
              template
            </p>
          </div>
        </div>

        <div className="xl:w-1/12 " onClick={openImgHandler}>
          <h1 className="p-2 font-light text-3xl sm:text-4xl xl:text-5xl text-center rounded-xl shadow-xl">
            +
          </h1>
        </div>
      </div>
      <hr className="w-full flex justify-center border" />
    </div>
  );
};

export default SpecialtyItem;
