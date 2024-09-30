import React, { useEffect, useRef, useState } from "react";

const SearchBar = ({setSearchBarShow}) => {
  const searchRef = useRef();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue !== "") {
      setSearchValue("");
    }
  };

  useEffect(()=>{
    document.addEventListener("mousedown",handleOutsideClick);
    return () => document.removeEventListener("mousedown",handleOutsideClick);
  });

  const handleOutsideClick = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)){
      setSearchBarShow(false);
    }
  }


  return (
    <div className="flex gap-4 items-center fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" ref={searchRef}>
      <input
        type="text"
        value={searchValue}
        className="px-4 py-2 outline-none rounded-full w-60 sm:w-96 caret-cyan-600 drop-shadow-lg"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e)=> {
          if (e.key === "Enter"){
            handleSearch();
          }
        }}
      />
      <button className="p-2 w-28 bg-black text-white rounded-full drop-shadow-lg" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
