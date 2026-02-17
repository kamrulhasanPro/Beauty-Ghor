"use client";
import useCart from "@/Hooks/useCart";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";

const AddToCard = ({ id }: { id: string }) => {
  const { state, dispatch } = useCart();

  const isCarted: boolean = state.cart.some((item) => item.id === id);

  const handleClick = (id: string) => {
    if (isCarted) {
      dispatch({ type: "REMOVE", payload: { id } });
    } else {
      dispatch({ type: "ADD", payload: { id } });
    }
  };

  return (
    <>
      <button
        onClick={() => handleClick(id)}
        className={`bg-primary text-white px-6 py-3 rounded-lg hover:bg-pink-500 duration-300 cursor-pointer flex items-center gap-1.5 ${isCarted && "bg-red-400 hover:hover:bg-red-500"}`}
      >
        <ShoppingCartIcon /> {isCarted ? "Remove" : "Add"} to Cart
      </button>
    </>
  );
};

export default AddToCard;
