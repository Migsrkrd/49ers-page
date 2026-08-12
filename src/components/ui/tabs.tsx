import * as React from 'react'
import { cn } from '@/lib/utils'

// Working stub: only the active tab's content renders (tracked via value /
// defaultValue), instead of stacking every panel at once.
const TabsCtx = React.createContext<{ value: any; setValue: (v: any) => void } | null>(null)

export const Tabs = ({ value, defaultValue, onValueChange, className, children }: any) => {
  const [internal, setInternal] = React.useState(defaultValue ?? '')
  const current = value !== undefined ? value : internal
  const setValue = (v: any) => { if (value === undefined) setInternal(v); onValueChange?.(v) }
  return <TabsCtx.Provider value={{ value: current, setValue }}><div className={className}>{children}</div></TabsCtx.Provider>
}
export const TabsList = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('inline-flex items-center gap-1 rounded-md bg-zinc-100 p-1', className)} {...props}>{children}</div>
))
export const TabsTrigger = React.forwardRef<HTMLButtonElement, any>(({ className, value, children, ...props }, ref) => {
  const ctx = React.useContext(TabsCtx)
  const active = ctx?.value === value
  return <button ref={ref} type="button" onClick={() => ctx?.setValue(value)} className={cn('rounded px-3 py-1.5 text-sm font-medium transition-colors', active ? 'bg-white shadow-sm' : 'text-zinc-600 hover:text-zinc-900', className)} {...props}>{children}</button>
})
export const TabsContent = React.forwardRef<HTMLDivElement, any>(({ className, value, children, ...props }, ref) => {
  const ctx = React.useContext(TabsCtx)
  if (ctx && ctx.value !== value) return null
  return <div ref={ref} className={cn('mt-2', className)} {...props}>{children}</div>
})
