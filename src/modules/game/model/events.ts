import { filter, map, distinctUntilChanged, Subject } from 'rxjs'
import { toStream } from 'zustand-rx'

import { GameCard } from '@/modules/game/model/types'

import { selectCollectedCards } from './selectors'
import { useGameStore } from './state'

const gameState$ = toStream(useGameStore)

export const gameTimer$ = gameState$.pipe(
  map((state) => state.turn.timer),
  distinctUntilChanged(),
)

export const gameTimerEnded$ = gameTimer$.pipe(filter((timer) => timer === 0))

export const gameEnded$ = gameState$.pipe(
  map((state) => {
    const cards = state.cards
    const collectedCards = selectCollectedCards(state)
    return cards.length === collectedCards.length * 2
  }),
  filter((gameEnded) => gameEnded === true),
)

export const matchingCardSelected$ = new Subject<GameCard>()

export const nextTurn$ = new Subject<void>()
