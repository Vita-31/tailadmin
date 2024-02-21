import React, { FC } from "react";
import { Search } from "./ui/HeaderSearch";

export const Header: FC = () => {
  return (
    <header className="bg-white h-20 w-full flex justify-between pl-9 pr-[30px] border-1 border-silver">
      <Search />
    </header>
  );
};
