"use client";

import React, { FC, useEffect, useState } from "react";

import { ListBlockItem } from "./ListBlockItem";

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

  const handleToggle = (index: number) => {
    const activeIndexStorage = sessionStorage.getItem("activeIndex");
    const activeIndex =
      activeIndexStorage !== null ? JSON.parse(activeIndexStorage) : null;
    if (activeIndex) {
      setActiveIndex(activeIndex);
    } else {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  useEffect(() => {
    sessionStorage.setItem("activeIndex", JSON.stringify(activeIndex));
  }, [activeIndex]);

  return (
    <div className="flex flex-col gap-[15px]">
      <div className="font-medium text-sm text-silver-darken uppercase pl-[15px]">
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
            count={menuItem.count}
            active={activeIndex === idx}
            handleToggle={() => handleToggle(idx)}
          />
        ))}
      </ul>
    </div>
  );
};
