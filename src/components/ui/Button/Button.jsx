import React from "react";
import "./Button.css";

const Button = (props) => {
  console.trace(props);
  return (
    <button className="Button" data-testid="Button">
      {props.value}
    </button>
  );
};

export default Button;
