import * as React from 'react'
import { cn } from '@/lib/utils'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn('flex min-h-[80px] w-full rounded-[var(--radius,0.65rem)] border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring,243_75%_59%))] focus-visible:ring-offset-1 disabled:opacity-50', className)} {...props} />
  ),
)

Textarea.displayName = 'Textarea'
export default Textarea
