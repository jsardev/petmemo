import { Scoreboard } from '@/shared/ui/Scoreboard'

import { usePlayers } from '../model'

type GameScoreboardProps = {
  className?: string
}

export const GameScoreboard = ({ className }: GameScoreboardProps) => {
  const players = usePlayers()

  return (
    <Scoreboard
      className={className}
      items={players.map((player) => ({
        name: `Player #${player.id + 1}`,
        score: player.cards.length,
        items: player.cards.map((card) => ({
          imageUrl: card.image.url,
        })),
      }))}
      itemScoreText="cards"
    />
  )
}
