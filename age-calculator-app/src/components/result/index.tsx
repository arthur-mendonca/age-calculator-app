import { FC } from "react";
import "./style.css";
import { ResultsProps } from "./interfaces";

export const ResultContainer: FC<ResultsProps> = ({ dateDifference }) => {
  const { day: day, month: month, year: year } = dateDifference || {};

  return (
    <div className="results_container">
      <div className="numbers_wrapper">
        <p>{year} </p> <p>years</p>
      </div>
      <div className="numbers_wrapper">
        <p>{month}</p>
        <p>months</p>
      </div>
      <div className="numbers_wrapper">
        <p>{day}</p>
        <p>days</p>
      </div>
    </div>
  );
};
