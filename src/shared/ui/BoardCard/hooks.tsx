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
    // ref does not need to be in the dependency array as it's a RefObject
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerCardElement])

  return { ref }
}
