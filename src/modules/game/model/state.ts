import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { createGameStateSlice } from './state.game'
import { createTurnStateSlice } from './state.turn'
import { GameState } from './types'

export const useGameStore = create<GameState>()(
  immer((...args) => ({
    ...createGameStateSlice(...args),
    ...createTurnStateSlice(...args),
  })),
)

export type GameStore = typeof useGameStore
