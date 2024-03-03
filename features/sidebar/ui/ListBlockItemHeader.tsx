import React, { FC } from "react";
import { ChevronUp } from "@/shared/icons/ChevronUp";
import { SidebarBadge } from "./SidebarBadge";
import classNames from "classnames";

interface ListBlockItemHeaderProp {
  icon: Function;
  title: string;
  free: boolean;
  list?: {
    title: string;
    free: boolean;
    link: string;
  }[];
  active: boolean;
}

export const ListBlockItemHeader: FC<ListBlockItemHeaderProp> = ({
  icon,
  title,
  list,
  free,
  active,
}) => {
  return (
    <>
      <div
        className={classNames(
          "flex items-center gap-[10px] py-2 pl-4 pr-3 text-dark-light font-medium text-base cursor-pointer duration-300",
          {
            "": active,
            "": !active,
          }
        )}
      >
        <span className="w-[18px] h-[18px] shrink-0">{icon()}</span>
        {title}
        {list && (
          <span className="w-[18px] h-[18px] shrink-0 ml-auto rotate-180">
            <ChevronUp />
          </span>
        )}
        {!free && <SidebarBadge text="PRO" />}
      </div>
    </>
  );
};