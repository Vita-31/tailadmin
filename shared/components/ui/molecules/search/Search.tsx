import { SearchIcon } from "@/shared/icons/SearchIcon";
import { FC } from "react";

export const Search: FC = () => {
  return (
    <div className="flex items-center">
      <span className="w-5 h-5 flex">
        <SearchIcon />
      </span>
      <input
        type="search"
        className="text-sm font-medium flex ml-5"
        placeholder="Type to search..."
      />
    </div>
  );
};
