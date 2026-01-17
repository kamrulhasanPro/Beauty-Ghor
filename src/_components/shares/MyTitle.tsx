import React from "react";

const MyTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-3xl text-center font-medium text-primary">{children}</h2>;
};

export default MyTitle;
