import Link from "next/link";
import React from "react";

export const HeaderProfileDropdown = () => {
  return (
    <ul className="absolute right-0 top-11 lg:top-14 border border-silver bg-white w-56 max-h-96 overflow-y-auto shadow-[0_8px_13px_-3px_rgba(0,0,0,0.07)]">
      <li className="flex">
        <Link
          href="/profile"
          className="py-3 px-5 text-sm text-dark-light duration-500 hover:text-silver-dark hover:bg-gray/40 w-full"
        >
          Профіль
        </Link>
      </li>

      <li className="flex">
        <button className="py-2 px-5 text-sm text-dark-light duration-500 hover:text-silver-dark hover:bg-gray/40 w-full text-left">
          Вийти
        </button>
      </li>
    </ul>
  );
};
