import { FC } from "react";
import "./style.css";
import { ResultsProps } from "./interfaces";

export const ResultContainer: FC<ResultsProps> = ({ dateDifference }) => {
  const { day: day, month: month, year: year } = dateDifference || {};

  return (
    <div className="results_container">
      <div className="numbers_wrapper" key="year">
        <p animate={{ opacity: 1 }}>{year}</p>
        <p>years</p>
      </div>
      <div className="numbers_wrapper" key="month">
        <p animate={{ opacity: 1 }}>{month}</p>
        <p>months</p>
      </div>
      <div className="numbers_wrapper" key="day">
        <p animate={{ opacity: 1 }}>{day}</p>
        <p>days</p>
      </div>
    </div>
  );
};
