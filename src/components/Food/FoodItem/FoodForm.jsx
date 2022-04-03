import React, { useRef, useState } from "react";
import style from "./FoodForm.module.css";
import InputFood from "../../UI/InputFood";

const FoodForm = ({ id }) => {
  const inputRef = useRef();

  // error checking state
  const [isAmountValid, setIsAmountValid] = useState(true);

  const submitHanlder = e => {
    e.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNum = +enteredAmount; // convert from string to number

    // error checking
    if (
      enteredAmountNum < 1 ||
      enteredAmountNum > 5 ||
      enteredAmount.trim().length === 0
    ) {
      setIsAmountValid(false);
      return;
    }
  };

  return (
    <form className={style.form} onSubmit={submitHanlder}>
      <InputFood
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: 1,
          max: 10,
          defaultValue: 1,
        }}
      />
      <button>Add</button>
      {!isAmountValid && <p>Please input correct value (1-5)</p>}
    </form>
  );
};

export default FoodForm;
