import React, { ButtonHTMLAttributes, FC } from "react";
import Styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "small";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`${Styles.button} ${Styles[variant]} ${Styles[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
