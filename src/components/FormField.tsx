import type { FieldMetadata } from "@conform-to/react"
import { cx } from "class-variance-authority"

export type FormFieldProps = {
  label?: string
  errors?: FieldMetadata["errors"]
  className?: string
  children: React.ReactNode
  labelClassName?: string
}

export function FormField({
  label,
  children,
  // errors,
  className,
  labelClassName,
}: FormFieldProps) {
  return (
    <label className={cx("labelWrapper", className)}>
      <div className="flex w-full items-center justify-between">
        <span className={cx(labelClassName || "text-subtitle-s-mobile lg:text-subtitle-s")}>
          {label ?? null}
        </span>
      </div>

      {children}
      {/* <InputError>{errors}</InputError> */}
    </label>
  )
}