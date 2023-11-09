import { castDraft } from 'immer'

import { GameSettings } from '@/modules/game-settings'
import { ImmerStateCreator } from '@/shared/types/state'

import { GameState, GameBaseStateSlice } from './types'
import { GameService } from '../services/GameService'

export const createGameStateSlice: ImmerStateCreator<
  GameState,
  GameBaseStateSlice
> = (set, get) => ({
  players: [],
  cards: [],
  areCardsLoading: true,
  isFinished: false,

  refs: {
    cards: [],
  },

  actions: {
    startGame: async (settings: GameSettings) => {
      get().actions.resetGame()

      const gameService = new GameService(settings)
      const players = gameService.initializePlayers()
      const cards = await gameService.initializeCards()

      set({ players, cards, areCardsLoading: false })
    },

    resetGame: () => {
      get().turn.actions.resetTurn()

      set((state) => {
        state.isFinished = false
        state.areCardsLoading = true
      })
    },

    endGame: () => {
      set({ isFinished: true })
    },

    registerCardRef: (element: HTMLElement) => {
      set((state) => {
        state.refs.cards.push(castDraft(element))
      })

      return () => {
        const elementIndex = get().refs.cards.indexOf(element)

        set((state) => {
          state.refs.cards.splice(elementIndex, 1)
        })
      }
    },
  },
})
