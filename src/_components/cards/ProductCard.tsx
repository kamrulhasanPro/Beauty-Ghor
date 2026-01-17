import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  const discount = (150 * 20) / 100;

  return (
    <div className="border rounded-2xl overflow-hidden hover:bg-primary/10 duration-300 hover:scale-[1.03] relative group">
      {/* discount box */}
      <div className="absolute inset-0 bg-red-400 h-5 w-fit text-sm text-white px-2 rounded-br-sm z-30">
        20% off
      </div>

      {/* image */}
      <figure className="rounded-2xl overflow-hidden">
        <Image
          src="https://bk.shajgoj.com/storage/2025/12/sku-11589-y5ou.jpg"
          alt="product image"
          width={400}
          height={400}
          className="w-full object-cover aspect-square group-hover:scale-105 duration-300 z-20"
        />
      </figure>

      {/* text content */}
      <div className="mt-3 px-2">
        <p className="text-sm text-center text-gray-700 line-clamp-2">
          Lux Body Wash Black Orchid Scent & Juniper
        </p>

        <h4 className="text-center text-xl font-semibold mt-4 text-">
          <small className="text-red-300 mr-1 text-sm">
            <del>{discount}$</del>
          </small>
          150$
        </h4>
      </div>

      {/* action */}
      <Button className="w-full rounded-none mt-4 cursor-pointer">
        Add Cart
      </Button>
    </div>
  );
};

export default ProductCard;
