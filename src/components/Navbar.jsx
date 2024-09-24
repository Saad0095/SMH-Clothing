import { useState } from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center px-6 h-16 text-xl fixed top-0 w-full">
        <div className="flex justify-between items-center gap-6">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faBars}
            onClick={() => setIsToggle(!isToggle)}
          />
          <div className="logo text-xl md:text-2xl font-bold">SMH Clothing</div>
        </div>
        <div className="flex justify-between items-center gap-6">
          <FontAwesomeIcon className="cursor-pointer" icon={faSearch} />
          <FontAwesomeIcon className="cursor-pointer" icon={faBagShopping} />
        </div>
      </nav>
      <div>{isToggle && <Sidebar />}</div>
    </div>
  );
};

export default Navbar;
