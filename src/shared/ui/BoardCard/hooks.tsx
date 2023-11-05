import { ForwardedRef, useEffect } from 'react'

import { useCombinedRefs } from '@/shared/utils/hooks/useCombinedRefs'

import { useBoardContext } from '../Board/BoardContext'

export const useBoardCard = (forwardedRef: ForwardedRef<HTMLButtonElement>) => {
  const ref = useCombinedRefs(forwardedRef)
  const { registerCardElement } = useBoardContext()

  useEffect(() => {
    if (ref.current) {
      return registerCardElement(ref.current)
    }
  }, [ref, registerCardElement])

  return { ref }
}
