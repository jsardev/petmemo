import { GameSettings } from '@/modules/game-settings'

export type Player = {
  id: number
}

export type Card = {
  id: string
  image: {
    url: string
    width: number
    height: number
  }
}

export type GamePlayer = Player & {
  cards: GameCard[]
  score: number
}

export type GameCard = Card & {
  index: number
}

export enum GameTurnPhase {
  ACTION = 'ACTION',
  COOLDOWN = 'COOLDOWN',
}

export type GameTurnState = {
  timer: number
  phase: GameTurnPhase
  playerIndex: number
  selectedCards: GameCard[]
  isFinished: boolean
}

export type GameTurnActions = {
  actions: {
    selectCard: (card: GameCard) => void
    setTurnPhase: (phase: GameTurnPhase) => void
    nextTurnPhase: () => void
    startTurnTimer: () => void
    stopTurnTimer: () => void
    restartTurnTimer: () => void
    resetTurnTimer: () => void
    nextTurn: () => void
    endTurn: () => void
    resetTurn: () => void
  }
}

export type GameTurnStateSlice = {
  turn: GameTurnState & GameTurnActions
}

export type GameBaseState = {
  players: GamePlayer[]
  cards: GameCard[]
  areCardsLoading: boolean
  isFinished: boolean
  refs: {
    cards: Array<HTMLElement>
  }
}

export type GameBaseActions = {
  actions: {
    prepareGame: (settings: GameSettings) => Promise<void>
    startGame: () => () => void
    resetGame: () => void
    endGame: () => void
    registerCardRef: (element: HTMLElement) => () => void
  }
}

export type GameBaseStateSlice = GameBaseState & GameBaseActions

export type GameState = GameBaseStateSlice & GameTurnStateSlice
