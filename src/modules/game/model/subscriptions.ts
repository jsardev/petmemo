import { selectCollectedCards } from './selectors'
import { useGameState } from './state'

type GameStateListener<T> = (selectedState: T, previousSelectedState: T) => void

export const listenForGameFinished = (listener: GameStateListener<boolean>) =>
  useGameState.subscribe((state) => state.isFinished, listener)

export const listenForAllCardsCollected = (
  listener: GameStateListener<boolean>,
) =>
  useGameState.subscribe((state) => {
    const cards = state.cards
    const collectedCards = selectCollectedCards(state)
    return cards.length === collectedCards.length * 2
  }, listener)
