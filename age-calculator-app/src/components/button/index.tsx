import { FC } from "react";
import "./style.css";
import arrowIcon from "../../assets/images/icon-arrow.svg";

export const Button: FC = () => {
  return (
    <>
      <span></span>
      <button type="submit">
        <img src={arrowIcon} alt="calculate_button" />
      </button>
    </>
  );
};
