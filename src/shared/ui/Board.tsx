import clsx from 'clsx'
import { Children, ReactNode } from 'react'

type BoardProps = {
  className?: string
  children: ReactNode
}

export const Board = ({ className, children }: BoardProps) => {
  const matrixSize = Math.sqrt(Children.count(children))

  return (
    <div
      className={clsx(
        className,
        'grid h-full w-full content-center justify-center gap-2 sm:gap-4',
      )}
      style={{
        gridTemplateColumns: `repeat(${matrixSize}, minmax(0, max-content))`,
        gridTemplateRows: `repeat(${matrixSize}, minmax(0, max-content))`,
      }}
    >
      {children}
    </div>
  )
}
