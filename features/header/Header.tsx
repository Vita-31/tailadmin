"use client";

import React, { FC } from "react";
import { Search } from "./ui/HeaderSearch";
import { Switcher } from "@/ui";

export const Header: FC = () => {
  return (
    <header className="bg-white h-20 w-full flex justify-between pl-9 py-4 pr-[30px] border-1 border-silver items-center shadow-[0_1px_0px_0px_rgba(226,232,240,0.3)]">
      <Search />

      <div className="flex items-center">
        <Switcher />
      </div>
    </header>
  );
};
