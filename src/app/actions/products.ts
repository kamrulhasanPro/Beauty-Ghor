import { Product } from "@/types/types";
const baseURL = "http://localhost:1000";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${baseURL}/api/products`);

  if (!res.ok) {
    throw new Error("Products Get problem");
  }

  const data = await res.json();
  return data;
}

// each product
export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${baseURL}/api/products/${id}`);

  const data = await res.json();
  return data;
}
