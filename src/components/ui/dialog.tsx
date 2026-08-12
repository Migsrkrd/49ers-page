import * as React from 'react'
import { cn } from '@/lib/utils'

// Working stub: a real modal — closed by default (uncontrolled), opened by the
// trigger, or driven by open/onOpenChange (controlled). Content only mounts when
// open, so it never dumps onto the page.
const DialogCtx = React.createContext<{ open: boolean; setOpen: (v: boolean) => void } | null>(null)

export const Dialog = ({ open, defaultOpen, onOpenChange, children }: any) => {
  const [internal, setInternal] = React.useState(defaultOpen ?? false)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean) => { if (open === undefined) setInternal(v); onOpenChange?.(v) }
  return <DialogCtx.Provider value={{ open: isOpen, setOpen }}>{children}</DialogCtx.Provider>
}
export const DialogTrigger = ({ asChild, className, children, ...props }: any) => {
  const ctx = React.useContext(DialogCtx)
  return <span className={cn('inline-flex cursor-pointer', className)} onClick={() => ctx?.setOpen(true)} {...props}>{children}</span>
}
export const DialogPortal = ({ children }: any) => <>{children}</>
export const DialogClose = ({ asChild, className, children, ...props }: any) => {
  const ctx = React.useContext(DialogCtx)
  return <span className={cn('inline-flex cursor-pointer', className)} onClick={() => ctx?.setOpen(false)} {...props}>{children}</span>
}
export const DialogOverlay = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => <div ref={ref} className={cn('fixed inset-0 z-50 bg-black/50', className)} {...props} />)
export const DialogContent = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(DialogCtx)
  if (ctx && !ctx.open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => ctx?.setOpen(false)}>
      <div ref={ref} onClick={(e) => e.stopPropagation()} className={cn('relative max-h-[85vh] w-full max-w-lg overflow-auto rounded-xl border border-zinc-200 bg-white p-6 shadow-xl', className)} {...props}>{children}</div>
    </div>
  )
})
export const DialogHeader = ({ className, ...props }: any) => <div className={cn('mb-4 flex flex-col space-y-1.5', className)} {...props} />
export const DialogFooter = ({ className, ...props }: any) => <div className={cn('mt-6 flex justify-end gap-2', className)} {...props} />
export const DialogTitle = React.forwardRef<HTMLHeadingElement, any>(({ className, ...props }, ref) => <h2 ref={ref} className={cn('text-lg font-semibold tracking-tight', className)} {...props} />)
export const DialogDescription = React.forwardRef<HTMLParagraphElement, any>(({ className, ...props }, ref) => <p ref={ref} className={cn('text-sm text-zinc-500', className)} {...props} />)
