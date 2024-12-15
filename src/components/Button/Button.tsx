import React from "react";

const Button = ({
  children = null,
  className = "",
  disabled = false,
  id = "",
  loading = false,
  onClick = () => {},
  style = {},
}: ButtonComponentProps) => {
  return (
    <button
      className={className}
      disabled={disabled || loading}
      id={id}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

interface ButtonComponentProps {
  onClick?: () => void;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
  loading?: boolean;
}
