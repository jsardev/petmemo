import { useCallback, useMemo } from 'react'

import { MatrixKeyboardNavigationService } from '@/shared/services/MatrixKeyboardNavigationService'

import { useBoardContext } from './BoardContext'

export const useBoard = (matrixSize: number) => {
  const { cardElements } = useBoardContext()

  const matrixKeyboardNavigationService = useMemo(
    () => new MatrixKeyboardNavigationService(cardElements, matrixSize),
    [matrixSize, cardElements],
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      matrixKeyboardNavigationService.handleKey(event.key)
    },
    [matrixKeyboardNavigationService],
  )

  return {
    handleKeyDown,
  }
}
