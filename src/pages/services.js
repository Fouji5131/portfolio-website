import React from "react";
import ServicesTitle from "../components/servicesPage/servicesTitle";
import Specialties from "../components/servicesPage/specialties";

const Services = () => {
  return (
    <div className="flex flex-col  pt-20 mb-10  sm:pt-20  xl:pt-20 xl:pb-0">
      <ServicesTitle />
      <div className="flex justify-center mt-10">
        <div className="w-11/12 xl:w-4/5">
          <Specialties />
        </div>
      </div>
    </div>
  );
};

export default Services;
