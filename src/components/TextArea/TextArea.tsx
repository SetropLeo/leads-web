"use client";

import React from "react";
import AntTextArea from "antd/es/input/TextArea";

const TextArea = ({
  maxLength = undefined,
  showCount = false,
  placeholder = "",
  className = "",
  height = "",
  width = "",
  id = "",
  name = "",
  resize = true,
  value = "",
  onChange = () => {},
}: TextAreaProps) => {
  return (
    <AntTextArea
      id={id}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      showCount={showCount}
      className={className}
      style={{
        height,
        width,
        resize: resize ? "vertical" : "none",
      }}
    />
  );
};

export default TextArea;

interface TextAreaProps {
  showCount?: boolean;
  maxLength?: number;
  placeholder?: string;
  className?: string;
  height?: string;
  width?: string;
  resize?: boolean;
  id?: string;
  name?: string;
  value: string
  onChange: (val: string) => void;
}
