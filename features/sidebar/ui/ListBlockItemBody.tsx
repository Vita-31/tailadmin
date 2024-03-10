import React, { FC, useEffect } from "react";
import Link from "next/link";
import { SidebarBadge } from "./SidebarBadge";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface ListBlockItemBodyProp {
  list?: {
    title: string;
    free: boolean;
    link: string;
  }[];
  parentIndex: number;
}

export const ListBlockItemBody: FC<ListBlockItemBodyProp> = ({
  list,
  parentIndex,
}) => {
  const pathName = usePathname();

  useEffect(() => {
    list?.forEach((item) => {
      if (item.link === pathName) {
        sessionStorage.setItem("activeIndex", JSON.stringify(parentIndex));
      }
    });
  }, [list, pathName, parentIndex]);

  const setActiveList = (index: number) => {
    sessionStorage.setItem("activeIndex", JSON.stringify(index));
  };

  return (
    <ul className="flex flex-col gap-2 pl-11">
      {list?.map((item, idx) => (
        <li key={idx} className="first:pt-4 last:pb-4">
          <Link
            href={item.link}
            className={classNames(
              "text-silver-darken text-base flex justify-between duration-300 hover:text-white",
              {
                "text-white": pathName === item.link,
              }
            )}
            onClick={() => setActiveList(parentIndex)}
          >
            {item.title}

            {!item.free && <SidebarBadge text="PRO" />}
          </Link>
        </li>
      ))}
    </ul>
  );
};
