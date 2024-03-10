"use client";

import React, { FC, useEffect, useState } from "react";

import { ListBlockItem } from "./ListBlockItem";
import { usePathname } from "next/navigation";

interface ListBlockProps {
  title: string;
  items: {
    icon: Function;
    title: string;
    free: boolean;
    link: string | null;
    count?: number;
    list?: {
      title: string;
      free: boolean;
      link: string;
    }[];
  }[];
}

export const ListBlock: FC<ListBlockProps> = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [savedIndex, setSavedIndex] = useState<number | null>(null);

  const pathName = usePathname();

  useEffect(() => {
    const activeIndexStorage = sessionStorage.getItem("activeIndex");
    const activeIndexSaved =
      activeIndexStorage !== null ? JSON.parse(activeIndexStorage) : null;

    if (pathName === "/") {
      setSavedIndex(null);
      sessionStorage.setItem("activeIndex", JSON.stringify(null));
    }

    if (activeIndexSaved !== null) {
      setSavedIndex(activeIndexSaved);
    }
  }, []);

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="font-medium text-sm text-silver-darken uppercase pl-[15px]">
        {title}
      </div>
      <ul className="flex flex-col gap-[6px]">
        {items.map((menuItem, idx) => (
          <ListBlockItem
            key={idx}
            index={idx}
            icon={menuItem.icon}
            title={menuItem.title}
            free={menuItem.free}
            link={menuItem.link}
            list={menuItem?.list}
            count={menuItem.count}
            active={activeIndex === idx}
            savedActive={savedIndex === idx}
            handleToggle={() =>
              setActiveIndex((prevIndex) => (prevIndex === idx ? null : idx))
            }
          />
        ))}
      </ul>
    </div>
  );
};
