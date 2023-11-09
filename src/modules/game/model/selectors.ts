import { Draft } from 'immer'

import { GameCard, GameState } from '.'

export const selectCollectedCards = (state: GameState) =>
  state.players.reduce<GameCard[]>(
    (collectedCards, player) => [...collectedCards, ...player.cards],
    [],
  )

export const selectCurrentPlayer = (state: GameState | Draft<GameState>) =>
  state.players[state.turn.playerIndex]
