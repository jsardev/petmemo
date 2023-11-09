import { useShallow } from 'zustand/shallow'

import { selectCollectedCards, selectCurrentPlayer } from './selectors'
import { useGameState } from './state'
import { GameCard } from './types'
import { isCardCollected } from '../utils'

export const useGameActions = () =>
  useGameState(useShallow((state) => state.actions))

export const usePlayers = () => useGameState((state) => state.players)

export const useCurrentPlayer = () => useGameState(selectCurrentPlayer)

export const useCards = () => useGameState((state) => state.cards)

export const useAreCardsLoading = () =>
  useGameState((state) => state.areCardsLoading)

export const useCollectedCards = () => useGameState(selectCollectedCards)

export const useIsCardCollected = () => {
  const collectedCards = useCollectedCards()
  return (card: GameCard) => isCardCollected(collectedCards, card)
}

export const useCardRefs = () => useGameState((state) => state.refs.cards)

export const useAllCardsRegistered = () =>
  useGameState((state) => state.cards.length === state.refs.cards.length)
