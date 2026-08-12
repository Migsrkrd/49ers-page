import * as React from 'react'
export const Alert = React.forwardRef<HTMLDivElement, any>(({ children, ...props }, ref) => <div ref={ref} role="alert" {...props}>{children}</div>)
export const AlertTitle = ({ children, ...props }: any) => <h5 {...props}>{children}</h5>
export const AlertDescription = ({ children, ...props }: any) => <div {...props}>{children}</div>
