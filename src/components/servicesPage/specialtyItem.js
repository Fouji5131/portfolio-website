import React from "react";
import { useState } from "react";
// import SpecialtyImg from "../../images/specialtyImg.png";

const SpecialtyItem = (props) => {
  const [openImg, setOpenImg] = useState(false);
  // const [addImg, setAddImg] = useState("+");

  // const openImgHandler = (event) => {
  //   setOpenImg((current) => !current);
  //   addImg = openImg ? setAddImg("+") : setAddImg("-");
  //   if ((openImg = false)) {
  //     setAddImg("+");
  //   }
  //   setAddImg("-");
  // };

  return (
    <div className="space-y-10">
      {props.servicesData.map((services) => (
        <div className="">
          <div className="flex flex-row">
            <div className="flex flex-row w-full items-center font-regular">
              <div className="flex flex-col xl:flex-row xl:w-full">
                <div className="xl:w-1/3 font-bold text-1xl sm:text-2xl 2xl:text-3xl">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>{services.title}</li>
                  </ul>
                </div>

                <div className="xl:w-2/3 pr-5 space-y-5">
                  <p className="text-justify">{services.description}</p>
                  {openImg && (
                    <img
                      className="rounded-3xl shadow-2xl"
                      src={services.image}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>

            {/* <div className="w-16">
              <button
                className="w-full flex align-top justify-center text-center  bg-darkGray text-white rounded-3xl shadow-2xl zoomUp"
                onClick={openImgHandler}
              >
                <h1 className="p-3 font-light text-3xl sm:text-4xl 2xl:text-5xl">
                  {addImg}
                </h1>
              </button>
            </div> */}
          </div>

          {/* <hr className="w-full flex justify-center border" /> */}
        </div>
      ))}
    </div>
  );
};

export default SpecialtyItem;
