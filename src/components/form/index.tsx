import "./style.css";
import { Input } from "./inputs";
import { FormProps, iUseFormProps } from "./interfaces";
import { Button } from "../button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dateSchema } from "../../schemas/schema";

export const Form: React.FC<FormProps> = ({
  day,
  month,
  year,
  setDay,
  setMonth,
  setYear,
  dateDifference,
  setResult,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUseFormProps>({ resolver: zodResolver(dateSchema) });

  const onSubmit = (data: iUseFormProps) => {
    const result = dateDifference(
      data.day + "/" + data.month + "/" + data.year
    );

    setResult(result);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs_wrapper">
        <Input
          label="DAY"
          placeholder="DD"
          value={day}
          register={register("day")}
          type="day"
          errors={errors.day}
          onChange={(e) => setDay(e.target.value)}
        />
        <Input
          label="MONTH"
          placeholder="MM"
          value={month}
          register={register("month")}
          type="text"
          errors={errors.month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <Input
          label="YEAR"
          placeholder="YYYY"
          value={year}
          register={register("year")}
          type="year"
          errors={errors.year}
          onChange={(e) => setYear(e.target.value, errors)}
        />
      </div>
      <div className="button_wrapper">
        <Button />
      </div>
    </form>
  );
};
