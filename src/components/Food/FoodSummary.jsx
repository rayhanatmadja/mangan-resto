import React from "react";
import style from "./FoodSummary.module.css";

const FoodSummary = () => {
  return (
    <section className={style.summary}>
      <h2>Serve Delicious Food From Heart</h2>
      <p>
        We make many delicious food, especially food from Indonesian country,
        with different taste, different cooking style, but same delicious every
        time you eat
      </p>
    </section>
  );
};

export default FoodSummary;
