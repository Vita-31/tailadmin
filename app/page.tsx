"use client";

import { AccordionItem } from "@/ui";
import { useState } from "react";

const list = [
  {
    name: "Valerii",
  },
  { name: "Vita" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  return (
    <main>
      {list.map((item, index) => (
        <AccordionItem
          key={index}
          handleToggle={() => setActiveIndex(index)}
          active={index === activeIndex}
          header={
            <div className="flex items-center gap-[10px] py-2 pl-4 pr-3 text-silver-light font-medium text-base cursor-pointer duration-300">
              header
            </div>
          }
          body={<>{item.name}</>}
        />
      ))}
    </main>
  );
}
