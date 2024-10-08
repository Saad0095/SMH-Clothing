import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setErrorMsg("*Please fill out the required fields");
    } else if (formData.name.trim().length < 4) {
      setErrorMsg("*Name must contain at least 4 characters");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg("*Invalid Email Address");
    } else {
      setErrorMsg(null);
      alert("Your response has been submitted");
      navigate("/");
    }
  };

  return (
    <div className="py-20 mx-auto max-w-4xl px-6">
      <form className="rounded-lg p-8">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-3">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8 dark:text-gray-300">
          We'd love to hear from you. Please reach out with any questions or
          feedback!
        </p>
        <p className="text-red-500 text-sm mb-4">{errorMsg}</p>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="name" className="font-semibold mb-2 ">
            Name:
          </label>
          <input
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 dark:bg-black outline-none focus:border-cyan-500 transition duration-200"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="email" className="font-semibold mb-2">
            Email:
          </label>
          <input
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 dark:bg-black outline-none focus:border-cyan-500 transition duration-200"
            type="email"
            placeholder="Your Email Address"
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label htmlFor="message" className="font-semibold mb-2">
            Message:
          </label>
          <textarea
            value={formData.message}
            name="message"
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 dark:bg-black outline-none focus:border-cyan-500 transition duration-200 h-32 resize-none"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-400 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full mx-auto transition duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
