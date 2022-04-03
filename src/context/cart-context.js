import React, { useReducer } from "react";

export const CartContext = React.createContext({
  foods: [],
  totalAmount: 0,
  addFood: item => {},
  removeFood: id => {},
});

const defaultCartValue = {
  foods: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newFoodsVal = state.foods.concat(action.item);
    const newTotalAmountVal =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      foods: newFoodsVal,
      totalAmount: newTotalAmountVal,
    };
  }
  return defaultCartValue;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartValue
  );

  const addToFoodFormHandler = item => {
    dispatchCartState({ type: "ADD_ITEM", item: item });
  };

  const removeFromFoodFormHandler = id => {
    dispatchCartState({ type: "REMOVE_ITEM", id: id });
  };

  const cartValue = {
    foods: cartState.foods,
    totalAmount: cartState.totalAmount,
    addFood: addToFoodFormHandler,
    removeFood: removeFromFoodFormHandler,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
