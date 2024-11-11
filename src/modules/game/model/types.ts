export type Card = {
  id: string
  image: {
    url: string
    width: number
    height: number
  }
}

export type Player = {
  id: number
}

export type GameTurn = {
  playerIndex: number
  selectedCards: GameCard[]
  isFinished: boolean
  timer: number
  phase: GameTurnPhase
}

export enum GameTurnPhase {
  ACTION = 'ACTION',
  COOLDOWN = 'COOLDOWN',
}

export type GameCard = Card & {
  index: number
}

export type GamePlayer = Player & {
  cards: GameCard[]
  score: number
}
