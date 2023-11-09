import { omit } from 'remeda'
import { useShallow } from 'zustand/shallow'

import { useGameState } from './state'
import { GameCard } from './types'
import { isCardRevealed } from '../utils'

export const useTurn = () =>
  useGameState(useShallow((state) => omit(state.turn, ['actions'])))

export const useTurnActions = () =>
  useGameState(useShallow((state) => state.turn.actions))

export const useSelectedCards = () =>
  useGameState((state) => state.turn.selectedCards)

export const useIsCardRevealed = () => {
  const selectedCards = useSelectedCards()
  return (card: GameCard) => isCardRevealed(selectedCards, card)
}
