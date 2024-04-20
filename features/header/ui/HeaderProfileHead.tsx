import React, { FC } from "react";
import Image from "next/image";
import { ChevronDown } from "@/icons";

interface HeaderProfileHeadProps {}

export const HeaderProfileHead: FC<HeaderProfileHeadProps> = () => {
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
      <div className="ml-3">
        <ChevronDown color="#637381" />
      </div>
    </button>
  );
};
