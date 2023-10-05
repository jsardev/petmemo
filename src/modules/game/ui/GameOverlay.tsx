import { GameNextTurnButton } from './GameNextTurnButton'
import { PlayerScore } from './PlayerScore'
import { useCurrentPlayer, usePlayers } from '..'

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
    <div className="fixed inset-0 grid grid-cols-1 grid-rows-1 p-12 [&>*]:col-span-full [&>*]:row-span-full">
      {players.map((player, index) => {
        const horizontalPlacement = [0, 3].includes(index) ? 'left' : 'right'
        const verticalPlacement = [2, 3].includes(index) ? 'bottom' : 'top'

        return (
          <PlayerScore
            key={player.id}
            player={player}
            itsTurn={player === currentPlayer}
            horizontalPlacement={horizontalPlacement}
            verticalPlacement={verticalPlacement}
            className={playerIndexToClassesMap[index]}
          />
        )
      })}

      <GameNextTurnButton className="self-end justify-self-center" />
    </div>
  )
}
