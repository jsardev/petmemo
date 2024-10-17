import { GameService } from '@/modules/game/services/GameService'
import { TurnServiceMultiplayer } from '@/modules/game/services/TurnServiceMultiplayer'
import { GameSettings } from '@/modules/game-settings'

import { GameServiceContext } from './types'
import {
  gameEnded$,
  GameStore,
  gameTimerEnded$,
  matchingCardSelected$,
  nextTurn$,
} from '../model'

export class GameServiceMultiplayer extends GameService<TurnServiceMultiplayer> {
  constructor(
    protected store: GameStore,
    protected settings: GameSettings,
    protected context: GameServiceContext<TurnServiceMultiplayer>,
  ) {
    super(store, settings, context)
  }

  startGame() {
    this.turnService.startTurnTimer()

    const subscriptions = [
      gameTimerEnded$.subscribe(() => {
        this.turnService.nextTurnPhase()
      }),
      gameEnded$.subscribe(() => {
        this.endGame()
        this.context.navigate('/scoreboard')
      }),
      matchingCardSelected$.subscribe(() => {
        this.turnService.resetTurnTimer()
      }),
      nextTurn$.subscribe(() => {
        this.turnService.resetTurnTimer()
      }),
    ]

    return () => {
      this.turnService.stopTurnTimer()
      subscriptions.forEach((subscription) => subscription.unsubscribe())
    }
  }
}
