import type { LabelHTMLAttributes } from 'react'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label({ children, className = '', ...props }: LabelProps) {
  return (
    <label
      className={`text-sm text-gray-300 font-medium ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}
