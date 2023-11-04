import { RefObject, useEffect } from 'react'

import { useTurn } from '../..'

export const useFocusButtonOnTurnEnd = (ref: RefObject<HTMLElement>) => {
  const { isFinished } = useTurn()

  useEffect(() => {
    if (isFinished) {
      ref.current?.focus()
    }
  }, [isFinished, ref])
}
