import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 bg-white border transition-all duration-300 ease-in-out transform w-2/3 md:w-1/3 ${
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
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="p-2 rounded hover:bg-gray-200 transition"
        >
          Home
        </NavLink>
        <Dropdown
          title="Men"
          categories={[
            { name: "Kameez Shalwar", path: "/" },
            { name: "Kurta", path: "/" },
            { name: "Waist-Coat", path: "/" },
          ]}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Dropdown
          title="Women"
          categories={[
            { name: "Unstitched", path: "/" },
            { name: "Stitched", path: "/" },
            { name: "Kurti", path: "/" },
          ]}
          setIsMenuOpen={setIsMenuOpen}
        />
        
      </ul>
    </div>
  );
};

export default Sidebar;
