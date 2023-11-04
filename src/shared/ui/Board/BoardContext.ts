import { createContext, useContext } from 'react'

type BoardContext = {
  cardElements: HTMLButtonElement[]
  registerCardElement: (element: HTMLButtonElement) => () => void
}

export const BoardContext = createContext<BoardContext | null>(null)

export const useBoardContext = () => useContext(BoardContext) as BoardContext
