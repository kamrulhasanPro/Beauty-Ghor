import React from "react";
import MyContainer from "@/_components/shares/MyContainer";
import MyTitle from "@/_components/shares/MyTitle";
import ProductCard from "@/_components/cards/ProductCard";

export default function Products() {
  return (
    <MyContainer>
      <MyTitle>Products</MyTitle>

      {/* product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-7">
        {[...Array(6)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </MyContainer>
  );
}
