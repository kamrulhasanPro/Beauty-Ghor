"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MyLink from "./MyLink";

export default function Navbar() {
  const navList = (
    <>
      <MyLink href="/">Home</MyLink>
      <MyLink href="/products">Products</MyLink>
      <MyLink href="/about">About</MyLink>
      <Button size="sm" className="cursor-pointer hover:bg-pink-500 transition">
        Login
      </Button>
    </>
  );
  return (
    <header className="w-full shadow">
      <div className="max-w-7xl w-11/12 mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          <span className="text-pink-400">Beauty</span> Ghor
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">{navList}</nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden cursor-pointer">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="duration-300">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">{navList}</nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}
