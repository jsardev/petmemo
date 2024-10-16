import {
  GameStore,
  GameCard,
  GameTurnPhase,
  matchingCardSelected$,
  nextTurn$,
} from '@/modules/game/model'
import { selectCurrentPlayer } from '@/modules/game/model/selectors'

export class TurnService {
  constructor(protected store: GameStore) {}

  selectCard(card: GameCard) {
    const previouslySelectedCard = this.store.getState().turn.selectedCards[0]
    const isMatch = previouslySelectedCard?.id === card.id

    if (isMatch) {
      this.store.setState((state) => {
        state.turn.selectedCards = []
        const currentPlayer = selectCurrentPlayer(state)
        currentPlayer.cards = [...currentPlayer.cards, card]
      })

      matchingCardSelected$.next(card)
    } else {
      const selectedCards = [...this.store.getState().turn.selectedCards, card]

      this.store.setState((state) => {
        state.turn.selectedCards = selectedCards
      })

      if (selectedCards.length === 2) {
        this.endTurn()
      }
    }
  }

  nextTurn() {
    this.store.setState((state) => {
      state.turn.isFinished = false
      state.turn.selectedCards = []

      const isLastPlayerTurn =
        state.turn.playerIndex === state.players.length - 1

      if (isLastPlayerTurn) {
        state.turn.playerIndex = 0
      } else {
        state.turn.playerIndex += 1
      }

      state.turn.phase = GameTurnPhase.ACTION
    })

    nextTurn$.next()
  }

  endTurn() {}

  resetTurn() {
    this.store.setState((state) => {
      state.turn = { ...state.turn, ...this.store.getInitialState().turn }
    })
  }
}
