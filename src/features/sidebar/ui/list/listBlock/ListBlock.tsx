import React, { FC } from "react";
import { ListBlockMenu } from "./ListBlockMenu";

interface ListBlockProps {
  title: string;
  items?: any[];
}

export const ListBlock: FC<ListBlockProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="font-medium text-sm text-dark-darken uppercase pl-[15px]">
        {title}
      </div>
      <div className="flex flex-col gap-[6px]">
        {items?.map((menuItem, idx) => (
          <ListBlockMenu
            key={idx}
            icon={menuItem.icon}
            title={menuItem.title}
            list={menuItem.list}
          />
        ))}
      </div>
    </div>
  );
};
