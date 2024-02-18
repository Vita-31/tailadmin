import { FC } from "react";
import Arrow from "@/public/images/chevron-up.svg";
import Image from "next/image";
import { Dropdown } from "./Dropdown";

interface ListBlockMenuProps {
  icon: HTMLImageElement;
  title: string;
  list?: [];
}

export const ListBlockMenu: FC<ListBlockMenuProps> = ({
  icon,
  title,
  list,
}) => {
  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="flex items-center gap-[10px] py-2 pl-[15xp] pr-3 text-dark-light font-medium text-base cursor-pointer hover:"
      >
        <Image
          src={icon}
          className="w-[18px] h-[18px] shrink-0"
          alt="arrow"
          title="arrow"
          width="1"
          height="1"
          decoding="async"
        />
        {title}
        {list && (
          <Image
            src={Arrow}
            className="w-[18px] h-[18px] shrink-0 ml-auto"
            alt="arrow"
            title="arrow"
            width="1"
            height="1"
            decoding="async"
          />
        )}
      </button>
      {list && <Dropdown list={list} />}
    </div>
  );
};
