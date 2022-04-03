import React from "react";
import style from "./FoodList.module.css";
import CardFood from "../UI/CardFood";
import FoodItem from "./FoodItem/FoodItem";

const DUMMY_FOODS = [
  {
    id: "m1",
    name: "Pecel Lele",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Bubur Ayam",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Ayam Geprek",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Indomie Special",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const FoodList = () => {
  return (
    <section className={style.food}>
      <CardFood>
        <ul>
          {DUMMY_FOODS.map(food => {
            return (
              <FoodItem
                id={food.id}
                key={food.id}
                name={food.name}
                desc={food.description}
                price={food.price}
              />
            );
          })}
        </ul>
      </CardFood>
    </section>
  );
};

export default FoodList;
