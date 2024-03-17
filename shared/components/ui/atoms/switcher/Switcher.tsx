import { Sun, Moon } from "@/icons";
import classNames from "classnames";
import { useState } from "react";

export const Switcher = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <button
      type="button"
      className="relative w-14 h-[30px] rounded-[32px] bg-silver"
      onClick={toggleTheme}
    >
      <span
        className={classNames(
          "absolute flex items-center justify-center drop-shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)] bg-white rounded-full w-6 h-6 top-[3px] left-[3px] shadow-[0px_-1px_1px_0px_inset_rgba(0,0,0,0.1)] duration-500",
          {
            "translate-x-full": darkTheme,
          }
        )}
      >
        <span
          className={classNames("absolute duration-500", {
            "opacity-0": darkTheme,
          })}
        >
          <Sun />
        </span>
        <span
          className={classNames("absolute duration-500", {
            "opacity-1": darkTheme,
            "opacity-0": !darkTheme,
          })}
        >
          <Moon />
        </span>
      </span>
    </button>
  );
};
