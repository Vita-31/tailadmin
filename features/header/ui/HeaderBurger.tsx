import React, { FC } from "react";

interface HeaderBurgerProps {}

export const HeaderBurger: FC<HeaderBurgerProps> = () => {
  return (
    <div className="w-5 h-3 flex flex-col items-center justify-center relative">
      <span className="absolute left-0 right-0 top-0 w-full h-[2px] rounded bg-silver-dark"></span>
      <span className="absolute left-0 right-0 top-2/4 -translate-y-1/2 w-full h-[2px] rounded bg-silver-dark"></span>
      <span className="absolute left-0 right-0 bottom-0 w-full h-[2px] rounded bg-silver-dark"></span>
    </div>
  );
};
