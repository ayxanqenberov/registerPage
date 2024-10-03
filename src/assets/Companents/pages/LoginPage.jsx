import React from "react";
import "../../Css/loginPages.css";
import LoginInpust from "../OtherItems/LoginInpust";
// import { FaRegUser } from "react-icons/fa6";
// import { FaLock } from "react-icons/fa";
// import { FiEye } from "react-icons/fi";
// import { FiEyeOff } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const getSign = () =>{
    navigate("/SignUpPage")
  }
  return (
    <main>
      <section id="loginSect">
        <div id="login">
          <span className="textLogin">login</span>
          <div className="center">
            <div className="infosForLogin">
              <LoginInpust />
              <LoginInpust />
            </div>
            <div className="help">
              <a href="#">Forgot Password?</a>
            </div>
            <div id="bttn">
              <button>LOGIN</button>
            </div>
          </div>
          <div className="usingTools">
            <p>Or Sign Up Using</p>
            <div className="signWithTool">
              <FaFacebookF className="toolIcon" />
              <FaTwitter className="toolIcon" />
              <FaGoogle className="toolIcon" />
            </div>
          </div>
          <div className="signUpPart">
            <p>Or Sign Up Using</p>
            <span onClick={getSign}>SIGN UP</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
