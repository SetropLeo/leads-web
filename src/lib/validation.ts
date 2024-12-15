import z from "zod";

const countryDefaultMessage = "Please, select a country";
const visaDefaultMessage = "Please, select at least one visa option";
const profDataUrlDefaultMessage = "Please, provide a valid URL";
const detailmentsDefaultMessage = "Please, provide more details";
const resumeDefaultMessage = "Please, upload a PDF file";

export const formSchema = z.object({
  firstName: z.string().min(1).max(30),
  lastName: z.string().min(1).max(30),
  email: z.string().email(),
  country: z
    .string()
    .min(1, { message: countryDefaultMessage })
    .max(10, { message: countryDefaultMessage }),
  visa: z
    .array(
      z.enum(["0-1", "EB-1A", "EB-2-NIW", "unknown"], {
        message: visaDefaultMessage,
      })
    )
    .nonempty(visaDefaultMessage),
  profDataUrl: z.string().url(profDataUrlDefaultMessage),
  resume: z
    .instanceof(File, { message: resumeDefaultMessage })
    .refine((file) => file.type === "application/pdf"),
  detailments: z.string().min(10, { message: detailmentsDefaultMessage }),
});
