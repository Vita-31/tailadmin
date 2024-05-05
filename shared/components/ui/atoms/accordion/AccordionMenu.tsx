import classNames from "classnames";
import { FC, useRef } from "react";

interface AccordionItemProps {
  handleToggle: () => void;
  active?: boolean;
  savedActive?: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  handleToggle,
  active,
  savedActive,
  header,
  body,
}) => {
  const contentEl = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div onClick={() => handleToggle()}>{header}</div>
      <div
        ref={contentEl}
        className={classNames("duration-300 overflow-hidden", {
          "opacity-100 pointer-events-auto": active || savedActive,
          "opacity-0 pointer-events-none": !active && !savedActive,
        })}
        style={
          (active || savedActive) && contentEl.current
            ? { height: contentEl.current.scrollHeight }
            : { height: "0" }
        }
      >
        {body}
      </div>
    </>
  );
};
