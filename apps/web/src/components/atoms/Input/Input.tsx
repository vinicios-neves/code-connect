import type { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full bg-[#2a2b35] text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 border border-transparent focus:border-green-400 transition-colors ${className}`}
      {...props}
    />
  )
}
