import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/shares/Navbar";

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
        <main className="max-w-7xl w-11/12 mx-auto">{children}</main>
      </body>
    </html>
  );
}
