import React, { useContext } from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../context/cart-context";

const HeaderCartButton = ({ showCart }) => {
  const authCtx = useContext(CartContext);

  const initialValue = 0;

  // prevItem = food (per element in foods array)
  const badgeOfCartItems = authCtx.foods.reduce((prevItem, currentItem) => {
    return prevItem.amount + currentItem;
  }, initialValue);

  return (
    <button className={style.button} onClick={showCart}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={style.badge}>{badgeOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
