import { GamePlayer } from '@/modules/game'
import { GameSettings } from '@/modules/game-settings'

export class PlayerService {
  constructor(private settings: GameSettings) {}

  initializePlayers(): GamePlayer[] {
    return [...new Array(this.settings.playerCount)].map((_, index) => ({
      id: index,
      cards: [],
      score: 0,
    }))
  }
}
