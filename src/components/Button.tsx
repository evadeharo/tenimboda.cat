"use client";

import { ark } from "@ark-ui/react/factory";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "class-variance-authority";
import type { ReactNode } from "react";

const buttonVariants = cva(
  "rounded-full shadow-[0_4px_8.7px_0_rgba(0,0,0,0.25)] px-[1.875rem] pt-2.5 pb-2 text-button-mobile lg:text-button transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-yellow text-black",
        "text-blue": "text-blue hover:bg-[#F2F2F2]",
        "bg-blue": "bg-blue text-white hover:bg-[#000AD1]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  asChild = false,
  className,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <ark.button
      asChild={asChild}
      type="button"
      onClick={onClick}
      className={cx(buttonVariants({ variant }), className)}
    >
      {children}
    </ark.button>
  );
}
