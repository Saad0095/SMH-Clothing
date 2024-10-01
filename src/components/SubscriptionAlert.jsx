import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const SubscriptionAlert = ({setSubscriptionMsgShow}) => {
  return (
    <div className="bg-green-500 text-white fixed top-5 z-50 w-96 px-2 py-2 left-1/3 newsletter-alert flex items-center justify-between">
      <div className="flex items-center">
        <FontAwesomeIcon className="p-3" icon={faCheckCircle} />
        <span>Thanks for subscribing</span>
      </div>
      <FontAwesomeIcon
        className="p-3 cursor-pointer"
        icon={faTimes}
        onClick={() => setSubscriptionMsgShow(false)}
      />
    </div>
  );
};

export default SubscriptionAlert;
