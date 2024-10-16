import { GameTurnPhase } from '../model'

export const GAME_TURN_PHASE_TO_TIMER_VALUE = {
  [GameTurnPhase.ACTION]: 5,
  [GameTurnPhase.COOLDOWN]: 3,
}
