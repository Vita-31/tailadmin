import React, { FC } from "react";

import { ListBlockItem } from "./ListBlockItem";

interface ListBlockProps {
  title: string;
  items: {
    icon: Function;
    title: string;
    free: boolean;
    link: string | null;
    list?: {
      title: string;
      free: boolean;
      link: string;
    }[];
  }[];
}

export const ListBlock: FC<ListBlockProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="font-medium text-sm text-dark-darken uppercase pl-[15px]">
        {title}
      </div>
      <ul className="flex flex-col gap-[6px]">
        {items.map((menuItem, idx) => (
          <ListBlockItem
            key={idx}
            icon={menuItem.icon}
            title={menuItem.title}
            free={menuItem.free}
            link={menuItem.link}
            list={menuItem?.list}
          />
        ))}
      </ul>
    </div>
  );
};
