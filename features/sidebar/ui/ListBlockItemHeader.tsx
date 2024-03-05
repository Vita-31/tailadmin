import React, { FC } from "react";
import { ChevronUp } from "@/shared/icons/ChevronUp";
import { SidebarBadge } from "./SidebarBadge";
import classNames from "classnames";

interface ListBlockItemHeaderProp {
  icon: Function;
  title: string;
  free: boolean;
  count?: number;
  activeLink?: boolean;
  list?: {
    title: string;
    free: boolean;
    link: string;
  }[];
  active?: boolean;
}

export const ListBlockItemHeader: FC<ListBlockItemHeaderProp> = ({
  icon,
  title,
  list,
  free,
  active,
  count,
  activeLink,
}) => {
  return (
    <span
      className={classNames(
        "flex items-center gap-[10px] py-2 pl-4 pr-3 text-silver-light font-medium text-base cursor-pointer duration-300 hover:text-silver-darken",
        {
          "bg-dark-light rounded hover:text-silver-light": active || activeLink,
        }
      )}
    >
      <span className="w-[18px] h-[18px] shrink-0">{icon()}</span>
      {title}
      {list && (
        <span
          className={classNames(
            "w-[18px] h-[18px] shrink-0 ml-auto rotate-180 duration-300",
            {
              "rotate-0": active,
            }
          )}
        >
          <ChevronUp />
        </span>
      )}
      {!free && <SidebarBadge text="PRO" />}
      {count && <SidebarBadge text={count} />}
    </span>
  );
};
