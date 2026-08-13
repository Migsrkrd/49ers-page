import * as React from 'react'
import { cn } from '@/lib/utils'

// Lightweight working stub of the shadcn <Select> composable API: a real
// dropdown (open/close + value selection via context), not a static passthrough.
const SelectCtx = React.createContext<{
  open: boolean
  setOpen: (v: boolean | ((o: boolean) => boolean)) => void
  value: any
  select: (v: any) => void
  labels: Record<string, React.ReactNode>
} | null>(null)

export const Select = ({ value, defaultValue, onValueChange, children }: any) => {
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState(defaultValue ?? '')
  const current = value !== undefined ? value : internal
  const labels = React.useRef<Record<string, React.ReactNode>>({}).current
  const select = (v: any) => {
    if (value === undefined) setInternal(v)
    onValueChange?.(v)
    setOpen(false)
  }
  return (
    <SelectCtx.Provider value={{ open, setOpen, value: current, select, labels }}>
      <div className="relative">{children}</div>
    </SelectCtx.Provider>
  )
}

export const SelectTrigger = React.forwardRef<HTMLButtonElement, any>(({ className, children, ...props }, ref) => {
  const ctx = React.useContext(SelectCtx)
  return (
    <button ref={ref} type="button" onClick={() => ctx?.setOpen((o) => !o)}
      className={cn('flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm', className)} {...props}>
      {children}
      <span className="ml-2 opacity-50">▾</span>
    </button>
  )
})

export const SelectValue = ({ placeholder }: any) => {
  const ctx = React.useContext(SelectCtx)
  const has = ctx && ctx.value !== '' && ctx.value != null
  const label = has ? (ctx!.labels[ctx!.value] ?? ctx!.value) : ''
  return <span className={label ? '' : 'text-zinc-400'}>{label || placeholder || ''}</span>
}

export const SelectContent = ({ className, children }: any) => {
  const ctx = React.useContext(SelectCtx)
  // Items always render (so labels register for SelectValue) but the panel is
  // hidden until open — the previous stub rendered them inline on the page.
  return (
    <div className={cn('absolute left-0 top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-zinc-200 bg-white py-1 shadow-md', !ctx?.open && 'hidden', className)}>
      {children}
    </div>
  )
}

export const SelectItem = ({ className, children, value, ...props }: any) => {
  const ctx = React.useContext(SelectCtx)
  if (ctx && value !== undefined) ctx.labels[value] = children
  return (
    <div role="option" onClick={() => ctx?.select(value)}
      className={cn('cursor-pointer px-3 py-2 text-sm hover:bg-zinc-100', ctx?.value === value && 'bg-zinc-100 font-medium', className)} {...props}>
      {children}
    </div>
  )
}

export const SelectGroup = ({ children }: any) => <>{children}</>
export const SelectLabel = ({ className, children }: any) => <div className={cn('px-2 py-1.5 text-xs font-medium text-zinc-500', className)}>{children}</div>
export const SelectSeparator = ({ className }: any) => <div className={cn('my-1 h-px bg-zinc-100', className)} />
