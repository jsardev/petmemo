import { GameServiceContext } from '@/modules/game/services/types'
import { GameSettings } from '@/modules/game-settings'

import { GameServiceMultiplayer } from './GameServiceMultiplayer'
import { GameServiceSingleplayer } from './GameServiceSingleplayer'
import { GameStore } from '../model/state'
import { GameMode } from '../model/types'

export class GameServiceFactory {
  static create(
    store: GameStore,
    settings: GameSettings,
    context: GameServiceContext,
  ) {
    const mode =
      settings.playerCount > 1 ? GameMode.MULTI_PLAYER : GameMode.SINGLE_PLAYER

    switch (mode) {
      case GameMode.SINGLE_PLAYER:
        return new GameServiceSingleplayer(store, settings, context)
      case GameMode.MULTI_PLAYER:
        return new GameServiceMultiplayer(store, settings, context)
      default:
        throw new Error('invalid game mode')
    }
  }
}
