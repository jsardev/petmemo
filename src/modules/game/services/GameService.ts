import { castDraft } from 'immer'

import { CardService } from '@/modules/card'
import { GameStore } from '@/modules/game/model'
import { TurnService } from '@/modules/game/services/TurnService'
import { GameServiceContext } from '@/modules/game/services/types'
import { GameSettings } from '@/modules/game-settings'
import { PlayerService } from '@/modules/player'

export class GameService<T extends TurnService> {
  constructor(
    protected store: GameStore,
    protected settings: GameSettings,
    protected context: GameServiceContext<T>,
  ) {}

  protected async prepareGame() {
    this.resetGame()

    const playerService = new PlayerService(this.settings)
    const cardService = new CardService(this.settings)
    const players = playerService.initializePlayers()
    const cards = await cardService.initializeCards()

    this.store.setState({ players, cards, areCardsLoading: false })
  }

  protected startGame() {}

  protected resetGame() {
    this.context.turnService.resetTurn()

    this.store.setState((state) => {
      state.isFinished = false
      state.areCardsLoading = true
    })
  }

  protected endGame() {
    this.store.setState({ isFinished: true })
  }

  protected registerCardRef(element: HTMLElement) {
    this.store.setState((state) => {
      state.refs.cards.push(castDraft(element))
    })

    return () => {
      const elementIndex = this.store.getState().refs.cards.indexOf(element)

      this.store.setState((state) => {
        state.refs.cards.splice(elementIndex, 1)
      })
    }
  }
}
