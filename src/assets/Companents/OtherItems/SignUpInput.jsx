import React, { useRef } from "react";

const SignUpInput = ({ label, placeholder,id }) => {
  const afterline = useRef();
  const getLine = () => {
    afterline.current.style.display = "block";
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} onClick={getLine} type="text" placeholder={placeholder} required />
      <div className="line"></div>
      <div ref={afterline} className="afterLine"></div>
    </div>
  );
};

export default SignUpInput;
