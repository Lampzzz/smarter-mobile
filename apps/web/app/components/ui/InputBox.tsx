import React from "react";

const InputBox = ({
  type = "text",
  placeholder = "password",
  className = "w-full mb-3 p-3 border rounded-lg",

}) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};
export default InputBox;
