import React, { createContext, useState } from "react";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};
