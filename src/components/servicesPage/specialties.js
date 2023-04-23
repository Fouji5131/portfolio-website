import React from "react";
import SpecialtyItem from "./specialtyItem";
import ServicesData from "./servicesData";

const Specialties = () => {
  return (
    <div className="space-y-10">
      <SpecialtyItem servicesData={ServicesData} />
    </div>
  );
};

export default Specialties;
