import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimes,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  const modalRef = useRef();
  const [modalShow, setModalShow] = useState(false);
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
      setModalShow(false);
      setConfirmationMsgShow(true);
      setTimeout(() => {
        setConfirmationMsgShow(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setModalShow(true);
    }, 5000);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalShow(false);
    }
  };

  return (
    <div>
      {modalShow && (
        <div className="hidden md:block fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <div
        ref={modalRef}
        className={`hidden fixed transition -translate-x-1/2 -translate-y-1/2 left-1/2 h-80 px-20 bg-white md:flex flex-col items-center justify-center z-50 rounded ${
          modalShow ? "top-1/2" : "-top-96"
        }`}
      >
        <div
          className="cursor-pointer absolute right-4 top-4 h-8"
          onClick={() => setModalShow(false)}
        >
          <FontAwesomeIcon icon={faXmark} className="h-7" />
        </div>
        <h1 className="text-2xl">JOIN OUR MAILING LIST TO</h1>
        <p className="text-gray-500">
          Be the first to know about latest trends and promotions.
        </p>
        <div className="border-2 border-black rounded-full w-80 flex justify-center m-4 dark:border-white">
          <input
            type="email"
            value={email}
            className="px-4 py-2 w-3/4 outline-none rounded-l-full caret-cyan-600"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubscribe();
              }
            }}
          />
          <button
            className="p-2 w-1/4 bg-black text-white rounded-r-full"
            onClick={handleSubscribe}
          >
            Search
          </button>
        </div>
        {errorMsg && <p className="text-red-600">{errorMsg}</p>}
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
              onClick={() => setConfirmationMsgShow(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
