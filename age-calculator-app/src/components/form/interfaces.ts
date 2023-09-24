import { Dispatch, Ref, SetStateAction } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputsProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export interface FormProps {
  ref: Ref<HTMLInputElement>;
  day: string;
  month: string;
  year: string;
  setDay: Dispatch<SetStateAction<string>>;
  setMonth: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<DateDifferenceProps>>;
  dateDifference: DateDifference;
}

export interface iUseFormProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: "day" | "month" | "year";
}

export interface DateDifferenceProps {
  day: number;
  month: number;
  year: number;
}
