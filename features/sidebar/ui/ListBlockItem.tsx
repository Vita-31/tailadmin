"use client";

import { FC } from "react";
import Link from "next/link";
import { AccordionItem } from "@/ui";
import { ListBlockItemHeader } from "./ListBlockItemHeader";
import { ListBlockItemBody } from "./ListBlockItemBody";
import { usePathname } from "next/navigation";

interface ListBlockItemProps {
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
  active: boolean;
  handleToggle: () => void;
}

export const ListBlockItem: FC<ListBlockItemProps> = ({
  icon,
  title,
  list,
  free,
  link,
  count,
  active,
  handleToggle,
}) => {
  const pathName = usePathname();
  const activeLink = pathName === link;
  return (
    <li className="flex flex-col">
      {list && (
        <AccordionItem
          handleToggle={() => handleToggle()}
          active={active}
          header={
            <ListBlockItemHeader
              icon={icon}
              title={title}
              list={list}
              free={free}
              count={count}
              active={active}
            />
          }
          body={<ListBlockItemBody list={list} />}
        />
      )}
      {link && (
        <Link href={link}>
          <ListBlockItemHeader
            icon={icon}
            title={title}
            free={free}
            count={count}
            activeLink={activeLink}
          />
        </Link>
      )}
    </li>
  );
};
