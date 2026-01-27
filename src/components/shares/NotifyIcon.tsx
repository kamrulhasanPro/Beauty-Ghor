import React from "react";

const NotifyIcon = ({
  children,
  value,
  click,
}: {
  children: React.ReactNode;
  value: string[];
  click?: () => void;
}) => {
  return (
    <div className="flex items-center justify-center relative cursor-pointer">
      <div
        className={`${value?.length === 0 && "hidden"} w-4 h-4 text-white text-[12px] rounded-full bg-pink-500 absolute -right-4 -top-2 -z-10 flex items-center justify-center`}
      >
        {value?.length}
      </div>
      {children}
    </div>
  );
};

export default NotifyIcon;
