import * as React from 'react'
import { cn } from '@/lib/utils'

type CheckedState = boolean | 'indeterminate'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked' | 'defaultChecked'> {
  checked?: CheckedState
  defaultChecked?: CheckedState
  onCheckedChange?: (checked: boolean) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, defaultChecked, onCheckedChange, onChange, ...props }, forwardedRef) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null)
    const isControlled = checked !== undefined
    const [uncontrolledChecked, setUncontrolledChecked] = React.useState(defaultChecked === true)
    const isIndeterminate = checked === 'indeterminate' || (!isControlled && defaultChecked === 'indeterminate')
    const resolvedChecked = isControlled ? checked === true : uncontrolledChecked

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate
      }
    }, [isIndeterminate])

    return (
      <input
        {...props}
        ref={(node) => {
          inputRef.current = node
          if (typeof forwardedRef === 'function') {
            forwardedRef(node)
          } else if (forwardedRef) {
            forwardedRef.current = node
          }
        }}
        type="checkbox"
        checked={resolvedChecked}
        aria-checked={isIndeterminate ? 'mixed' : resolvedChecked}
        data-state={isIndeterminate ? 'indeterminate' : resolvedChecked ? 'checked' : 'unchecked'}
        data-disabled={props.disabled ? '' : undefined}
        className={cn('h-4 w-4 shrink-0 rounded-sm border border-primary accent-current', className)}
        onChange={(event) => {
          if (!isControlled) {
            setUncontrolledChecked(event.target.checked)
          }
          onCheckedChange?.(event.target.checked)
          onChange?.(event)
        }}
      />
    )
  },
)

Checkbox.displayName = 'Checkbox'
export default Checkbox
