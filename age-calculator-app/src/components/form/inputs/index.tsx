import { FC } from "react";
import "./style.css";
import { InputsProps } from "../interfaces";

export const Input: FC<InputsProps> = ({
  placeholder,
  value,
  label,
  register,
  type,
  errors,
  onChange,
}) => {
  return (
    <fieldset className="input_container">
      <label htmlFor={placeholder}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        {...register}
        onChange={onChange}
      />
      {errors && <p className="error font-italic">{errors.message}</p>}
    </fieldset>
  );
};
