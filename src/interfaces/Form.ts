export interface IAssessmentForm {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  visa: string[];
  profDataUrl: string;
  detailments: string;
}

export type IFormFieldError = Record<string, string>