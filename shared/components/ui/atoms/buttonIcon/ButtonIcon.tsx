import React, { FC } from "react";

interface ButtonIconProps {
  children: React.ReactNode;
}

export const ButtonIcon: FC<ButtonIconProps> = ({ children }) => {
  return (
    <button className="w-8 h-8 rounded-full border border-silver bg-gray flex items-center justify-center">
      {children}
    </button>
  );
};
