import React from "react";
import MyContainer from "@/components/shares/MyContainer";
import MyTitle from "@/components/shares/MyTitle";
import ProductCard from "@/components/cards/ProductCard";
import { getProducts } from "../actions/products";

export default async function Products() {
  const products = await getProducts();

  return (
    <MyContainer>
      <MyTitle>Products {products.length}</MyTitle>

      {/* product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-7">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </MyContainer>
  );
}
