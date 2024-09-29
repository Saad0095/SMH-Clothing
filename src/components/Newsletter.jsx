import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheckCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email === "") {
      setErrorMsg("*Please fill out this field!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("*Invalid Email Address");
    } else {
      console.log("Working");
      setEmail("");
      setErrorMsg(null);
      setConfirmationMessage("Thanks for subscribing");
      setTimeout(() => {
        setConfirmationMessage(null);
      }, 3000);
    }
  };

  const handleClose = () => {
    setConfirmationMessage(null);
  };

  return (
    <div className="w-full ">
      <div className="newsletter flex flex-col justify-center items-center px-5 py-20 max-w-96 mx-auto">
        <h1 className="text-3xl font-bold">Newsletter</h1>
        <h4 className="text-lg p-2">Get the latest trends first</h4>
        <div className="border-b-2 border-black w-full flex justify-between px-2 py-1 m-4">
          <input
            type="email"
            value={email}
            className="border-none outline-none w-4/5 caret-blue-600"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={handleNewsletter}>
            <FontAwesomeIcon className="cursor-pointer" icon={faArrowRight} />
          </button>
        </div>
        {errorMsg && <p className="text-red-600 w-full">{errorMsg}</p>}
      </div>
      <div>
        {confirmationMessage && (
          <div className="bg-green-500 text-white fixed top-5 z-50 w-96 px-2 py-2 left-1/3 newsletter-alert flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon className="p-3" icon={faCheckCircle} />
              <span>{confirmationMessage}</span>
            </div>
            <FontAwesomeIcon
              className="p-3 cursor-pointer"
              icon={faTimes}
              onClick={handleClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
