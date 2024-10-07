import React, { createContext, useState,useEffect } from "react";
import { useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(JSON.parse(localStorage.getItem("searchQuery")) || "");

  useEffect(() => {
  localStorage.setItem("searchQuery", JSON.stringify(searchQuery))
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
