import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

const variants: Record<string, string> = {
  default: 'bg-[hsl(var(--primary,243_75%_59%))] text-white',
  secondary: 'bg-zinc-100 text-zinc-900',
  destructive: 'bg-red-600 text-white',
  outline: 'border border-zinc-200 text-zinc-900',
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return <div className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', variants[variant], className)} {...props} />
}
