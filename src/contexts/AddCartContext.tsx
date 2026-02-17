"use client";
import { CartAction, CartContextType, CartStateType } from "@/types/types";
import React, { createContext, useReducer, useState } from "react";

export const CartProvider = createContext<CartContextType | null>(null);

export const AddCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // initial cartItems
  const initialState: CartStateType = {
    cart: [],
  };

  // reducer
  const reducer = (state: CartStateType, action: CartAction) => {
    switch (action.type) {
      case "ADD": {
        return {
          cart: [...state.cart, { id: action.payload.id, quantity: 1 }],
        };
      }
      case "REMOVE": {
        const remaining = state.cart.filter(
          (item) => item.id !== action.payload.id,
        );

        return { cart: [...remaining] };
      }
    }
  };

  // state
  const [state, dispatch] = useReducer(reducer, initialState);

  // pass data
  const CartItemsProduct: CartContextType = { state, dispatch };

  return (
    <CartProvider.Provider value={CartItemsProduct}>
      {children}
    </CartProvider.Provider>
  );
};
