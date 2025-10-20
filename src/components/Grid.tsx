import { cx } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: ReactNode;
};

export default function Grid({ className, children, ...props }: GridProps) {
  return (
    <div
      className={cx(
        className,
        "grid grid-cols-4 md:grid-cols-12 gap-[var(--grid-gutter)]",
        "px-[var(--container-padding)]"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
