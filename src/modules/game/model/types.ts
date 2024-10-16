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

export type GameTurnStateSlice = {
  turn: GameTurnState
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

export type GameBaseStateSlice = GameBaseState

export type GameState = GameBaseStateSlice & GameTurnStateSlice

export enum GameMode {
  SINGLE_PLAYER = 'SINGLE_PLAYER',
  MULTI_PLAYER = 'MULTI_PLAYER',
}
