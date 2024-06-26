import { FC, useEffect, useRef, useState } from "react";
import { AccordionItem, ButtonIcon } from "@/ui";
import { Bell } from "@/icons";
import { HeaderNotificationDropdown } from "./HeaderNotificationDropdown";

interface HeaderNotificationProps {}

export const HeaderNotification: FC<HeaderNotificationProps> = () => {
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
        header={
          <ButtonIcon>
            <Bell />
          </ButtonIcon>
        }
        body={<HeaderNotificationDropdown />}
      />
    </div>
  );
};
