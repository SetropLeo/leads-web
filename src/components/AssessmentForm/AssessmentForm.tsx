"use client";

import React, { FormEvent, useState } from "react";
import { Button, Checkbox, Input } from "antd";
import z from "zod";

import TextArea from "antd/es/input/TextArea";
import { CountrySelect, FileUpload, FormStep } from "@/components";
import { initialFormData } from "@/constants";

import { formSchema } from "@/lib/validation";
import { IFormFieldError } from "@/interfaces";
import { useUIStore } from "@/stores";
import { notify } from "@/utils/notificationService";
import "./styles.css";

const AssessmentForm = () => {
  const setShowConfirmationModal = useUIStore(
    (state) => state.setShowConfirmationModal
  );
  const [formValues, setFormValues] = useState(initialFormData);
  const [errors, setErrors] = useState<IFormFieldError>({});

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await formSchema.parseAsync(formValues);
      setTimeout(() => setShowConfirmationModal(true), 300);
      setFormValues(initialFormData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error);
        const fieldErrors = error.flatten().fieldErrors as unknown;
        setErrors(fieldErrors as Record<string, string>);
        notify("error", "Error", "Please fill in all required fields");
      }
    }
  };

  const onChangeField = (name: string, value: string | null) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form
        className="steps-container"
        onSubmit={handleFormSubmit}
        name="assessment-form"
      >
        <FormStep
          icon="info"
          title={stepContent.first.title}
          text={stepContent.first.text}
        >
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
        </FormStep>

        <FormStep icon="dice" title={stepContent.second.title}>
          <div className="field-container">
            <Checkbox.Group
              className="checkbox-group"
              options={radioSelectOptions}
              value={formValues.visa}
              onChange={(selectedList) => {
                setFormValues((prev) => ({ ...prev, visa: selectedList }));
              }}
            />
            {errors.visa && <p className="form_error">{errors.visa}</p>}
          </div>
        </FormStep>

        <FormStep
          icon="info"
          title={stepContent.fourth.title}
          text={stepContent.fourth.text}
          stepFieldsClassName="file-upload-container"
        >
          <div className="field-container">
            <FileUpload
              file={formValues.resume}
              onUploadFile={(file) => {
                setFormValues((prev) => ({ ...prev, resume: file }));
              }}
            />
            {errors.resume && <p className="form_error">{errors.resume}</p>}
          </div>
        </FormStep>

        <FormStep
          icon="love"
          title={stepContent.third.title}
          stepFieldsClassName="textarea-container"
        >
          <div className="field-container">
            <TextArea
              id="detailments"
              placeholder={textAreaText}
              className="input-field textarea-field"
              style={{ height: "176px", resize: "vertical" }}
              value={formValues.detailments}
              onChange={({ target }) =>
                onChangeField("detailments", target.value)
              }
            />
            {errors.detailments && (
              <p className="form_error">{errors.detailments}</p>
            )}
          </div>
        </FormStep>

        <Button
          color="default"
          variant="solid"
          htmlType="submit"
          className="submit-button"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default AssessmentForm;

const radioSelectOptions = [
  { label: "0-1", value: "0-1", style: { fontWeight: 500 } },
  { label: "EB-1A", value: "EB-1A", style: { fontWeight: 500 } },
  { label: "EB-2 NIW", value: "EB-2-NIW", style: { fontWeight: 500 } },
  { label: "I don't know", value: "unknown", style: { fontWeight: 500 } },
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
  fourth: {
    title: "Let us know about your experience",
    text: "Please provide us with your resume so we can better understand your professional background",
  },
};

const textAreaText = `What is your current status and when does it expire?\nWhat is your past immigration history? Are you looking for long term permanent residency or short-term employment visa or both? Are there any timeline considerations?`;
