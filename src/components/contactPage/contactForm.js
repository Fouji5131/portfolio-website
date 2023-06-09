import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FileAttach from "../../images/attach-file.png";

const ContactForm = () => {
  const form = useRef();

  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w5tajt9",
        "template_pch53wn",
        form.current,
        "fmMTtOR69E1VJ47WF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full  my-10 p-10 2xl:p-20 space-y-5 font-regular bg-gradient from-purpleGrad via-redGrad to-yellowGrad text-white rounded-3xl shadow-2xl "
    >
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl 2xl:text-4xl">
          ANY PROJECTS ?
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row justify-between w-full font-regular space-y-5 xl:space-y-0">
        <div className="flex flex-col xl:flex-row border-b-2 py-1 xl:py-4">
          <label className=" text-sm sm:text-sm 2xl:text-lg" for="name">
            NAME
          </label>

          <input
            id="name"
            name="name"
            className=" xl:w-56 xl:pl-5 focus:outline-none bg-transparent text-white placeholder-white"
            type="text"
            value={formData.name}
            onChange={handleChange}
            // placeholder="enter your name"
          />
        </div>

        <div className="flex flex-col xl:flex-row border-b-2 py-1 xl:py-4">
          <label className=" text-sm sm:text-sm 2xl:text-lg" for="email">
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            className="xl:w-56 xl:pl-5 focus:outline-none bg-transparent text-white placeholder-white"
            type="email"
            value={formData.email}
            onChange={handleChange}
            // placeholder="enter your email"
          />
        </div>
      </div>

      <div className=" border-b-2 py-1 xl:py-4">
        <label className=" text-sm sm:text-sm 2xl:text-lg" for="message">
          MESSAGE
        </label>
        <input
          id="message"
          name="message"
          className="w-full xl:pt-1 focus:outline-none bg-transparent text-white placeholder-white"
          type="text"
          value={formData.message}
          onChange={handleChange}
          //   placeholder="enter your message"
        />
      </div>

      <div className="flex flex-col items-center xl:w-1/3 gap-4">
        <div
          // type="file"
          // id="myFile"
          // name="filename"
          className="flex flex-row justify-center items-center space-x-2 text-sm sm:text-sm 2xl:text-lg px-2 bg-white rounded-2xl bg-opacity-20  zoomUp"
        >
          <img className="w-4 h-4" src={FileAttach} alt="" />
          {/* <p c>Upload File</p> */}
          <label className="hover:cursor-pointer" for="myFile">
            Upload File
          </label>
          <input
            type="file"
            id="myFile"
            name="file"
            onChange={handleFileChange}
            hidden
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 bg-darkGray rounded-3xl shadow-2xl zoomUp"
        >
          Submit Now
          {/* <input type="submit" value="Send" /> */}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
