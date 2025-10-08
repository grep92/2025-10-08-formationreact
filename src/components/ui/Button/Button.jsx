import React from "react";
import bstyle from "./Button.module.css";

const Button = ({children, mystyle, type = 'button'}) => {
  console.log(children);
  return (
    <button 
      type={type}
      className={bstyle.Button} 
      style={{...mystyle}} data-testid="Button">
      {children}
    </button>
  );
};

export default Button;
