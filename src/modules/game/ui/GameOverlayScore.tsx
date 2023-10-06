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

export const GameOverlayScore = ({
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
      className={clsx(className, 'flex flex-col gap-2 sm:gap-4', {
        'flex-col-reverse': isOnBottom,
      })}
    >
      <div
        className={clsx('flex gap-2 sm:gap-4 items-center', {
          'flex-row-reverse': isOnRightSide,
        })}
      >
        <div className="text-xl font-medium text-slate-400">
          Player #{player.id + 1}
        </div>
        {itsTurn && (
          <div className="h-3 w-3 animate-pulse rounded-full from-primary-400 to-primary-500 bg-gradient-to-r sm:h-5 sm:w-5" />
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
