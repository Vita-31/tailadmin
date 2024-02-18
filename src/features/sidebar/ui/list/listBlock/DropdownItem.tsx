import { title } from "process";
import React, { FC } from "react";

interface DropdownItemProps {
  title: string;
  free: boolean;
}

export const DropdownItem: FC<DropdownItemProps> = ({ title, free }) => {
  return (
    <li>
      {title}
      {!free && <></>}
    </li>
  );
};
