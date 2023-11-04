import { ReactNode, useCallback, useState } from 'react'

import { BoardContext } from './BoardContext'

type BoardContextProviderProps = {
  children: ReactNode
}

export const BoardContextProvider = ({
  children,
}: BoardContextProviderProps) => {
  const [cardElements, setCardElements] = useState<HTMLButtonElement[]>([])

  const registerCardElement = useCallback(
    (element: HTMLButtonElement) => {
      setCardElements((elements) => [...elements, element])
      return () => {
        setCardElements((elements) =>
          elements.filter((item) => item !== element),
        )
      }
    },
    [setCardElements],
  )

  const contextValue = {
    cardElements,
    registerCardElement,
  }

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  )
}
