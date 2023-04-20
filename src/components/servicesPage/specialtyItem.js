import React from "react";
import { useState } from "react";
import SpecialtyImg from "../../images/specialtyImg.png";

const SpecialtyItem = () => {
  const [openImg, setOpenImg] = useState(false);
  const [addImg, setAddImg] = useState("+");

  const openImgHandler = (event) => {
    setOpenImg((current) => !current);
    addImg = openImg ? setAddImg("+") : setAddImg("-");
    if ((openImg = false)) {
      setAddImg("+");
    }
    setAddImg("-");
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-row">
        <div className="flex flex-row w-full items-center font-regular">
          <div className="flex flex-col xl:flex-row xl:w-11/12">
            <div className="xl:w-1/2 font-bold text-1xl sm:text-2xl xl:text-3xl">
              <ul style={{ listStyleType: "disc" }}>
                <li>WEB DESIGN</li>
              </ul>
            </div>

            <div className="xl:w-1/2 pr-5 space-y-5">
              <p>
                You can customize a template or make your own from scratch, with
                an immersive library at your disposal. You can customize a
                template
              </p>
              {openImg && <img src={SpecialtyImg} alt="" />}
            </div>
          </div>
        </div>

        <div className="w-16">
          <button
            className="w-full flex align-top justify-center text-center rounded-xl shadow-xl"
            onClick={openImgHandler}
          >
            <h1 className="p-3 font-light text-3xl sm:text-4xl xl:text-5xl">
              {addImg}
            </h1>
          </button>
        </div>
      </div>

      <hr className="w-full flex justify-center border" />
    </div>
  );
};

export default SpecialtyItem;
