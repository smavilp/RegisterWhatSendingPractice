import React from "react";
import "./Logo.style.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img className="Logo__img" src="logo.svg" alt="" />
      <span className="Logo__span">WhatSending</span>
    </div>
  );
};

export default Logo;
