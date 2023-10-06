import clsx from 'clsx'

import { ImageStack } from '@/shared/ui/ImageStack'

import { GamePlayer } from '../model'

type PlayerScoreProps = {
  player: GamePlayer
  itsTurn: boolean
  horizontalPlacement: 'left' | 'right'
  verticalPlacement: 'top' | 'bottom'
  className?: string
}

export const PlayerScore = ({
  player,
  itsTurn,
  horizontalPlacement,
  verticalPlacement,
  className,
}: PlayerScoreProps) => {
  const isOnRightSide = horizontalPlacement === 'right'
  const isOnBottom = verticalPlacement === 'bottom'

  return (
    <div
      className={clsx(className, 'flex flex-col gap-4', {
        'flex-col-reverse': isOnBottom,
      })}
    >
      <div
        className={clsx('flex gap-4 items-center', {
          'flex-row-reverse': isOnRightSide,
        })}
      >
        <div className="text-xl font-medium text-slate">
          Player #{player.id}
        </div>
        {itsTurn && (
          <div className="h-5 w-5 animate-pulse rounded-full from-primary-400 to-primary-500 bg-gradient-to-r" />
        )}
      </div>
      <div
        className={clsx('flex items-center gap-2', {
          'flex-row-reverse': isOnRightSide,
          'self-end': isOnRightSide,
        })}
      >
        <ImageStack
          images={player.cards.map((card) => card.image.url)}
          isReverse={isOnRightSide}
          withCount
        />
      </div>
    </div>
  )
}
