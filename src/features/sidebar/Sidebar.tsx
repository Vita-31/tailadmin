import React from "react";
import Logo from "./ui/logo/Logo";
import { List } from "./ui/list/List";

const Sidebar = () => {
  return (
    <div className="bg-dark h-screen w-[280px] shrink-0 py-10 px-6 flex flex-col gap-y-11">
      <Logo />

      <List />
    </div>
  );
};

export default Sidebar;
