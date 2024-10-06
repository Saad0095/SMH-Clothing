import { useState,useEffect } from "react";

const useScroll = (heightToChange) => {
  const [isScroll, setIsScroll] = useState(false);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToChange) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return isScroll;
};

export default useScroll;
