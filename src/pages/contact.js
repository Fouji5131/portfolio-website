import React from "react";
import ContactTitle from "../components/contactPage/contactTitle";
import ContactForm from "../components/contactPage/contactForm";
import ContactInfo from "../components/contactPage/contactInfo";

const Contact = () => {
  return (
    <div className="w-full h-screen flex  justify-center items-center mt-10 sm:pt-20 xl:mt-0 xl:pt-20 xl:pb-0">
      <div className="flex flex-col xl:flex-row  xl:w-4/5 ">
        <div className=" w-full mt-20 space-y-8 xl:space-y-16 ">
          <ContactTitle />
          <ContactInfo />
        </div>
        <div className=" xl:pl-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
