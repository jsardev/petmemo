import { shuffle } from 'remeda'

import { GameSettings } from '@/modules/game-settings'
import { preloadImages } from '@/shared/utils'

import type { Card, GameCard } from '../../game'

export class CardService {
  constructor(private settings: GameSettings) {}

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
