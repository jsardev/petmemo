// @vitest-environment happy-dom

import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import { useCombinedRefs } from './useCombinedRefs'

test('should copy ref value to all passed instances', () => {
  const refs = [{ current: null }, { current: null }]

  const TestComponent = () => {
    const ref = useCombinedRefs<HTMLDivElement>(...refs)
    return <div ref={ref} />
  }

  const { container } = render(<TestComponent />)

  refs.forEach((ref) => {
    expect(ref.current).toEqual(container.firstChild)
  })
})
