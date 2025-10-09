import React, { useEffect, useState } from "react";
import cmpstyle from "./Button.module.css";
interface IButtonProps {
  style?: object;
  bgcolor: "tomato" | "skyblue" | "aquamarine";
  type?: "button" | "reset" | "submit";
  clickAction?: (unArg: string) => void;
  children: string | React.ReactElement | Array<string | React.ReactElement>;
}
const Button: React.FC<IButtonProps> = ({
  style,
  clickAction,
  bgcolor,
  children,
  type = "button",
}) => {
  const [clicked, setclicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setclicked(false);
    }, 230);
  }, [clicked]);
  const buttonOnClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setclicked(true);
    //console.log("button clicked", evt);
    if (clickAction) {
      clickAction("on m'a violement cliquer dessus");
    }
  };
  return (
    <button
      type={type}
      className={`${cmpstyle.Button}${clicked ? " " + cmpstyle.clicked : ""}`}
      style={{ ...style, backgroundColor: bgcolor }}
      data-testid="Button"
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
