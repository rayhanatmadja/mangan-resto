import React from "react";
import style from "./FoodItem.module.css";
import FoodForm from "./FoodForm";

const FoodItem = ({ name, desc, price, id }) => {
  return (
    <li className={style.food}>
      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div className={style.description}>{desc}</div>
        <div className={style.price}>$ {price.toFixed(2)}</div>
      </div>
      <div>
        <FoodForm id={id} />
      </div>
    </li>
  );
};

export default FoodItem;
