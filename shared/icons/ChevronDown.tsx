import React, { FC } from "react";

interface ChevronDown {
  color: string;
}

export const ChevronDown: FC<ChevronDown> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.4107 6.91083C4.73614 6.58539 5.26378 6.58539 5.58922 6.91083L9.99996 11.3216L14.4107 6.91083C14.7361 6.58539 15.2638 6.58539 15.5892 6.91083C15.9147 7.23626 15.9147 7.7639 15.5892 8.08934L10.5892 13.0893C10.2638 13.4148 9.73614 13.4148 9.41071 13.0893L4.4107 8.08934C4.08527 7.7639 4.08527 7.23626 4.4107 6.91083Z"
        fill={color ? color : "#637381"}
      />
    </svg>
  );
};
