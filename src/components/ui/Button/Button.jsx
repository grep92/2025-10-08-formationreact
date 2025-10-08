import React from "react";
import bstyle from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={bstyle.Button} style={{...props.mystyle}} data-testid="Button">
      {props.value}
    </button>
  );
};

export default Button;
