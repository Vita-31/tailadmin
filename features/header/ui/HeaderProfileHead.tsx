import React, { FC } from "react";
import Image from "next/image";
import { ChevronDown } from "@/icons";
import classNames from "classnames";

interface HeaderProfileHeadProps {
  active: boolean;
}

export const HeaderProfileHead: FC<HeaderProfileHeadProps> = ({ active }) => {
  return (
    <button className="flex items-center" type="button">
      <div>
        <div className="font-medium text-sm">Thomas Anree</div>
        <div className="font-medium text-xs text-silver-dark">Ux Designer</div>
      </div>
      <div className="w-12 h-12 rounded-full overflow-hidden ml-4">
        <Image
          src="/images/avatar.png"
          className="w-full h-full object-cover"
          alt="Thomas Anree"
          title="Thomas Anree"
          width="1"
          height="1"
          decoding="async"
        />
      </div>
      <div
        className={classNames("ml-3 rotate-0 duration-500", {
          "rotate-180": active,
        })}
      >
        <ChevronDown color="#637381" />
      </div>
    </button>
  );
};
