import clsx from 'clsx'
import { forwardRef } from 'react'

import { useBoardCard } from './hooks'

export type BoardCardProps = {
  className?: string
  width?: number
  height?: number
  imageUrl: string
  isDisabled?: boolean
  onClick: () => void
}

export const BoardCard = forwardRef(
  (
    { className, imageUrl, width, height, isDisabled, onClick }: BoardCardProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    const { ref } = useBoardCard(forwardedRef)

    return (
      <button
        ref={ref}
        tabIndex={0}
        className={clsx(
          className,
          'rounded-xl object-cover border-slate-2 border-3 transition-shadow transition-opacity select-none aspect-square w-full h-full overflow-hidden',
          {
            'cursor-pointer hover:shadow-md': !isDisabled,
          },
        )}
        onClick={onClick}
        disabled={isDisabled}
      >
        <img
          className="h-full w-full object-cover"
          src={imageUrl}
          width={width}
          height={height}
          draggable={false}
        />
      </button>
    )
  },
)
