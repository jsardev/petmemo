import { Scoreboard } from '@/shared/ui/Scoreboard'

import { usePlayers } from '..'

export const GameScoreboard = () => {
  const players = usePlayers()

  return (
    <Scoreboard
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
