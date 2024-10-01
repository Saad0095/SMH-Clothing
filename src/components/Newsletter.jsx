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
  const [confirmationMsgShow, setConfirmationMsgShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email === "") {
      setErrorMsg("*Please fill out this field!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("*Invalid Email Address");
    } else {
      console.log("Working");
      setEmail("");
      setErrorMsg(null);
      setConfirmationMsgShow(true);
      setTimeout(() => {
        setConfirmationMsgShow(false);
      }, 3000);
    }
  };

  const handleClose = () => {
    setConfirmationMsgShow(false);
  };

  return (
    <div className="w-full ">
      <div className="newsletter flex flex-col justify-center items-center px-5 py-20 max-w-96 mx-auto">
        <h1 className="text-3xl font-bold">Newsletter</h1>
        <h4 className="text-lg p-2">Get the latest trends first</h4>
        <div className="border-b-2 border-black w-full flex justify-between px-2 py-1 m-4 dark:border-white">
          <input
            type="email"
            value={email}
            className="border-none outline-none w-4/5 caret-cyan-600 bg-inherit p-2"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e)=> {
              if (e.key === "Enter"){
                handleSearch();
              }
            }}
            required
          />
          <button onClick={handleSubscribe}>
            <FontAwesomeIcon className="cursor-pointer" icon={faArrowRight} />
          </button>
        </div>
        {errorMsg && <p className="text-red-600 w-full">{errorMsg}</p>}
      </div>
      <div>
        {confirmationMsgShow && (
          <div className="bg-green-500 text-white fixed top-5 z-50 w-96 px-2 py-2 left-1/3 newsletter-alert flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon className="p-3" icon={faCheckCircle} />
              <span>Thanks for subscribing</span>
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
