import * as React from 'react'
import { cn } from '@/lib/utils'

// Working stub: closed by default (uncontrolled) or driven by open/onOpenChange.
// The trigger opens it; Action/Cancel close it. Content only mounts when open, so
// it never dumps the confirm dialog onto the page.
const AlertCtx = React.createContext<{ open: boolean; setOpen: (v: boolean) => void } | null>(null)

export const AlertDialog = ({ open, defaultOpen, onOpenChange, children }: any) => {
  const [internal, setInternal] = React.useState(defaultOpen ?? false)
  const isOpen = open !== undefined ? open : internal
  const setOpen = (v: boolean) => { if (open === undefined) setInternal(v); onOpenChange?.(v) }
  return <AlertCtx.Provider value={{ open: isOpen, setOpen }}>{children}</AlertCtx.Provider>
}
export const AlertDialogTrigger = ({ asChild, className, children, ...props }: any) => {
  const ctx = React.useContext(AlertCtx)
  return <span className={cn('inline-flex cursor-pointer', className)} onClick={() => ctx?.setOpen(true)} {...props}>{children}</span>
}
export const AlertDialogPortal = ({ children }: any) => <>{children}</>
export const AlertDialogOverlay = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => <div ref={ref} className={cn('fixed inset-0 z-50 bg-black/50', className)} {...props} />)
export const AlertDialogContent = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(AlertCtx)
  if (ctx && !ctx.open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div ref={ref} className={cn('relative w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-xl', className)} {...props}>{children}</div>
    </div>
  )
})
export const AlertDialogHeader = ({ className, ...props }: any) => <div className={cn('flex flex-col space-y-2', className)} {...props} />
export const AlertDialogFooter = ({ className, ...props }: any) => <div className={cn('mt-6 flex justify-end gap-2', className)} {...props} />
export const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, any>(({ className, ...props }, ref) => <h2 ref={ref} className={cn('text-lg font-semibold', className)} {...props} />)
export const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, any>(({ className, ...props }, ref) => <p ref={ref} className={cn('text-sm text-zinc-500', className)} {...props} />)
export const AlertDialogAction = React.forwardRef<HTMLButtonElement, any>(({ className, onClick, ...props }, ref) => {
  const ctx = React.useContext(AlertCtx)
  return <button ref={ref} onClick={(e) => { onClick?.(e); ctx?.setOpen(false) }} className={cn('inline-flex items-center justify-center rounded-[var(--radius,0.65rem)] bg-[hsl(var(--primary,243_75%_59%))] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90', className)} {...props} />
})
export const AlertDialogCancel = React.forwardRef<HTMLButtonElement, any>(({ className, onClick, ...props }, ref) => {
  const ctx = React.useContext(AlertCtx)
  return <button ref={ref} onClick={(e) => { onClick?.(e); ctx?.setOpen(false) }} className={cn('mt-2 inline-flex items-center justify-center rounded-[var(--radius,0.65rem)] border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-50 sm:mt-0', className)} {...props} />
})
