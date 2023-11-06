import shuffle from 'lodash/shuffle'

import { GameSettings } from '@/modules/game-settings'
import { preloadImages } from '@/shared/utils'

import { Card, GameCard, GamePlayer } from '../model'

export class GameService {
  constructor(private settings: GameSettings) {}

  initializePlayers(): GamePlayer[] {
    return [...new Array(this.settings.playerCount)].map((_, index) => ({
      id: index,
      cards: [],
      score: 0,
    }))
  }

  async initializeCards(): Promise<GameCard[]> {
    const { cardMatrixSize, apiClient } = this.settings
    const cardAmount = cardMatrixSize * cardMatrixSize

    const images = await apiClient.fetchImages({
      limit: cardAmount / 2,
    })

    await preloadImages(images.map((image) => image.url))

    const cards: Card[] = images.map((image) => ({
      id: image.id,
      image: {
        url: image.url,
        width: image.width,
        height: image.height,
      },
    }))

    return shuffle([...cards, ...cards]).map((card, index) => ({
      ...card,
      index,
    }))
  }
}
