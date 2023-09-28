import { Dispatch, Ref, SetStateAction } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputsProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  register: UseFormRegisterReturn<string>;
  type: string;
  errors: FieldError | undefined;
}

export interface FormProps {
  day: string;
  month: string;
  year: string;
  setDay: Dispatch<SetStateAction<string>>;
  setMonth: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<DateDifferenceProps> | null>;
  dateDifference: (inputDateStr: string) => DateDifferenceProps;
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
