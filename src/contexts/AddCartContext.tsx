"use client";
import { CartContextType } from "@/types/types";
import React, { createContext, useState } from "react";

export const CartProvider = createContext<CartContextType | null>(null);

export const AddCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<string[]>([]);

  const addCart = (id: string) => {
    setProducts([...products, id]);
  };

  const whitelistProduct: CartContextType = {
    products,
    addCart,
  };

  return (
    <CartProvider.Provider value={whitelistProduct}>
      {children}
    </CartProvider.Provider>
  );
};
