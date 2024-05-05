import React, { FC, useEffect, useRef, useState } from "react";
import { HeaderProfileHead } from "./HeaderProfileHead";
import { HeaderProfileDropdown } from "./HeaderProfileDropdown";
import { AccordionItem } from "@/ui";

interface HeaderProfileProps {}

export const HeaderProfile: FC<HeaderProfileProps> = () => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener("click", ({ target }) => {
      handleClickOutside(target);
    });

    return () => {
      document.body.removeEventListener("click", ({ target }) =>
        handleClickOutside(target)
      );
    };
  }, []);

  const handleClickOutside = (target: EventTarget | null) => {
    if (dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
      setActive(false);
    }
  };

  const handleToggle = () => {
    setActive((active) => {
      return !active;
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <AccordionItem
        handleToggle={() => handleToggle()}
        active={active}
        header={<HeaderProfileHead active={active} />}
        body={<HeaderProfileDropdown />}
      />
    </div>
  );
};
