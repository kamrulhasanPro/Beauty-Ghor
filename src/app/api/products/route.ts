import { axiosPublic } from "@/Hooks/axiosPublic";
import { NextResponse } from "next/server";

export async function GET() {
  const { data } = await axiosPublic.get("/products");
  return NextResponse.json(data);
}
