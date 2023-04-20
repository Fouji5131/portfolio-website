import React from "react";
import { Link } from "react-router-dom";

const NavOptions = () => {
  return (
    <div className="font-regular text-2xl sm:my-28  space-y-32">
      <Link to="/">
        <h1 className="my-10">HOME</h1>
      </Link>
      <Link to="/about">
        <h1 className="my-10">ABOUT</h1>
      </Link>
      <Link to="/services">
        <h1 className="my-10">SERVICES</h1>
      </Link>
      <Link to="/works">
        <h1 className="my-10">WORKS</h1>
      </Link>
      <Link to="/contact">
        <h1 className="my-10">CONTACT</h1>
      </Link>

      {/* <h1>BLOGS</h1> */}
    </div>
  );
};

export default NavOptions;
