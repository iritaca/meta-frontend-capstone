import React, { ButtonHTMLAttributes, FC } from "react";
import Styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "small";
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  children,
  ...rest
}) => {
  return (
    <button
      className={`${Styles.button} ${Styles[variant]} ${Styles[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
