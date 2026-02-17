import React from "react";

const MyContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <section className={`max-w-11/12 mx-auto py-5 ${className}`}>{children}</section>;
};

export default MyContainer;
