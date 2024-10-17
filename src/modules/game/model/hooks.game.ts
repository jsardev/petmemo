import { selectCollectedCards, selectCurrentPlayer } from './selectors'
import { useGameStore } from './state'
import { GameCard } from './types'
import { isCardCollected } from '../utils'

export const usePlayers = () => useGameStore((state) => state.players)

export const useCurrentPlayer = () => useGameStore(selectCurrentPlayer)

export const useCards = () => useGameStore((state) => state.cards)

export const useAreCardsLoading = () =>
  useGameStore((state) => state.areCardsLoading)

export const useCollectedCards = () => useGameStore(selectCollectedCards)

export const useIsCardCollected = () => {
  const collectedCards = useCollectedCards()
  return (card: GameCard) => isCardCollected(collectedCards, card)
}

export const useCardRefs = () => useGameStore((state) => state.refs.cards)

export const useAllCardsRegistered = () =>
  useGameStore((state) => state.cards.length === state.refs.cards.length)
