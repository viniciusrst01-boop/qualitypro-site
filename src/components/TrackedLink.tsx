"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventLabel: string;
  eventLocation: string;
};

export default function TrackedLink({
  children,
  eventLabel,
  eventLocation,
  href = "",
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        track("cta_click", {
          label: eventLabel,
          location: eventLocation,
          destination: href,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
