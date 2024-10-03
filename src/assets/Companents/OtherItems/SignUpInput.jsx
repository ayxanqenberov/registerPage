import React from "react";

const SignUpInput = ({label,placeholder}) => {
  return (
    <div>
      <span>{label}</span>
      <input type="text" placeholder={placeholder} required/>
      <div className="line"></div>
    </div>
  );
};

export default SignUpInput;
