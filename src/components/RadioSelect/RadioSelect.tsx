"use client";

import { Radio, Space } from "antd";
import React from "react";
import "./styles.css";

const RadioSelect = ({
  direction = "vertical",
  radioStyle = "circle",
  options,
  onChange = () => {},
  value = "",
}: RadioSelectProps) => {
  return (
    <>
      <Radio.Group
        className={radioStyle}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <Space direction={direction}>
          {options?.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.name}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </>
  );
};

export default RadioSelect;

interface RadioSelectProps {
  onChange: (value: string) => void;
  value: string;
  direction?: "horizontal" | "vertical";
  options: { name: string; value: string }[];
  radioStyle?: "square" | "circle";
}
