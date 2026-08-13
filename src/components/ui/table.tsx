import * as React from 'react'
export const Table = React.forwardRef<HTMLTableElement, any>(({ children, ...props }, ref) => <table ref={ref} {...props}>{children}</table>)
export const TableHeader = React.forwardRef<HTMLTableSectionElement, any>(({ children, ...props }, ref) => <thead ref={ref} {...props}>{children}</thead>)
export const TableBody = React.forwardRef<HTMLTableSectionElement, any>(({ children, ...props }, ref) => <tbody ref={ref} {...props}>{children}</tbody>)
export const TableFooter = React.forwardRef<HTMLTableSectionElement, any>(({ children, ...props }, ref) => <tfoot ref={ref} {...props}>{children}</tfoot>)
export const TableRow = React.forwardRef<HTMLTableRowElement, any>(({ children, ...props }, ref) => <tr ref={ref} {...props}>{children}</tr>)
export const TableHead = React.forwardRef<HTMLTableCellElement, any>(({ children, ...props }, ref) => <th ref={ref} {...props}>{children}</th>)
export const TableCell = React.forwardRef<HTMLTableCellElement, any>(({ children, ...props }, ref) => <td ref={ref} {...props}>{children}</td>)
export const TableCaption = React.forwardRef<HTMLTableCaptionElement, any>(({ children, ...props }, ref) => <caption ref={ref} {...props}>{children}</caption>)
