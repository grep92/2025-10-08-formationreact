import React from "react";
import bstyle from "./Button.module.css";

interface IButtonProps {
  mystyle?: object
  bgcolor?: 'tomato'|'skyblue'|'aquamarine'
  children: string | React.ReactElement | Array<string|React.ReactElement>
  type?: 'button' |'reset' | 'submit'
}

// FC = Functional Component.
// Définition de l'interface du composant react.
const Button: React.FC<IButtonProps> = ({children, mystyle, bgcolor, type = 'button'}) => {
  console.log(children);
  return (
    <button 
      type={type}
      className={bstyle.Button} 
      style={{...mystyle , backgroundColor: bgcolor}} 
      data-testid="Button">
      {children}
    </button>
  );
};

export default Button;
