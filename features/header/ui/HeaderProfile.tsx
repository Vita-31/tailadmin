import React, { FC } from "react";
import { HeaderProfileHead } from "./HeaderProfileHead";

interface HeaderProfileProps {}

export const HeaderProfile: FC<HeaderProfileProps> = () => {
  return (
    <div className="relative">
      <HeaderProfileHead />
    </div>
  );
};
