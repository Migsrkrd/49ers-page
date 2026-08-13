import * as React from 'react'
export const Switch = React.forwardRef<HTMLButtonElement, any>(({ checked, onCheckedChange, ...props }, ref) => (
  <button ref={ref} type="button" role="switch" aria-checked={checked} onClick={() => onCheckedChange?.(!checked)} {...props} />
))
Switch.displayName = 'Switch'
