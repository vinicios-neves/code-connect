import type { ReactNode } from 'react'

interface AuthTemplateProps {
  banner: ReactNode
  form: ReactNode
}

export function AuthTemplate({ banner, form }: AuthTemplateProps) {
  return (
    <div className="min-h-screen bg-[#16171b] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative watermark C's */}
      <span
        aria-hidden="true"
        className="absolute left-[-80px] top-1/2 -translate-y-1/2 text-[320px] font-bold text-[#1e1f26] select-none pointer-events-none leading-none"
      >
        C
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-[320px] font-bold text-[#1e1f26] select-none pointer-events-none leading-none"
      >
        C
      </span>

      {/* Auth card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#1e1f26] rounded-2xl overflow-hidden shadow-2xl flex min-h-[520px]">
        {/* Left: banner */}
        <div className="hidden md:block w-[45%] flex-shrink-0">
          {banner}
        </div>

        {/* Right: form */}
        <div className="flex-1 flex items-center justify-center">
          {form}
        </div>
      </div>
    </div>
  )
}
