import * as React from 'react'
export const Toaster = () => null
export const ToastProvider = ({ children }: any) => <>{children}</>
export const ToastViewport = () => null
export const Toast = ({ children }: any) => <div>{children}</div>
export const ToastTitle = ({ children }: any) => <p>{children}</p>
export const ToastDescription = ({ children }: any) => <p>{children}</p>
export const ToastClose = () => null
export const ToastAction = ({ children }: any) => <button>{children}</button>
export function useToast() { return { toast: () => {}, dismiss: () => {}, toasts: [] } }
