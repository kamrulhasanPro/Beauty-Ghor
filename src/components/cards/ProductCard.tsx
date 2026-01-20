import { Button } from "@/components/ui/button";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const { _id, title, originalPrice, discountPercentage, price } =
    product || {};

  // const discount = (originalPrice * discountPercentage) / 100;

  return (
    <div className="border rounded-2xl overflow-hidden hover:bg-primary/10 duration-300 hover:scale-[1.03] relative group">
      {/* discount box */}
      <div className="absolute inset-0 bg-red-400 h-5 w-fit text-sm text-white px-2 rounded-br-sm z-30">
        {discountPercentage}% off
      </div>

      {/* image */}
      <figure className="rounded-2xl overflow-hidden">
        <Link href={`/products/${_id}`}>
          <Image
            src="https://bk.shajgoj.com/storage/2025/12/sku-11589-y5ou.jpg"
            alt="product image"
            width={400}
            height={400}
            className="w-full object-cover aspect-square group-hover:scale-105 duration-300 z-20"
          />
        </Link>
      </figure>

      {/* text content */}
      <div className="mt-3 px-2">
        <Link
          href={`/products/${_id}`}
          className="text-sm text-center text-gray-700 line-clamp-2"
        >
          {title}{" "}
        </Link>

        <h5 className="text-center text-xl font-semibold mt-4 text-">
          <small className="text-red-300 mr-1 text-sm">
            <del>{originalPrice}$</del>
          </small>
          {price}$
        </h5>
      </div>

      {/* action */}
      <Button className="w-full rounded-none mt-4 cursor-pointer">
        Add Cart
      </Button>
    </div>
  );
};

export default ProductCard;
