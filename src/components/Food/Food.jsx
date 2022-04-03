import React, { Fragment } from "react";
import FoodList from "./FoodList";
import FoodSummary from "./FoodSummary";

const Food = () => {
  return (
    <Fragment>
      <FoodSummary />
      <FoodList />
    </Fragment>
  );
};

export default Food;
