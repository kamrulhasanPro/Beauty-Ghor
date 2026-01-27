"use client";
import useCart from "@/Hooks/useCart";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";

const AddToCard = ({ id }: { id: string }) => {
  const {products, addCart } = useCart();
  const handleClick = (id: string) => {
    addCart(id);
  };

  return (
    <>
      <button
        onClick={() => handleClick(id)}
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-pink-500 duration-300 cursor-pointer flex items-center gap-1.5"
      >
        <ShoppingCartIcon /> {products?.length} Add to Cart
      </button>
    </>
  );
};

export default AddToCard;
