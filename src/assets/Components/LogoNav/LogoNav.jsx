import React from "react";
import "./LogoNav.style.css";

const LogoNav = () => {
  return (
    <div className="LogoNav">
      <img className="LogoNav__img" src="logo-nav.svg" alt="" />
      <span className="LogoNav__span">WhatSending</span>
    </div>
  );
};

export default LogoNav;
