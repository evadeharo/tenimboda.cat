"use client";

import { ark } from "@ark-ui/react/factory";
import { cx } from "class-variance-authority";
import type { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <ark.button
      type="button"
      className={cx(
        "bg-white rounded-full shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.875rem] pt-2.5 pb-2 text-button-mobile lg:text-button",
        "hover:bg-yellow transition-colors duration-300"
      )}
    >
      {children}
    </ark.button>
  );
}
