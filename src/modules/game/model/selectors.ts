import { GameCard } from '.'
import { GameState } from './state'

export const selectCollectedCards = (state: GameState) =>
  state.players.reduce<GameCard[]>(
    (collectedCards, player) => [...collectedCards, ...player.cards],
    [],
  )
