import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-36 justify-center items-center border-t-2 border-gray-200">
      <h1 className="logo text-xl sm:text-3xl md:text-4xl font-bold p-6 text-center">
        SMH CLOTHING
      </h1>
      <h1 className="font-bold text-xl p-2">CUSTOMER SUPPORT </h1>
      <p className="flex flex-col md:flex-row gap-4 p-2 flex-wrap items-center">
        <span className="cursor-pointer" onClick={() => navigate("/contact")}>
          Contact Us{" "}
        </span>
        <span className="hidden md:block">|</span>
        <a href="mailto:saadbinkhalid1895@gmail.com">
          saadbinkhalid1895@gmail.com
        </a>
        <span className="hidden md:block">|</span>
        <a href="tel:+923170218290" className="cursor-pointer">
          +92 317 0218290
        </a>
      </p>
      <p className="p-4">COPYRIGHT © 2024 SMH CLOTHING</p>
    </div>
  );
};

export default Footer;
