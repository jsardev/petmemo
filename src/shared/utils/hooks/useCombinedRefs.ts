import { ForwardedRef, useEffect, useRef } from 'react'

export const useCombinedRefs = <T extends HTMLElement>(
  ...refs: ForwardedRef<T | null>[]
) => {
  const combinedRef = useRef<T>(null)

  useEffect(() => {
    if (combinedRef.current) {
      refs.forEach((ref) => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(combinedRef.current)
          } else {
            ref.current = combinedRef.current
          }
        }
      })
    }
  }, [refs])

  return combinedRef
}
