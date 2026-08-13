import * as React from 'react'
import { cn } from '@/lib/utils'

// Working stub: content hidden until the trigger opens it (supports controlled
// open/onOpenChange), not an always-visible passthrough.
const PopCtx = React.createContext<{ open: boolean; setOpen: (v: boolean | ((o: boolean) => boolean)) => void } | null>(null)

export const Popover = ({ open, onOpenChange, children }: any) => {
  const [internal, setInternal] = React.useState(false)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => {
    const next = typeof v === 'function' ? (v as any)(isOpen) : v
    if (open === undefined) setInternal(next)
    onOpenChange?.(next)
  }
  return <PopCtx.Provider value={{ open: isOpen, setOpen }}><div className="relative inline-block">{children}</div></PopCtx.Provider>
}
export const PopoverTrigger = ({ asChild, className, children, ...props }: any) => {
  const ctx = React.useContext(PopCtx)
  return <span className={cn('inline-flex cursor-pointer', className)} onClick={() => ctx?.setOpen((o) => !o)} {...props}>{children}</span>
}
export const PopoverContent = React.forwardRef<HTMLDivElement, any>(({ className, align, sideOffset, children, ...props }, ref) => {
  const ctx = React.useContext(PopCtx)
  return <div ref={ref} className={cn('absolute left-0 top-full z-50 mt-1 rounded-md border border-zinc-200 bg-white p-4 shadow-md', !ctx?.open && 'hidden', className)} {...props}>{children}</div>
})
