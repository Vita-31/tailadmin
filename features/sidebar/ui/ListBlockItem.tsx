"use client";

import dynamic from "next/dynamic";
import { ChevronUp } from "@/shared/icons/ChevronUp";
import { FC } from "react";
import { DropdownMenu } from "./DropdownMenu";

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
  free,
}) => {
  return (
    <li className="flex flex-col">
      <button
        type="button"
        className="flex items-center gap-[10px] py-2 pl-4 pr-3 text-dark-light font-medium text-base cursor-pointer duration-300"
      >
        <span className="w-[18px] h-[18px] shrink-0">{icon()}</span>
        {title}
        {list && (
          <span className="w-[18px] h-[18px] shrink-0 ml-auto rotate-180">
            <ChevronUp />
          </span>
        )}
        {!free && (
          <span className="flex items-center text-sm text-white font-medium px-2 bg-primary rounded-[4px]  ml-auto">
            PRO
          </span>
        )}
      </button>
      {list && <DropdownMenu list={list} />}
    </li>
  );
};
