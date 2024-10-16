import { gameEnded$, gameTimerEnded$ } from '@/modules/game/model'
import { GameStore } from '@/modules/game/model/state'
import { GameService } from '@/modules/game/services/GameService'
import { TurnServiceSingleplayer } from '@/modules/game/services/TurnServiceSingleplayer'
import { GameSettings } from '@/modules/game-settings'

import { GameServiceContext } from './types'

export class GameServiceSingleplayer extends GameService<TurnServiceSingleplayer> {
  constructor(
    protected store: GameStore,
    protected settings: GameSettings,
    protected context: GameServiceContext,
  ) {
    super(store, settings, new TurnServiceSingleplayer(store))
  }

  startGame() {
    const subscriptions = [
      gameTimerEnded$.subscribe(() => {
        this.turnService.nextTurnPhase()
      }),
      gameEnded$.subscribe(() => {
        this.endGame()
        this.context.navigate('/scoreboard')
      }),
    ]

    return () => {
      subscriptions.forEach((subscription) => subscription.unsubscribe())
    }
  }
}
