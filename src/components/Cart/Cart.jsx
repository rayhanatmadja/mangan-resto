import React from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({ hideCart }) => {
  const DUMMY_ITEMS = [
    {
      id: "11",
      name: "Ayam Geprek",
      price: "12.99",
      amount: "2",
    },
  ];

  return (
    <Modal hideCart={hideCart}>
      <ul className={style["cart-items"]}>
        {DUMMY_ITEMS.map(item => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <div className={style.total}>
        <span>Total</span>
        <span>65.99</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={hideCart}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
