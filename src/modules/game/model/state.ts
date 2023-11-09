import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { createGameStateSlice } from './state.game'
import { createTurnStateSlice } from './state.turn'
import { GameState } from './types'

export const useGameState = create<GameState>()(
  subscribeWithSelector(
    immer((...args) => ({
      ...createGameStateSlice(...args),
      ...createTurnStateSlice(...args),
    })),
  ),
)
