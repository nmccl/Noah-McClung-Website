import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1800px] px-[var(--gutter)]', className)}>
      {children}
    </Tag>
  )
}

type ColsProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T
  children: ReactNode
  className?: string
}

export function Cols<T extends ElementType = 'div'>({
  children,
  className,
  as,
  ...props
}: ColsProps<T>) {
  const Tag = as || 'div'
  return (
    <Tag
      className={cn('grid grid-cols-4 gap-x-[var(--gutter)] md:grid-cols-12', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
