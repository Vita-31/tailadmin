"use client";

import { FC } from "react";
import { Search } from "./ui/HeaderSearch";
import { ButtonIcon, Switcher } from "@/ui";
import { Message } from "@/icons";
import { HeaderNotification } from "./ui/HeaderNotification";

export const Header: FC = () => {
  return (
    <header className="bg-white h-20 w-full flex justify-between pl-9 py-4 pr-[30px] border-1 border-silver items-center shadow-[0_1px_0px_0px_rgba(226,232,240,0.3)]">
      <Search />

      <div className="flex items-center gap-7">
        <Switcher />

        <div className="flex gap-4 items-center">
          <HeaderNotification />

          <ButtonIcon>
            <Message />
          </ButtonIcon>
        </div>
      </div>
    </header>
  );
};
