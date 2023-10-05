import clsx from 'clsx'

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
          <div className="h-5 w-5 animate-pulse rounded-full bg-primary" />
        )}
      </div>
      <div
        className={clsx('flex items-center gap-2', {
          'flex-row-reverse': isOnRightSide,
          'self-end': isOnRightSide,
        })}
      >
        <div
          className={clsx('flex', {
            'flex-row-reverse': isOnRightSide,
          })}
        >
          {player.cards.map((card, index) => (
            <div
              key={`player-score-image-${card.id}-${index}`}
              className={clsx(
                'relative w-8 h-8 rounded border-2 select-none overflow-hidden',
                {
                  '-ml-4 first:ml-0': !isOnRightSide,
                  '-mr-4 first:mr-0': isOnRightSide,
                },
              )}
            >
              <img
                className="h-full w-full object-cover blur-sm"
                src={card.image.url}
                draggable={false}
              />
              {index === player.cards.length - 1 && (
                <div className="text-md absolute inset-0 flex items-center justify-center font-bold text-white">
                  {player.cards.length}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
