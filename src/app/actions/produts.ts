import { Product } from "@/types/types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products");

  if(!res.ok){
    throw new Error("Products Get problem")
  }

  const data = await res.json();
  return data;
}
