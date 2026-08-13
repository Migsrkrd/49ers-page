import * as React from 'react'
import { cn } from '@/lib/utils'

// Working stub: a real toggle menu (content hidden until the trigger is clicked),
// not an always-visible passthrough.
const DdCtx = React.createContext<{ open: boolean; setOpen: (v: boolean | ((o: boolean) => boolean)) => void } | null>(null)

export const DropdownMenu = ({ children }: any) => {
  const [open, setOpen] = React.useState(false)
  return <DdCtx.Provider value={{ open, setOpen }}><div className="relative inline-block">{children}</div></DdCtx.Provider>
}
export const DropdownMenuTrigger = ({ asChild, className, children, ...props }: any) => {
  const ctx = React.useContext(DdCtx)
  return <span className={cn('inline-flex cursor-pointer', className)} onClick={() => ctx?.setOpen((o) => !o)} {...props}>{children}</span>
}
export const DropdownMenuContent = React.forwardRef<HTMLDivElement, any>(({ className, align, sideOffset, children, ...props }, ref) => {
  const ctx = React.useContext(DdCtx)
  return <div ref={ref} className={cn('absolute right-0 top-full z-50 mt-1 min-w-[10rem] rounded-md border border-zinc-200 bg-white p-1 shadow-md', !ctx?.open && 'hidden', className)} {...props}>{children}</div>
})
export const DropdownMenuItem = React.forwardRef<HTMLDivElement, any>(({ className, onClick, children, ...props }, ref) => {
  const ctx = React.useContext(DdCtx)
  return <div ref={ref} role="menuitem" onClick={(e) => { onClick?.(e); ctx?.setOpen(false) }} className={cn('cursor-pointer rounded px-2 py-1.5 text-sm hover:bg-zinc-100', className)} {...props}>{children}</div>
})
export const DropdownMenuSeparator = ({ className, ...props }: any) => <div className={cn('my-1 h-px bg-zinc-100', className)} {...props} />
export const DropdownMenuLabel = ({ className, children, ...props }: any) => <div className={cn('px-2 py-1.5 text-xs font-medium text-zinc-500', className)} {...props}>{children}</div>
export const DropdownMenuGroup = ({ children }: any) => <>{children}</>
export const DropdownMenuCheckboxItem = DropdownMenuItem
export const DropdownMenuRadioGroup = ({ children }: any) => <>{children}</>
export const DropdownMenuRadioItem = DropdownMenuItem
