import { Search } from "@/shared/components/ui/molecules/search/Search";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white h-20 w-full flex justify-between pl-9 pr-[30px] border-1 border-silver">
      <Search />
    </header>
  );
};

export default Header;
