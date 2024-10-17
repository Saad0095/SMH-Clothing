import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const CartDispMsg = ({ setDispMsgShow }) => {
  return (
    <div className="bg-black text-white fixed top-5 z-50 w-96 px-2 py-1 left-1/3 flex items-center justify-between dark:text-black dark:bg-white">
      <div className="flex items-center">
        <FontAwesomeIcon className="p-3" icon={faCheckCircle} />
        <span>Item have been added to cart!</span>
      </div>
      <FontAwesomeIcon
        className="p-3 cursor-pointer"
        icon={faTimes}
        onClick={() => setDispMsgShow(false)}
      />
    </div>
  );
};

export default CartDispMsg;
