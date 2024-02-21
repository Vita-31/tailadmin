import Link from "next/link";
import React, { FC } from "react";

interface DropdownMenuItemProps {
  title: string;
  free: boolean;
  link: string;
}

export const DropdownMenuItem: FC<DropdownMenuItemProps> = ({
  title,
  free,
  link,
}) => {
  return (
    <li className="flex first:pt-[15px] last:pb-[18px]">
      <Link
        href={link}
        className="flex items-center w-full justify-between gap-2 text-dark-light hover:text-white duration-300 text-base font-medium"
      >
        {title}
        {!free && (
          <span className="flex items-center text-sm text-white font-medium px-[7px] bg-primary rounded-[4px]">
            PRO
          </span>
        )}
      </Link>
    </li>
  );
};
