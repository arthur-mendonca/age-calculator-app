import { FC } from "react";
import "./style.css";
import { ResultsProps } from "./interfaces";

export const ResultContainer: FC<ResultsProps> = ({ dateDifference }) => {
  const { day: day, month: month, year: year } = dateDifference || {};

  return (
    <div className="results_container">
      <div className="numbers_wrapper" key="year">
        {month ? <p>{year} </p> : <p id="result_placeholder"> -- </p>}
        <p>years</p>
      </div>
      <div className="numbers_wrapper" key="month">
        {month ? <p>{month} </p> : <p id="result_placeholder"> -- </p>}
        <p>months</p>
      </div>
      <div className="numbers_wrapper" key="day">
        {month ? <p>{day} </p> : <p id="result_placeholder"> -- </p>}
        <p>days</p>
      </div>
    </div>
  );
};
