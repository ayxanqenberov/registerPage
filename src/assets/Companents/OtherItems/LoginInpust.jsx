import React from "react";
import "../../Css/loginPages.css";
import { FaRegUser } from "react-icons/fa6";

const LoginInpust = () => {
  return (
    <>
      <div className="loginInput">
        <div className="anadiv">
          <span>salan</span>
          <div className="inp">
            <FaRegUser className="icon" />
            <input type="text" placeholder="Type your username " />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default LoginInpust;
