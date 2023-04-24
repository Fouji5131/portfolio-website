import React from "react";
import { Link } from "react-router-dom";

const NavOptions = () => {
  return (
    <div className="font-regular text-2xl ">
      <Link to="/">
        <h1 className="my-10 xl:my-5 zoomUp">HOME</h1>
      </Link>
      <Link to="/about">
        <h1 className="my-10 xl:my-5 zoomUp">ABOUT</h1>
      </Link>
      <Link to="/services">
        <h1 className="my-10 xl:my-5 zoomUp">SERVICES</h1>
      </Link>
      <Link to="/works">
        <h1 className="my-10 xl:my-5 zoomUp">WORKS</h1>
      </Link>
      <Link to="/contact">
        <h1 className="my-10 xl:my-5 zoomUp">CONTACT</h1>
      </Link>

      {/* <h1>BLOGS</h1> */}
    </div>
  );
};

export default NavOptions;
