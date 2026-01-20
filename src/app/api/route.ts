// import { Product } from "@/types/types";
// import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

// const serverURL = "http://localhost:1000";

// export async function getProducts(): Promise<Product[]> {
//   const { data } = await axios.get<Product[]>(`${serverURL}/products`);
//   return data;
// }

export function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    kamrul: "hasan",
  });
}
