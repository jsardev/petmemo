import clsx from 'clsx'

type BoardCardProps = {
  className?: string
  width?: number
  height?: number
  imageUrl: string
  isDisabled?: boolean
  onClick: () => void
}

export const BoardCard = ({
  className,
  imageUrl,
  width,
  height,
  isDisabled,
  onClick,
}: BoardCardProps) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <div
      tabIndex={0}
      className={clsx(
        className,
        'rounded-xl object-cover border-slate-2 border-3 transition-shadow transition-opacity select-none aspect-square w-full h-full overflow-hidden',
        {
          'cursor-pointer hover:shadow-md': !isDisabled,
        },
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <img
        className="h-full w-full object-cover"
        src={imageUrl}
        width={width}
        height={height}
        draggable={false}
      />
    </div>
  )
}
