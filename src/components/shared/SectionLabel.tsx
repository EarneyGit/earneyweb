import { cn } from '@/lib/utils'

interface SectionLabelProps {
  id?: string
  children: React.ReactNode
  className?: string
  color?: 'purple' | 'blue' | 'mono'
}

/**
 * Monospace system label — used as section eyebrow / ID tag.
 * Renders as a small all-caps mono-font label with a colored accent dot.
 */
export function SectionLabel({ id, children, className, color = 'purple' }: SectionLabelProps) {
  const dotColor = {
    purple: 'bg-earney-purple',
    blue: 'bg-earney-blue',
    mono: 'bg-earney-mono',
  }[color]

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {id && (
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase opacity-50">
          {id}
        </span>
      )}
      <span
        className={cn(
          'inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em]',
          color === 'purple' && 'text-earney-purple',
          color === 'blue' && 'text-earney-blue',
          color === 'mono' && 'text-earney-mono'
        )}
      >
        <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColor)} />
        {children}
      </span>
    </div>
  )
}
