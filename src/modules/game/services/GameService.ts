import shuffle from 'lodash/shuffle'

import { ImageAPIClient } from '@/shared/infrastructure/api'

import { Card, GameCard, GamePlayer } from '../model'

export class GameService {
  constructor(
    private playerCount: number,
    private cardMatrixSize: number,
    private apiClient: ImageAPIClient,
  ) {}

  initializePlayers(): GamePlayer[] {
    return [...new Array(this.playerCount)].map((_, index) => ({
      id: index,
      cards: [],
      score: 0,
    }))
  }

  async initializeCards(): Promise<GameCard[]> {
    const cardAmount = this.cardMatrixSize * this.cardMatrixSize

    const images = await this.apiClient.fetchImages({
      limit: cardAmount / 2,
    })

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
