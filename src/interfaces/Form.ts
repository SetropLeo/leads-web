export interface IAssessmentForm {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  visa: string[];
  profDataUrl: string;
  detailments: string;
  resume: File | null;
}

export type IFormFieldError = Record<string, string>;
