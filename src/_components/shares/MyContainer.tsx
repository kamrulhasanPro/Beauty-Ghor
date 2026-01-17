import React from "react";

const MyContainer = ({ children }: { children: React.ReactNode }) => {
  return <section className="max-w-11/12 mx-auto py-5">{children}</section>;
};

export default MyContainer;
