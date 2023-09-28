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
  const [days, setDay] = useState("");
  const [months, setMonth] = useState("");
  const [years, setYear] = useState("");

  const [result, setResult] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);

  const dateDifference = (inputDateStr: string) => {
    const [days, months, years] = inputDateStr.split("/").map(Number);
    const inputDate = new Date(years, months - 1, days);

    const currentDate = new Date();

    const rawDifference = differenceInMonths(currentDate, inputDate);
    console.log("raw difference", rawDifference);

    const yearDifference = differenceInYears(currentDate, inputDate);
    const monthDifference = rawDifference % 12;
    console.log("calculated month difference", monthDifference);

    console.log("month difference", monthDifference);
    const advancedDate = new Date(inputDate);
    advancedDate.setFullYear(inputDate.getFullYear() + yearDifference);
    advancedDate.setMonth(inputDate.getMonth() + monthDifference);

    const daysDifference = differenceInDays(currentDate, advancedDate);
    return {
      year: yearDifference,
      month: monthDifference,
      day: daysDifference,
    };
  };

  return (
    <div className="container">
      <Form
        days={days}
        month={months}
        year={years}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        dateDifference={dateDifference}
        setResult={setResult}
      />

      <ResultContainer dateDifference={result} />
    </div>
  );
};
