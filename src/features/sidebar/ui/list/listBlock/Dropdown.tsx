import React, { FC } from "react";
import { DropdownItem } from "./DropdownItem";

interface DropdownProps {
  list: any[];
}

export const Dropdown: FC<DropdownProps> = ({ list }) => {
  return (
    <ul className="flex flex-col h-0 overflow-hidden">
      {list.map((item, idx) => (
        <DropdownItem key={idx} title={item.title} free={item.free} />
      ))}
    </ul>
  );
};
