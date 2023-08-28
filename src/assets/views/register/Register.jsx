import React from "react";
import "./Register.style.css";
import Logo from "../../Components/Logo/Logo";
import LogoNav from "../../Components/LogoNav/LogoNav";
import FormRegisterContainer from "./Components/FormRegister/FormRegisterContainer";

const Register = () => {
  return (
    <div className="Register">
      <LogoNav />
      <div className="Register__div--container">
        <Logo />
        <div className="Register__div--text">
          <h1 className="Register__h1">Registro de nueva cuenta</h1>
          <p className="Register__p">
            Introduce tu nombre de usuario e inmediatamente recibirás un email
            con la contraseña y las instrucciones para acceder a tu nueva cuenta
            en WhatSending
          </p>
        </div>
        <FormRegisterContainer />
        <span className="Register__span">
          Consultas y soporte en soporte@whatsending.com
        </span>
      </div>
    </div>
  );
};

export default Register;
