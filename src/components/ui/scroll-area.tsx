import * as React from 'react'
export const ScrollArea = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => <div ref={ref} {...props}>{children}</div>)
export const ScrollBar = () => null
ScrollArea.displayName = 'ScrollArea'
