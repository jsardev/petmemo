import { castDraft } from 'immer'

import { GameSettings } from '@/modules/game-settings'
import { ImmerStateCreator } from '@/shared/types/state'

import { listenToTurnTimer } from './subscriptions'
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
    prepareGame: async (settings: GameSettings) => {
      get().actions.resetGame()

      const gameService = new GameService(settings)
      const players = gameService.initializePlayers()
      const cards = await gameService.initializeCards()

      set({ players, cards, areCardsLoading: false })
    },

    startGame: () => {
      get().turn.actions.startTurnTimer()

      // TODO: refactor to observable that only emits on timer finished
      const unsubscribeFromTurnTimer = listenToTurnTimer((timer) => {
        if (timer === 0) {
          get().turn.actions.nextTurnPhase()
        }
      })

      return () => {
        get().turn.actions.stopTurnTimer()
        unsubscribeFromTurnTimer()
      }
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
