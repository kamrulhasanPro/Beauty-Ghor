import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Navbar from "@/components/shares/Navbar";

const poppinsFont = Poppins({
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Beauty Ghor",
  description:
    "beauty ghor is a cosmetics and body uses products e-commerce platform.",
  // authors: "Kamrul Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased`}>
        <Navbar />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
