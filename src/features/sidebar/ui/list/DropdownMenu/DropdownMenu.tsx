import React, { FC } from "react";
import { DropdownMenuItem } from "./DropdownMenuItem";

interface DropdownMenuProps {
  list?: {
    title: string;
    free: boolean;
    link: string;
  }[];
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ list }) => {
  return (
    <ul className="flex flex-col gap-[10px] pl-11 duration-500 h-0 overflow-hidden">
      {list?.map((item, idx) => (
        <DropdownMenuItem
          key={idx}
          title={item.title}
          free={item.free}
          link={item.link}
        />
      ))}
    </ul>
  );
};
