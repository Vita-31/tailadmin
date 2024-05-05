"use client";

import { FC } from "react";
import { ButtonIcon, Switcher } from "@/ui";
import { Message } from "@/icons";
import { Search } from "./ui/HeaderSearch";
import { HeaderNotification } from "./ui/HeaderNotification";
import { HeaderProfile } from "./ui/HeaderProfile";
import { HeaderBurger } from "./ui/HeaderBurger";

export const Header: FC = () => {
  return (
    <header className="bg-white h-16 lg:h-20 w-full flex gap-5 justify-between px-4 py-3 lg:pl-9 lg:py-4 lg:pr-[30px] border-1 border-silver items-center shadow-[0_1px_0px_0px_rgba(226,232,240,0.3)]">
      <div className="lg:hidden">
        <ButtonIcon>
          <HeaderBurger />
        </ButtonIcon>
      </div>

      <Search />

      <div className="flex items-center gap-5 lg:gap-7">
        <Switcher />

        <div className="flex gap-2 lg:gap-4 items-center">
          <HeaderNotification />

          <div className="relative">
            <ButtonIcon>
              <span className="absolute w-3 h-3 rounded-full border-2 border-white bg-red top-0 right-0"></span>
              <Message />
            </ButtonIcon>
          </div>
        </div>

        <HeaderProfile />
      </div>
    </header>
  );
};
