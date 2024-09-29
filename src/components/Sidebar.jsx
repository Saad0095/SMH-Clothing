import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`sidebar fixed inset-y-0 left-0 z-20 bg-white transition-all duration-300 ease-in-out transform w-2/3 md:w-1/3 font-bold  dark:bg-black dark:text-white ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className="cursor-pointer absolute right-4 top-4 h-8"
        onClick={() => setIsMenuOpen(false)}
      >
        <FontAwesomeIcon icon={faXmark} className="h-7" />
      </div>
      <ul className="flex flex-col gap-2 p-5 mt-6">
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
