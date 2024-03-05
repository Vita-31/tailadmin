import React, { FC } from "react";
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
}

export const ListBlockItemBody: FC<ListBlockItemBodyProp> = ({ list }) => {
  const pathName = usePathname();

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
          >
            {item.title}

            {!item.free && <SidebarBadge text="PRO" />}
          </Link>
        </li>
      ))}
    </ul>
  );
};
