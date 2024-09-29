import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ThemeChanger from "./ThemeChanger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useScroll from "../hooks/useScroll";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isColored = useScroll(150);

  return (
    <div>
      <nav className="flex justify-between items-center h-16 text-xl fixed w-full top-0 left-0 z-10 px-4 md:px-10">
        <div
          className={`h-16 absolute top-0 left-0 px-6 w-full -z-10 bg-white transition-all duration-300 transform dark:bg-black ${
            isColored ? "translate-y-0 shadow-2xl shadow-gray-200 dark:shadow-gray-950" : "-translate-y-20"
          }`}
        ></div>
        <div className="flex justify-between items-center gap-6">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faBars}
            onClick={() => setIsMenuOpen(true)}
          />
          <div
            className="logo text-xl md:text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            SMH Clothing
          </div>
        </div>
        <div className="flex justify-between items-center gap-6">
          <FontAwesomeIcon className="cursor-pointer" icon={faSearch} />
          <FontAwesomeIcon className="cursor-pointer" icon={faBagShopping} />
          <ThemeChanger />
        </div>
      </nav>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Navbar;
