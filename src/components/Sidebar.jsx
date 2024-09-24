import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 bg-white border transition-all duration-300 ease-in-out transform w-1/3 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className="cursor-pointer absolute right-5 top-5 h-8"
        onClick={() => setIsOpen(false)}
      >
        <FontAwesomeIcon icon={faXmark} className="h-full" />
      </div>
      <ul className="flex flex-col gap-4 p-5">
        <NavLink to="/" onClick={() => isOpen(false)}>
          Home
        </NavLink>
        <NavLink>Categories</NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
