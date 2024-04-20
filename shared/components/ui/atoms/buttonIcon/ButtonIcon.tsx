import React, { FC } from "react";

interface ButtonIconProps {
  children: React.ReactNode;
}

export const ButtonIcon: FC<ButtonIconProps> = ({ children }) => {
  return (
    <button className="w-9 h-9 rounded-full border border-silver bg-gray flex items-center justify-center">
      {children}
    </button>
  );
};
