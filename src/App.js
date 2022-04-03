import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Food from "./components/Food/Food";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/cart-context";

const App = () => {
  const [isCartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {isCartShow && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Food />
      </main>
    </CartProvider>
  );
};

export default App;
