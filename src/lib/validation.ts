import z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1).max(30),
  lastName: z.string().min(1).max(30),
  email: z.string().email(),
  country: z.string().min(1).max(10),
  visa: z.string().min(1).max(20),
  profDataUrl: z.string().url(),
  detailments: z.string().min(10),
});
