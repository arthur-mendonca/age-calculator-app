import { useState } from "react";
import { Form } from "../form";
import { ResultContainer } from "../result";
import "./style.css";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export const Container: React.FC = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [result, setResult] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);

  const dateDifference = (inputDateStr: string) => {
    const [day, month, year] = inputDateStr.split("/").map(Number);
    const inputDate = new Date(year, month - 1, day);

    console.log(inputDate);
    console.log("inputDate");

    const currentDate = new Date();

    const yearDifference = differenceInYears(currentDate, inputDate);
    const monthDifference = differenceInMonths(currentDate, inputDate) % 12;

    console.log(yearDifference);
    console.log("yearDifference");
    console.log(monthDifference);
    console.log("monthDifference");

    const advancedDate = new Date(inputDate);
    advancedDate.setFullYear(inputDate.getFullYear() + yearDifference);
    advancedDate.setMonth(inputDate.getMonth() + monthDifference);

    const daysDifference = differenceInDays(currentDate, advancedDate);
    return setResult({
      year: yearDifference,
      months: monthDifference,
      days: daysDifference,
    });
  };

  return (
    <div className="container">
      <Form
        day={day}
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        dateDifference={dateDifference}
      />

      <ResultContainer dateDifference={result} />
    </div>
  );
};
