"use client";

import { FC } from "react";
import { ListBlock } from "./ListBlock";
import { list } from "../lib/constants";

export const List: FC = () => {
  return (
    <div className="flex flex-col gap-[25px] overflow-y-auto scrollbar-none">
      {list.map((menu, idx) => (
        <ListBlock key={idx} title={menu.title} items={menu.items} />
      ))}
    </div>
  );
};
