import { cx } from "class-variance-authority";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Grid({ className, children, ...props }: GridProps) {
  return (
    <div
      className={cx(
        className,
        "grid grid-cols-4 md:grid-cols-12 gap-[var(--grid-gutter)]"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
