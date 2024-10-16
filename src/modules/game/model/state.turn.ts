import { GAME_TURN_PHASE_TO_TIMER_VALUE } from '@/modules/game/config'
import { ImmerStateCreator } from '@/shared/types/state'

import { GameState, GameTurnPhase, GameTurnStateSlice } from './types'

export const createTurnStateSlice: ImmerStateCreator<
  GameState,
  GameTurnStateSlice
> = () => ({
  turn: {
    timer: GAME_TURN_PHASE_TO_TIMER_VALUE[GameTurnPhase.ACTION],
    phase: GameTurnPhase.ACTION,
    playerIndex: 0,
    selectedCards: [],
    isFinished: false,
  },
})
