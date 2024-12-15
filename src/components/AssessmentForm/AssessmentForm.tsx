"use client";

import { Button, CountrySelect, RadioSelect, TextArea } from "@/components";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { Input } from "antd";
import z from "zod";

import LoveIcon from "../../../public/icons/love-icon.png";
import DiceIcon from "../../../public/icons//dice-icon.png";
import InfoIcon from "../../../public/icons/info-icon.png";

import { formSchema } from "@/lib/validation";
import { IAssessmentForm, IFormFieldError } from "@/interfaces";
import "./styles.css";

const AssessmentForm = () => {
  const [formValues, setFormValues] = useState(initialFormData);
  const [errors, setErrors] = useState<IFormFieldError>({});

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      console.log({ formValues });
      await formSchema.parseAsync(formValues);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors as unknown;
        setErrors(fieldErrors as Record<string, string>);
      }
    }
  };

  const onChangeField = (name: string, value: string | null) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      className="steps-container"
      onSubmit={handleFormSubmit}
      name="assessment-form"
    >
      <div className="step">
        <Image src={InfoIcon} alt="info" width={64} height={64} />
        <h3 className="step-title">{stepContent.first.title}</h3>
        <p className="step-text">{stepContent.first.text}</p>
        <div className="step-fields-container">
          <div className="field-container">
            <Input
              id="firstName"
              className="input-field"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={({ target }) =>
                onChangeField("firstName", target.value)
              }
            />
            {errors.firstName && (
              <p className="form_error">{errors.firstName}</p>
            )}
          </div>
          <div className="field-container">
            <Input
              id="lastName"
              className="input-field"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={({ target }) => onChangeField("lastName", target.value)}
            />
            {errors.lastName && <p className="form_error">{errors.lastName}</p>}
          </div>
          <div className="field-container">
            <Input
              id="email"
              className="input-field"
              placeholder="Email"
              value={formValues.email}
              onChange={({ target }) => onChangeField("email", target.value)}
            />
            {errors.email && <p className="form_error">{errors.email}</p>}
          </div>
          <div className="field-container">
            <CountrySelect
              id="country"
              className="input-field"
              value={formValues.country}
              onChange={(value) => onChangeField("country", value)}
            />
            {errors.country && <p className="form_error">{errors.country}</p>}
          </div>
          <div className="field-container">
            <Input
              className="input-field"
              placeholder="Linkedin / Personal Website URL"
              value={formValues.profDataUrl}
              onChange={({ target }) =>
                onChangeField("profDataUrl", target.value)
              }
            />
            {errors.profDataUrl && (
              <p className="form_error">{errors.profDataUrl}</p>
            )}
          </div>
        </div>
      </div>

      <div className="step">
        <Image src={DiceIcon} alt="info" width={64} height={64} />
        <h3 className="step-title">{stepContent.second.title}</h3>
        <div className="step-fields-container">
          <div className="field-container">
            <RadioSelect
              options={radioSelectOptions}
              value={formValues.visa}
              onChange={(value) => onChangeField("visa", value)}
              radioStyle="square"
            />
            {errors.visa && <p className="form_error">{errors.visa}</p>}
          </div>
        </div>
      </div>

      <div className="step">
        <Image src={LoveIcon} alt="info" width={64} height={64} />
        <h3 className="step-title">{stepContent.second.title}</h3>
        <div className="step-fields-container text-area-container">
          <div className="field-container">
            <TextArea
              id="detailments"
              placeholder={textAreaText}
              className="input-field textarea-field"
              height="176px"
              value={formValues.detailments}
              onChange={(value) => onChangeField("detailments", value)}
            />
            {errors.detailments && (
              <p className="form_error">{errors.detailments}</p>
            )}
          </div>
        </div>
      </div>

      <Button type="submit" className="submit-button">
        Submit
      </Button>
    </form>
  );
};

export default AssessmentForm;

const radioSelectOptions = [
  { name: "0-1", value: "0-1" },
  { name: "EB-1A", value: "EB-1A" },
  { name: "EB-2 NIW", value: "EB-2-NIW" },
  { name: "I don't know", value: "unknown" },
];

const stepContent = {
  first: {
    title: "Want to understand your visa options?",
    text: "Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.",
  },
  second: {
    title: "Visa categories of interest?",
  },
  third: {
    title: "How can we help you?",
  },
};

const textAreaText = `What is your current status and when does it expire?\nWhat is your past immigration history? Are you looking for long term permanent residency or short-term employment visa or both? Are there any timeline considerations?`;

const initialFormData: IAssessmentForm = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  visa: "",
  profDataUrl: "",
  detailments: "",
};
