import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn('flex h-10 w-full rounded-[var(--radius,0.65rem)] border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring,243_75%_59%))] focus-visible:ring-offset-1 disabled:opacity-50', className)}
      {...props}
    />
  ),
)

Input.displayName = 'Input'
export default Input
