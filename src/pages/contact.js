import React from "react";
import ContactTitle from "../components/contactPage/contactTitle";
import ContactForm from "../components/contactPage/contactForm";
import ContactInfo from "../components/contactPage/contactInfo";

const Contact = () => {
  return (
    <div className="w-full h-screen flex  justify-center items-center mt-24 sm:pt-20 xl:mt-0 xl:pt-20 xl:pb-0">
      <div className="flex flex-col xl:flex-row justify-center items-center xl:w-4/5">
        <div className="xl:w-2/5 mt-10 space-y-5">
          <ContactTitle />
          <ContactInfo />
        </div>
        <div className="xl:w-3/5 xl:pl-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
