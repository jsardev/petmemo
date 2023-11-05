import clsx from 'clsx'
import { Children, ReactNode } from 'react'

import { useBoard } from './hooks'
import { withBoardContext } from './withBoardContext'

type BoardProps = {
  className?: string
  children: ReactNode
}

export const Board = withBoardContext(({ className, children }: BoardProps) => {
  const matrixSize = Math.sqrt(Children.count(children))

  const { handleKeyDown } = useBoard(matrixSize)

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
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
})
