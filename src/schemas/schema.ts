import { z } from "zod";

export const dateSchema = z
  .object({
    day: z
      .string()
      .max(2, "Max of 2 characters")
      .regex(/^\d{1,2}$/)
      .refine((value) => value.trim().length > 0, "This field is required")
      .refine((value) => {
        const day = parseInt(value);
        return day >= 1 && day <= 31;
      }, "Must be a valid day"),
    month: z
      .string()
      .max(2, "Max of 2 characters")
      .regex(/^\d{1,2}$/)
      .default("--")
      .refine((value) => value.trim().length > 0, "This field is required")

      .refine((value) => {
        const month = parseInt(value);
        return month >= 1 && month <= 12;
      }, "Must be a valid month"),
    year: z
      .string()
      .max(4, "Max of 4 characters")
      .regex(/^\d{4}$/)
      .refine((value) => value.trim().length > 0, "This field is required")
      .refine((value) => {
        const year = parseInt(value);
        const currentYear = new Date().getFullYear();
        return year >= 1900 && year <= currentYear;
      }, "Must be a valid year"),
  })
  .refine((data) => {
    const day = parseInt(data.day);
    const month = parseInt(data.month);
    const year = parseInt(data.year);
    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() + 1 === month;
  }, "Invalid date");
