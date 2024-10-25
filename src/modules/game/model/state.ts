import { produce } from 'immer'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

import { GameSettings } from '@/modules/game-settings'

import { GamePlayer, GameCard, GameTurn } from './types'
import { GameService } from '../services/GameService'

export type GameState = {
  players: GamePlayer[]
  cards: GameCard[]
  areCardsLoading: boolean
  turn: GameTurn
  isReady: boolean
  isFinished: boolean

  refs: {
    cards: Array<HTMLElement>
  }

  startGame: (settings: GameSettings) => void
  endGame: () => void
  selectCard: (card: GameCard) => void
  endTurn: () => void

  registerCardRef: (element: HTMLElement) => () => void
}

export const useGameState = create(
  subscribeWithSelector<GameState>((set, get) => ({
    players: [],
    cards: [],
    areCardsLoading: true,
    turn: {
      playerIndex: 0,
      selectedCards: [],
      isFinished: false,
    },
    isReady: false,
    isFinished: false,

    refs: {
      cards: [],
    },

    startGame: async (settings: GameSettings) => {
      set(
        produce((state: GameState) => {
          state.isReady = true
          state.isFinished = false
          state.areCardsLoading = true
          state.turn.playerIndex = 0
          state.turn.selectedCards = []
          state.turn.isFinished = false
        }),
      )

      const gameService = new GameService(settings)
      const players = gameService.initializePlayers()
      const cards = await gameService.initializeCards()

      set({
        players,
        cards,
        areCardsLoading: false,
      })
    },

    endGame: () => {
      set({ isFinished: true })
    },

    selectCard: (card: GameCard) => {
      const previouslySelectedCard = get().turn.selectedCards[0]

      set(
        produce((state: GameState) => {
          const isMatch = previouslySelectedCard?.id === card.id

          if (isMatch) {
            state.turn.selectedCards = []

            const currentPlayer = state.players[state.turn.playerIndex]
            currentPlayer.cards = [...currentPlayer.cards, card]
          } else {
            const selectedCards = [...state.turn.selectedCards, card]

            state.turn.selectedCards = selectedCards

            if (selectedCards.length === 2) {
              state.turn.isFinished = true
            }
          }
        }),
      )
    },

    endTurn: () => {
      set(
        produce((state: GameState) => {
          const isLastPlayerTurn =
            state.turn.playerIndex === state.players.length - 1

          if (isLastPlayerTurn) {
            state.turn.playerIndex = 0
          } else {
            state.turn.playerIndex += 1
          }

          state.turn.isFinished = false
          state.turn.selectedCards = []
        }),
      )
    },

    registerCardRef: (element: HTMLElement) => {
      set(
        produce((state: GameState) => {
          state.refs.cards.push(element)
        }),
      )

      return () => {
        const elementIndex = get().refs.cards.indexOf(element)

        set(
          produce((state: GameState) => {
            state.refs.cards.splice(elementIndex, 1)
          }),
        )
      }
    },
  })),
)
