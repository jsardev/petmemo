import { GameStore } from '@/modules/game/model'
import { TurnService } from '@/modules/game/services/TurnService'

export class TurnServiceSingleplayer extends TurnService {
  constructor(protected store: GameStore) {
    super(store)
  }

  nextTurnPhase() {
    this.endTurn()
  }

  endTurn() {
    this.store.setState((state) => {
      state.turn.isFinished = true
    })

    this.nextTurn()
  }
}
