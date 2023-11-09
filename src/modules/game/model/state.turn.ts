import { merge } from 'remeda'

import { ImmerStateCreator } from '@/shared/types/state'

import { selectCurrentPlayer } from './selectors'
import {
  GameCard,
  GameState,
  GameTurnPhase,
  GameTurnState,
  GameTurnStateSlice,
} from './types'

const GAME_TURN_PHASE_TO_TIMER_VALUE = {
  [GameTurnPhase.ACTION]: 5,
  [GameTurnPhase.COOLDOWN]: 3,
}

let turnTimerInterval: NodeJS.Timeout

const defaultState: GameTurnState = {
  timer: GAME_TURN_PHASE_TO_TIMER_VALUE[GameTurnPhase.ACTION],
  phase: GameTurnPhase.ACTION,
  playerIndex: 0,
  selectedCards: [],
  isFinished: false,
}

export const createTurnStateSlice: ImmerStateCreator<
  GameState,
  GameTurnStateSlice
> = (set, get) => ({
  turn: {
    ...defaultState,

    actions: {
      selectCard: (card: GameCard) => {
        const previouslySelectedCard = get().turn.selectedCards[0]
        const isMatch = previouslySelectedCard?.id === card.id

        if (isMatch) {
          set((state) => {
            state.turn.selectedCards = []
            const currentPlayer = selectCurrentPlayer(state)
            currentPlayer.cards = [...currentPlayer.cards, card]
          })

          get().turn.actions.resetTurnTimer()
        } else {
          const selectedCards = [...get().turn.selectedCards, card]

          set((state) => {
            state.turn.selectedCards = selectedCards
          })

          if (selectedCards.length === 2) {
            get().turn.actions.endTurn()
          }
        }
      },

      setTurnPhase: (phase: GameTurnPhase) => {
        set((state) => {
          state.turn.timer = GAME_TURN_PHASE_TO_TIMER_VALUE[phase]
          state.turn.phase = phase
        })
      },

      startTurnTimer: () => {
        turnTimerInterval = setInterval(() => {
          set((state) => {
            state.turn.timer--
          })
        }, 1000)
      },

      stopTurnTimer: () => {
        clearInterval(turnTimerInterval)
      },

      restartTurnTimer: () => {
        get().turn.actions.stopTurnTimer()
        get().turn.actions.startTurnTimer()
      },

      resetTurnTimer: () => {
        set((state) => {
          state.turn.timer =
            GAME_TURN_PHASE_TO_TIMER_VALUE[GameTurnPhase.ACTION]
        })

        get().turn.actions.restartTurnTimer()
      },

      nextTurn: () => {
        set((state) => {
          state.turn.isFinished = false
          state.turn.selectedCards = []

          const isLastPlayerTurn =
            state.turn.playerIndex === state.players.length - 1

          if (isLastPlayerTurn) {
            state.turn.playerIndex = 0
          } else {
            state.turn.playerIndex += 1
          }
        })

        get().turn.actions.setTurnPhase(GameTurnPhase.ACTION)
      },

      endTurn: () => {
        set((state) => {
          state.turn.isFinished = true
        })

        get().turn.actions.setTurnPhase(GameTurnPhase.COOLDOWN)
      },

      resetTurn: () => {
        set((state) => {
          merge(state.turn, defaultState)
        })
      },
    },
  },
})
