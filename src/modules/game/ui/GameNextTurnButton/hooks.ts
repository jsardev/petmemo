import { useEffect, useRef } from 'react'

import { useTurn } from '../../model'

export const useFocusElementOnTurnEnd = <T extends HTMLElement>() => {
  const ref = useRef<T>(null)
  const { isFinished } = useTurn()

  useEffect(() => {
    if (isFinished) {
      ref.current?.focus()
    }
  }, [isFinished, ref])

  return ref
}
