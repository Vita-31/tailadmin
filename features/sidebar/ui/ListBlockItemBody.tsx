import React, { FC } from "react";
import { SidebarBadge } from "./SidebarBadge";

interface ListBlockItemBodyProp {
  list?: {
    title: string;
    free: boolean;
    link: string;
  }[];
}

export const ListBlockItemBody: FC<ListBlockItemBodyProp> = ({ list }) => {
  return (
    <ul className="flex flex-col gap-2 pl-11">
      {list?.map((item, idx) => (
        <li key={idx} className="first:pt-4 last:pb-4">
          <a
            href={item.link}
            className="text-dark-darken text-base flex justify-between duration-300 hover:text-white"
          >
            {item.title}

            {!item.free && <SidebarBadge text="PRO" />}
          </a>
        </li>
      ))}
    </ul>
  );
};
