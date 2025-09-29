import { cva } from "class-variance-authority";

const container = cva("mx-auto w-full", {
  variants: {
    padded: {
      true: "px-[var(--container-padding)]",
      false: "",
    },
  },
  defaultVariants: {
    padded: true,
  },
});

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  fluid?: boolean;
  padded?: boolean;
};

export default function Container({
  fluid,
  padded,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div className={container({ padded })} {...props}>
      {children}
    </div>
  );
}
