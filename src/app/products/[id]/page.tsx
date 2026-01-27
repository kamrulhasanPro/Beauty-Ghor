import { getProduct } from "@/app/actions/products";
import ProductDetailsCard from "@/components/cards/ProductDetailsCard";
import MyContainer from "@/components/shares/MyContainer";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProduct(id);
  return (
    <MyContainer>
      <ProductDetailsCard product={product}/>
    </MyContainer>
  );
};

export default page;
