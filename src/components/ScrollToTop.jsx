import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import useScroll from "../hooks/useScroll";

const ScrollToTop = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isVisible = useScroll(300);
  
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  // const listenToScroll = () => {
  //   const heightToHidden = 300;
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   if (winScroll > heightToHidden) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenToScroll);
  //   return () => window.removeEventListener("scroll", listenToScroll);
  // }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="fixed z-50 bottom-8 right-8 bg-gradient-to-t from-cyan-400 via-cyan-500 to-cyan-600 w-8 h-8 text-white"
          onClick={handleScroll}
        >
          <FontAwesomeIcon
            className={`transition-transform translate-y-1 h-5 ${
              isAnimating ? " hover:translate-y-0" : ""
            }`}
            icon={faArrowUp}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
