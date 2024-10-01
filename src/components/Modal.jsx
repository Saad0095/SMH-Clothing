import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SubscriptionAlert from "./SubscriptionAlert";
import useSubscription from "../hooks/useSubscription";

const Modal = () => {
  const modalRef = useRef();
  const [modalShow, setModalShow] = useState(false);
  const {
    email,
    setEmail,
    subscriptionMsgShow,
    setSubscriptionMsgShow,
    errorMsg,
    handleSubscribe,
  } = useSubscription();

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleModalSubscribe = (e) => {
    if (e) e.preventDefault();
    if (handleSubscribe()) {
      setModalShow(false);
    }
  };

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
                handleModalSubscribe();
              }
            }}
          />
          <button
            className="p-2 w-1/4 bg-black text-white rounded-r-full"
            onClick={handleModalSubscribe}
          >
            Search
          </button>
        </div>
        {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      </div>
      {subscriptionMsgShow && (
        <SubscriptionAlert setSubscriptionMsgShow={setSubscriptionMsgShow} />
      )}
    </div>
  );
};

export default Modal;
