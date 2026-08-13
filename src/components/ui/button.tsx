import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const variants: Record<string, string> = {
  default: 'bg-[hsl(var(--primary,243_75%_59%))] text-white shadow-sm hover:opacity-90',
  outline: 'border border-zinc-200 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50',
  ghost: 'text-zinc-900 hover:bg-zinc-100',
  link: 'p-0 h-auto text-[hsl(var(--primary,243_75%_59%))] underline-offset-4 hover:underline',
  destructive: 'bg-red-600 text-white shadow-sm hover:bg-red-700',
  secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
}

const sizes: Record<string, string> = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-9 px-3 text-xs',
  lg: 'h-11 px-6 text-sm',
  icon: 'h-10 w-10',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius,0.65rem)] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring,243_75%_59%))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  ),
)

Button.displayName = 'Button'
export default Button
