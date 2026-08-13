import * as React from 'react'
import { cn } from '@/lib/utils'

// Working stub: the tooltip shows on hover instead of being permanently visible.
const TipCtx = React.createContext<{ open: boolean } | null>(null)

export const TooltipProvider = ({ children }: any) => <>{children}</>
export const Tooltip = ({ children }: any) => {
  const [open, setOpen] = React.useState(false)
  return (
    <TipCtx.Provider value={{ open }}>
      <span className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>{children}</span>
    </TipCtx.Provider>
  )
}
export const TooltipTrigger = ({ asChild, children, ...props }: any) => <span {...props}>{children}</span>
export const TooltipContent = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(TipCtx)
  return <div ref={ref} role="tooltip" className={cn('absolute bottom-full left-1/2 z-50 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-xs text-white', !ctx?.open && 'hidden', className)} {...props}>{children}</div>
})
