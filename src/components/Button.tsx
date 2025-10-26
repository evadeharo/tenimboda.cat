import type { ReactNode, ButtonHTMLAttributes } from "react";
import { ark } from "@ark-ui/react/factory";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "class-variance-authority";

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

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export default function Button({
  children,
  asChild = false,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <ark.button
      asChild={asChild}
      className={cx(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </ark.button>
  );
}
