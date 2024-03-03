"use client";

import { FC, useState } from "react";
import { AccordionItem } from "@/ui";
import { ListBlockItemHeader } from "./ListBlockItemHeader";
import { ListBlockItemBody } from "./ListBlockItemBody";

interface ListBlockItemProps {
  icon: Function;
  title: string;
  free: boolean;
  link: string | null;
  list?: {
    title: string;
    free: boolean;
    link: string;
  }[];
}

export const ListBlockItem: FC<ListBlockItemProps> = ({
  icon,
  title,
  list,
  free,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <li className="flex flex-col">
      <AccordionItem
        handleToggle={handleToggle}
        active={isAccordionOpen}
        header={
          <ListBlockItemHeader
            icon={icon}
            title={title}
            list={list}
            free={free}
            active={isAccordionOpen}
          />
        }
        body={<ListBlockItemBody list={list} />}
      />
    </li>
  );
};
