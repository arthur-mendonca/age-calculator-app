import { z } from "zod";

export const dateSchema = z.object({
  day: z
    .string()
    .nonempty("This field is required")
    .max(2, "Max of 2 characters")
    .regex(/^\d{1,2}$/)
    .refine((value) => {
      const day = parseInt(value);
      return day >= 1 && day <= 31;
    }, "Must be a valid day"),
  month: z
    .string()
    .nonempty("This field is required")
    .max(2, "Max of 2 characters")
    .regex(/^\d{1,2}$/)
    .refine((value) => {
      const month = parseInt(value);
      return month >= 1 && month <= 12;
    }, "Must be a valid month"),
  year: z
    .string()
    .nonempty("This field is required")
    .max(4, "Max of 4 characters")
    .regex(/^\d{4}$/)
    .refine((value) => {
      const year = parseInt(value);
      const currentYear = new Date().getFullYear();
      return year >= 1900 && year <= currentYear;
    }, "Must be a valid year"),
});
