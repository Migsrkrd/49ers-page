export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, boolean | undefined | null>

function clx(value: ClassValue): string {
  if (!value) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map(clx).filter(Boolean).join(' ')
  if (typeof value === 'object') {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([className]) => className)
      .join(' ')
  }
  return ''
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(clx).filter(Boolean).join(' ')
}
