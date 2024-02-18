import { FC } from "react";
import { ListBlock } from "./listBlock/ListBlock";
import { list } from "../../lib/constants";

export const List: FC = () => {
  return (
    <div className="flex flex-col gap-[25px] overflow-y-auto">
      {list.map((menu, idx) => (
        <ListBlock key={idx} title={menu.title} items={menu.items} />
      ))}
    </div>
  );
};
