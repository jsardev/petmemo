import { selectCollectedCards } from './selectors'
import { useGameState } from './state'
import { GameState } from '.'
import { subscribeWithSelector } from 'zustand/middleware'
import { toStream, StateValueOf } from 'zustand-rx'
import { StoreApi } from 'zustand'

type GameStateListener<T> = (selectedState: T, previousSelectedState: T) => void

export const listenToAllCardsCollected = (
  listener: GameStateListener<boolean>,
) =>
  useGameState.subscribe((state) => {
    const cards = state.cards
    const collectedCards = selectCollectedCards(state)
    return cards.length === collectedCards.length * 2
  }, listener)

  type Test = typeof useGameState;

export const listenToTurnTimer = (listener: GameStateListener<number>) =>
  useGameState.subscribe((state) => state.turn.timer, listener)

  export const gameEnded$ = toStream<StoreApi<GameState>>(useGameState, state => {

    return state.
  })