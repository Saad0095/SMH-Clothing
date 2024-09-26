import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 bg-white border transition-all duration-300 ease-in-out transform w-1/3 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className="cursor-pointer absolute right-5 top-5 h-8"
        onClick={() => setIsMenuOpen(false)}
      >
        <FontAwesomeIcon icon={faXmark} className="h-full" />
      </div>
      <ul className="flex flex-col gap-4 p-5">
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <div>
          <button>Men</button>
          <ul className="flex flex-col gap-3 p-4">
            <NavLink to="/">Kameez Shalwar</NavLink>
            <NavLink to="/">Kurta</NavLink>
            <NavLink to="/">Waist-Coat</NavLink>
          </ul>
        </div>
        <div>
          <button>Women</button>
          <ul className="flex flex-col gap-3 p-4">
            <NavLink to="/">Unstitched</NavLink>
            <NavLink to="/">Stitched</NavLink>
            <NavLink to="/">Kurti</NavLink>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
