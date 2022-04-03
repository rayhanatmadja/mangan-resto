import React, { Fragment } from "react";
import style from "./Header.module.css";
import headerImg from "../../assets/header-food.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ showCart }) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>Mangan Resto</h1>
        <HeaderCartButton showCart={showCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={headerImg} alt="header-food-img" />
      </div>
    </Fragment>
  );
};

export default Header;
