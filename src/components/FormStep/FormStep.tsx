import React, { ReactNode } from "react";
import Image from "next/image";

import { icons } from "@/constants";

import "./styles.css";

const FormStep = ({
  icon = "info",
  title = "",
  text = "",
  stepContainerClassName = "",
  stepFieldsClassName = "",
  stepTextClassName = "",
  stepTitleClassName = "",
  iconClassName = "",
  children,
}: FormStepProps) => {
  return (
    <div className={`step ${stepContainerClassName}`}>
      {icon && (
        <Image
          className={`${iconClassName}`}
          src={icons[icon]}
          alt="step icon"
          width={64}
          height={64}
        />
      )}
      <h3 className={`step-title ${stepTitleClassName}`}>{title}</h3>
      {text && <p className={`step-text ${stepTextClassName}`}>{text}</p>}
      <div className={`step-fields-container ${stepFieldsClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default FormStep;

interface FormStepProps {
  icon: "love" | "info" | "dice" | null;
  title: string;
  text?: string;
  children: ReactNode;
  stepContainerClassName?: string;
  stepTitleClassName?: string;
  stepTextClassName?: string;
  stepFieldsClassName?: string;
  iconClassName?: string;
}
