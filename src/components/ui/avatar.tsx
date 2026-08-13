import * as React from 'react'
export const Avatar = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => <span ref={ref} {...props}>{children}</span>)
export const AvatarImage = React.forwardRef<HTMLImageElement, any>((props, ref) => <img ref={ref} {...props} />)
export const AvatarFallback = React.forwardRef<HTMLSpanElement, any>(({ children, ...props }, ref) => <span ref={ref} {...props}>{children}</span>)
