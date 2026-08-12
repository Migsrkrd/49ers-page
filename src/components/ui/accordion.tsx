import * as React from 'react'
import { cn } from '@/lib/utils'

// Working stub: panels collapse/expand on trigger click instead of all being
// permanently open.
const AccCtx = React.createContext<{ isOpen: (v: any) => boolean; toggle: (v: any) => void } | null>(null)
const AccItemCtx = React.createContext<any>(null)

export const Accordion = ({ type = 'single', defaultValue, className, children }: any) => {
  const init = defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  const [open, setOpen] = React.useState<string[]>(init)
  const isOpen = (v: any) => open.includes(v)
  const toggle = (v: any) => setOpen((cur) => cur.includes(v) ? cur.filter((x) => x !== v) : (type === 'single' ? [v] : [...cur, v]))
  return <AccCtx.Provider value={{ isOpen, toggle }}><div className={className}>{children}</div></AccCtx.Provider>
}
export const AccordionItem = ({ value, className, children }: any) => (
  <AccItemCtx.Provider value={value}><div className={cn('border-b border-zinc-200', className)}>{children}</div></AccItemCtx.Provider>
)
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, any>(({ className, children, ...props }, ref) => {
  const acc = React.useContext(AccCtx)
  const val = React.useContext(AccItemCtx)
  return <button ref={ref} type="button" onClick={() => acc?.toggle(val)} className={cn('flex w-full items-center justify-between py-3 text-sm font-medium', className)} {...props}>{children}<span className="ml-2 opacity-50">▾</span></button>
})
export const AccordionContent = React.forwardRef<HTMLDivElement, any>(({ className, children, ...props }, ref) => {
  const acc = React.useContext(AccCtx)
  const val = React.useContext(AccItemCtx)
  if (acc && !acc.isOpen(val)) return null
  return <div ref={ref} className={cn('pb-3 text-sm', className)} {...props}>{children}</div>
})
