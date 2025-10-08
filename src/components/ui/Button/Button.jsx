import React from "react";
import bstyle from "./Button.module.css";

const Button = (props) => {
  console.trace(props);
  return (
    <button className={bstyle.Button} data-testid="Button">
      {props.value}
    </button>
  );
};

export default Button;
