import { ChevronUp } from "@/src/shared/images/ChevronUp";
import { FC } from "react";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import Link from "next/link";

interface ListBlockItemProps {
  icon: Function;
  title: string;
  free: boolean;
  link: string | null;
  list?: {
    title: string;
    free: boolean;
    link: string;
  }[];
}

export const ListBlockItem: FC<ListBlockItemProps> = ({
  icon,
  title,
  list,
  link,
  free,
}) => {
  const openDropdown = () => {};
  return (
    <li className="flex flex-col ">
      <button
        type="button"
        className="flex items-center gap-[10px] py-2 pl-[15xp] pr-3 text-dark-light font-medium text-base cursor-pointer duration-300"
      >
        <span className="w-[18px] h-[18px] shrink-0">{icon()}</span>
        {title}
        {list && (
          <span className="w-[18px] h-[18px] shrink-0 ml-auto rotate-180">
            <ChevronUp />
          </span>
        )}
        {!free && (
          <span className="flex items-center text-sm text-white font-medium px-[7px] bg-primary rounded-[4px]  ml-auto">
            PRO
          </span>
        )}
      </button>
      {list && <DropdownMenu list={list} />}
    </li>
  );
};
