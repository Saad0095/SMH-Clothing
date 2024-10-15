import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import ThemeChanger from "./ThemeChanger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const {cartItems} = useSelector((state) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchBarShow, setSearchBarShow] = useState(false);
  const isScrolled = useScroll(120);

  return (
    <div>
      <nav className="flex justify-between items-center h-16 text-xl fixed w-full top-0 left-0 z-10 px-4 md:px-10">
        <div
          className={`h-16 absolute top-0 left-0 px-6 w-full -z-10 bg-white transition-all duration-300 transform dark:bg-black ${
            isScrolled
              ? "translate-y-0 shadow-2xl shadow-gray-200 dark:shadow-gray-950"
              : "-translate-y-20 "
          }`}
        ></div>
        <div className="flex justify-between items-center gap-6">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faBars}
            onClick={() => setIsMenuOpen(true)}
          />
          <div
            className="logo text-xl md:text-3xl font-bold cursor-pointer dark:drop-shadow-lg"
            onClick={() => navigate("/")}
          >
            SMH Clothing
          </div>
        </div>
        <div className="flex justify-between items-center gap-6">
          <div>
            <FontAwesomeIcon
              className="cursor-pointer dark:drop-shadow-lg"
              icon={faSearch}
              onClick={() => setSearchBarShow(!searchBarShow)}
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon
              className="cursor-pointer dark:drop-shadow-lg"
              icon={faBagShopping}
              onClick={() => navigate("/cart")}
            />
            <span className="absolute top-0 -right-3 z-50 bg-cyan-600  text-white font-bold text-xs rounded-full w-4 h-4 flex justify-center items-center">{cartItems.length}</span>
          </div>
          <div>
            <ThemeChanger />
          </div>
        </div>
      </nav>
      {searchBarShow && <SearchBar setSearchBarShow={setSearchBarShow} />}
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Navbar;
