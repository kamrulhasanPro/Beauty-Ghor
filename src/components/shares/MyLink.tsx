import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const path = usePathname();
  console.log(path);
  const activeColor = path === href;
  return (
    <Link
      href={href}
      className={`text-sm font-medium hover:text-primary transition-colors ${activeColor && "text-primary"}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;
