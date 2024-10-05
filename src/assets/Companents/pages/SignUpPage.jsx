import React from "react";
import "../../Css/signUp.css";
import SignUpInput from "../OtherItems/SignUpInput";
import { useFormik } from "formik";
const SignUpPage = () => {
  const [values] = useFormik({
    initialValues:{
      name:"",
      email:"",
      user:"",
      password:"",
      passwordRepeat:"",
    }
  })
  return (
    <main>
      <section id="signUp">
        <div className="imgSignUp"></div>
        <div className="textSign">
          <div className="texts">
            <span>Sign Up</span>
            <div className="inputs">
              <SignUpInput id={"name"} label={"Full Name"} placeholder={"Name..."} />
              <SignUpInput id={"email"} label={"Email"} placeholder={"Email address..."} />
              <SignUpInput id={"user"} label={"Username"} placeholder={"Username..."} />
              <SignUpInput id={"password"} label={"Password"} placeholder={"************"} />
              <SignUpInput id={"passwordRepeat"}
                label={"Repeat Password"}
                placeholder={"************"}
              />
            </div>
            <div className="terms">
              <input type="checkbox" id="terms-checkbox" />
              <label htmlFor="terms-checkbox">
                <p>
                  I agree to the<span>terms of user</span>
                </p>
              </label>
            </div>
            <div className="finally">
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
