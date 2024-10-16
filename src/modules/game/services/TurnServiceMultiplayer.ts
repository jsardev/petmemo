import { GAME_TURN_PHASE_TO_TIMER_VALUE } from '@/modules/game/config'
import { GameStore, GameTurnPhase } from '@/modules/game/model'

import { TurnService } from './TurnService'

export class TurnServiceMultiplayer extends TurnService {
  private turnTimerInterval?: NodeJS.Timeout

  constructor(protected store: GameStore) {
    super(store)
  }

  nextTurnPhase() {
    switch (this.store.getState().turn.phase) {
      case GameTurnPhase.ACTION: {
        return this.endTurn()
      }
      case GameTurnPhase.COOLDOWN: {
        return this.nextTurn()
      }
    }
  }

  endTurn() {
    this.store.setState((state) => {
      state.turn.timer = 0
      state.turn.isFinished = true
      state.turn.phase = GameTurnPhase.COOLDOWN
    })

    this.stopTurnTimer()
  }

  startTurnTimer() {
    this.turnTimerInterval = setInterval(() => {
      this.store.setState((state) => {
        state.turn.timer--
      })
    }, 1000)
  }

  stopTurnTimer() {
    clearInterval(this.turnTimerInterval)
  }

  restartTurnTimer() {
    this.stopTurnTimer()
    this.startTurnTimer()
  }

  resetTurnTimer() {
    this.store.setState((state) => {
      state.turn.timer = GAME_TURN_PHASE_TO_TIMER_VALUE[state.turn.phase]
    })

    this.restartTurnTimer()
  }
}
