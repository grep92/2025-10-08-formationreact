import React, { useEffect, useState } from "react";
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

  const [buttonClicked, setButtonClicked] = useState(false);
  
  const buttonOnClick = () => {
    setButtonClicked(true);

    if ( clickAction ) {
      clickAction("⚡Aie!");
    }
    else {
      console.log("Pas d'action de clic définie");
    }
  }

  useEffect(() => {
    if (buttonClicked) {
      console.log(`Bouton appuyé`);
      setTimeout(() => {
        console.log(`On enlève`);
        setButtonClicked(false);
      }, 300);
    }
  }, [buttonClicked]);

  return (
    <button
      type={type}
      className={`${bstyle.Button} ${buttonClicked? bstyle.clicked : ''}`}
      style={{ ...mystyle, backgroundColor: bgcolor }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
