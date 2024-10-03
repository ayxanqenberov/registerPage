import React from "react";
import "../../Css/signUp.css";
import SignUpInput from "../OtherItems/SignUpInput";
const SignUpPage = () => {
  return (
    <main>
      <section id="signUp">
        <div className="imgSignUp"></div>
        <div className="textSign">
          <div className="texts">
            <span>Sign Up</span>
            <div className="inputs">
              <SignUpInput label={"Full Name"} placeholder={"Name..."} />
              <SignUpInput label={"Email"} placeholder={"Email address..."} />
              <SignUpInput label={"Username"} placeholder={"Username..."} />
              <SignUpInput label={"Password"} placeholder={"************"} />
              <SignUpInput
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
