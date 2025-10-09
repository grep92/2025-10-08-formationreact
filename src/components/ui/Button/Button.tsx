import React from "react";
import bstyle from "./Button.module.css";

interface IButtonProps {
  mystyle?: object
  bgcolor?: 'tomato' | 'skyblue' | 'aquamarine'
  children: string | React.ReactElement | Array<string | React.ReactElement>
  type?: 'button' | 'reset' | 'submit'
  clickAction?: (evtArg:string) => void;
}

// FC = Functional Component.
// Définition de l'interface du composant react.
// Autrement {children, mystyle, bgcolor, type = 'button'} : IButtonProps
const Button: React.FC<IButtonProps> = ({ children, mystyle, bgcolor, type = 'button', clickAction }) => {

  const buttonOnClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(evt.altKey);
    if ( clickAction ) {
      clickAction("⚡Aie!");
    }
    else {
      console.log("Pas d'action définie")
    }
  }

  return (
    <button
      type={type}
      className={bstyle.Button}
      style={{ ...mystyle, backgroundColor: bgcolor }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
