import { ImmerStateCreator } from '@/shared/types/state'

import { GameState, GameBaseStateSlice } from './types'

export const createGameStateSlice: ImmerStateCreator<
  GameState,
  GameBaseStateSlice
> = () => ({
  players: [],
  cards: [],
  areCardsLoading: true,
  isFinished: false,

  refs: {
    cards: [],
  },
})
