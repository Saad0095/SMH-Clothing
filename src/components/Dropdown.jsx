import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ title, categories, setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="w-full text-left p-2 rounded hover:bg-gray-200 transition flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
        </span>
      </button>
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } `}
      >
        <ul className="flex flex-col p-4">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={category.path}
              className="p-2 rounded hover:bg-gray-200 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {category.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
