import { CartProvider } from "@/contexts/AddCartContext";
import React, { useContext } from "react";

const useCart = () => {
  const context = useContext(CartProvider);

  if (!context) {
    throw new Error("Not found any cart.");
  }

  return context;
};

export default useCart;
