// @vitest-environment happy-dom

import { vi, test, expect, beforeEach } from 'vitest'

import { focusNextElement } from './dom'

let elements: HTMLElement[] = []

beforeEach(() => {
  elements = [...new Array(9)].map(createMockHTMLElement)
})

test('should focus next element', () => {
  setActiveElement(2)

  focusNextElement(elements, 1)

  expect(elements[3].focus).toBeCalled()
})

test('should focus previous element', () => {
  setActiveElement(2)

  focusNextElement(elements, -1)

  expect(elements[1].focus).toBeCalled()
})

test('should focus next element omitting disabled ones', () => {
  setActiveElement(2)
  setDisabledElements([3, 4])

  focusNextElement(elements, 1)

  expect(elements[5].focus).toBeCalled()
})

test('should focus previous element omitting disabled ones', () => {
  setActiveElement(4)
  setDisabledElements([2, 3])

  focusNextElement(elements, -1)

  expect(elements[1].focus).toBeCalled()
})

test('should focus first element when going after the last element', () => {
  setActiveElement(8)

  focusNextElement(elements, 1)

  expect(elements[0].focus).toBeCalled()
})

test('should focus last element when going before the first element', () => {
  setActiveElement(0)

  focusNextElement(elements, -1)

  expect(elements[8].focus).toBeCalled()
})

test('should focus next element following the delta pattern (forwards)', () => {
  setActiveElement(4)

  focusNextElement(elements, 3)

  expect(elements[7].focus).toBeCalled()
})

test('should focus next element following the delta pattern (backwards)', () => {
  setActiveElement(4)

  focusNextElement(elements, -3)

  expect(elements[1].focus).toBeCalled()
})

test('should focus next enabled element following the delta pattern (forwards)', () => {
  setActiveElement(4)
  setDisabledElements([7])

  focusNextElement(elements, 3)

  expect(elements[1].focus).toBeCalled()
})

test('should focus next enabled element following the delta pattern (backwards)', () => {
  setActiveElement(4)
  setDisabledElements([1])

  focusNextElement(elements, -3)

  expect(elements[7].focus).toBeCalled()
})

test('should not focus any new element following the delta pattern if all are disabled (forwards)', () => {
  setActiveElement(4)
  setDisabledElements([1, 7])

  focusNextElement(elements, 3)

  expect(elements[4].focus).toBeCalled()
})

test('should not focus any new element following the delta pattern if all are disabled (backwards)', () => {
  setActiveElement(4)
  setDisabledElements([1, 7])

  focusNextElement(elements, -3)

  expect(elements[4].focus).toBeCalled()
})

const createMockHTMLElement = () => {
  const element = new HTMLElement()

  vi.spyOn(element, 'focus')
  vi.spyOn(element, 'hasAttribute')

  return element
}

const setActiveElement = (index: number) => {
  vi.stubGlobal('document', {
    activeElement: elements[index],
  })
}

const setDisabledElements = (indexes: number[]) => {
  indexes.forEach((index) => {
    elements[index].hasAttribute = vi.fn().mockReturnValue(true)
  })
}
