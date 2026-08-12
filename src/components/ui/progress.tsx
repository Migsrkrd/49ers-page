import * as React from 'react'
export const Progress = React.forwardRef<HTMLDivElement, { value?: number } & React.HTMLAttributes<HTMLDivElement>>(({ value = 0, ...props }, ref) => <div ref={ref} data-value={value} {...props} />)
