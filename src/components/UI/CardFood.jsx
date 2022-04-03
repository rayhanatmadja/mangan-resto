import React from "react";
import style from "./CardFood.module.css";

const CardFood = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};

export default CardFood;
