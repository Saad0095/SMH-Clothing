import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-96 h-full bg-white opacity-100 fixed border">
      <ul className="flex flex-col gap-4 p-5">
        <NavLink to="/">Home</NavLink>
        <li>Categories</li>
      </ul>
    </div>
  );
};

export default Sidebar;
