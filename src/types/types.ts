import React from "react";

export interface Product {
  _id: string;
  slug: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  stock: number;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  description: string;
  keyBenefits: string[];
  ingredients: string[];
  howToUse: string[];
  skinType: string[];
  size: string;
  countryOfOrigin: string;
  rating: number;
  reviewsCount: number;
  createdAt: string;
}

export interface params {
  id: string;
}

export interface CartStateType {
  cart: {
    id: string;
    quantity: number;
  }[];
}

export interface CartContextType {
  state: CartStateType;
  dispatch: React.Dispatch<CartAction>;
}

export type CartAction =
  | { type: "ADD"; payload: { id: string } }
  | { type: "REMOVE"; payload: { id: string } };
