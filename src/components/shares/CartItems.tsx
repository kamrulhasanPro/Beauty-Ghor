"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import useCart from "@/Hooks/useCart";
import { HandbagIcon } from "lucide-react";

const CartItems = () => {
  const { state } = useCart();
  const products = state.cart;
  console.log(products);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center justify-center relative cursor-pointer">
          <div
            className={`${products?.length === 0 && "hidden"} w-4 h-4 text-white text-[12px] rounded-full bg-pink-500 absolute -right-4 -top-2 -z-10 flex items-center justify-center`}
          >
            {products?.length}
          </div>
          <HandbagIcon />
        </div>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        hello
      </SheetContent>
    </Sheet>
  );
};

export default CartItems;
