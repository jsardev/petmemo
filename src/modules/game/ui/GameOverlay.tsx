import { GameOverlayMenu } from './GameOverlayMenu'
import { GameOverlayScore } from './GameOverlayScore'
import { useCurrentPlayer, usePlayers } from '../model'

const playerIndexToClassesMap: Record<number, string> = {
  0: 'justify-self-start self-start',
  1: 'justify-self-end self-start',
  2: 'justify-self-end self-end',
  3: 'justify-self-start self-end',
}

export const GameOverlay = () => {
  const players = usePlayers()
  const currentPlayer = useCurrentPlayer()

  return (
    <div className="absolute inset-0 grid grid-cols-1 grid-rows-1 [&>*]:col-span-full [&>*]:row-span-full">
      <GameOverlayMenu />

      <div className="grid grid-cols-1 grid-rows-1 p-4 [&>*]:col-span-full [&>*]:row-span-full lg:p-12 sm:p-8">
        {players.map((player, index) => {
          const horizontalPlacement = [0, 3].includes(index) ? 'left' : 'right'
          const verticalPlacement = [2, 3].includes(index) ? 'bottom' : 'top'

          return (
            <GameOverlayScore
              key={player.id}
              player={player}
              itsTurn={player === currentPlayer}
              horizontalPlacement={horizontalPlacement}
              verticalPlacement={verticalPlacement}
              className={playerIndexToClassesMap[index]}
            />
          )
        })}
      </div>
    </div>
  )
}
