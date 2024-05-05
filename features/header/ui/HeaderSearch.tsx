import { SearchIcon } from "@/icons";
import { FC } from "react";

export const Search: FC = () => {
  return (
    <label className="flex items-center max-w-xs w-full 0 h-5">
      <span className="w-5 h-5 flex">
        <SearchIcon />
      </span>
      <input
        type="search"
        name="search"
        className="text-sm font-medium flex ml-3 lg:ml-5 w-full focus:outline-none placeholder:text-silver-dark placeholder:text-sm"
        placeholder="Type to search..."
      />
    </label>
  );
};
