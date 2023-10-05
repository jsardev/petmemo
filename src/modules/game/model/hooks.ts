import { selectCollectedCards } from './selectors'
import { useGameState } from './state'
import { GameCard } from './types'
import { isCardCollected, isCardRevealed } from '../utils'

export const useTurn = () => useGameState((state) => state.turn)

export const usePlayers = () => useGameState((state) => state.players)

export const useCurrentPlayer = () =>
  useGameState((state) => state.players[state.turn.playerIndex])

export const useCards = () => useGameState((state) => state.cards)

export const useAreCardsLoading = () =>
  useGameState((state) => state.areCardsLoading)

export const useCollectedCards = () => useGameState(selectCollectedCards)

export const useSelectedCards = () =>
  useGameState((state) => state.turn.selectedCards)

export const useIsCardCollected = () => {
  const collectedCards = useCollectedCards()
  return (card: GameCard) => isCardCollected(collectedCards, card)
}

export const useIsCardRevealed = () => {
  const selectedCards = useSelectedCards()
  return (card: GameCard) => isCardRevealed(selectedCards, card)
}

export const useGameActions = () => {
  const selectCard = useGameState((state) => state.selectCard)
  const startGame = useGameState((state) => state.startGame)
  const endGame = useGameState((state) => state.endGame)
  const endTurn = useGameState((state) => state.endTurn)

  return {
    startGame,
    endGame,
    selectCard,
    endTurn,
  }
}
