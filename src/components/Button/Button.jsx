import React from "react";
import "./Button.css";

const Button = ({ text, icon, onClick }) => {
  return (
    <button className="flex app-button" onClick={onClick}>
      {icon ? icon : ""}
      {text}
    </button>
  );
};

export default Button;
