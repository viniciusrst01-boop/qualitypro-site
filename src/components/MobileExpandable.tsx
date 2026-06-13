"use client";

import { track } from "@vercel/analytics";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Children, ReactNode, useId, useState } from "react";

type MobileExpandableProps = {
  children: ReactNode;
  initialCount: number;
  section: string;
  expandLabel: string;
  collapseLabel?: string;
  className?: string;
  buttonClassName?: string;
};

export default function MobileExpandable({
  children,
  initialCount,
  section,
  expandLabel,
  collapseLabel = "Mostrar menos",
  className = "",
  buttonClassName = "",
}: MobileExpandableProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const items = Children.toArray(children);

  function toggleExpanded() {
    const nextExpanded = !expanded;
    setExpanded(nextExpanded);
    track("content_toggle", {
      section,
      action: nextExpanded ? "expand" : "collapse",
    });
  }

  return (
    <>
      <div id={contentId} className={className}>
        {items.map((item, index) => (
          <div
            key={index}
            className={
              index >= initialCount && !expanded ? "hidden md:block" : ""
            }
          >
            {item}
          </div>
        ))}
      </div>

      {items.length > initialCount && (
        <button
          type="button"
          aria-controls={contentId}
          aria-expanded={expanded}
          onClick={toggleExpanded}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold md:hidden ${buttonClassName}`}
        >
          {expanded ? collapseLabel : expandLabel}
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      )}
    </>
  );
}
