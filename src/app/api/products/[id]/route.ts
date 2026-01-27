import { axiosPublic } from "@/Hooks/axiosPublic";
import { params } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<params> }) {
  const { id } = await params;
  const { data } = await axiosPublic.get(`/product/${id}`);
  return NextResponse.json(data);
}
