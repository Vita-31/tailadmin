import React, { FC } from "react";

interface SidebarBadgeProp {
  text: string | number;
}

export const SidebarBadge: FC<SidebarBadgeProp> = ({ text }) => {
  return (
    <span className="flex items-center text-sm text-white font-medium px-2 bg-primary rounded-[4px] ml-auto capitalize">
      {text}
    </span>
  );
};
