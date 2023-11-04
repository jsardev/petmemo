import { afterAll, beforeAll, expect, test, vi } from 'vitest'

import { MatrixKeyboardNavigationService } from './MatrixKeyboardNavigationService'
import { KeyboardEventKey } from '../types/dom'
import { focusNextElement } from '../utils/dom'

const elements: HTMLElement[] = []
const matrixSize = 3

const matrixKeyboardNavigationService = new MatrixKeyboardNavigationService(
  elements,
  matrixSize,
)

beforeAll(() => {
  vi.mock('../utils/dom', () => ({
    focusNextElement: vi.fn(),
  }))
})

afterAll(() => {
  vi.doUnmock('../utils/dom')
})

test('should handle ArrowUp key', () => {
  matrixKeyboardNavigationService.handleKey(KeyboardEventKey.ARROW_UP)

  expect(focusNextElement).toBeCalledWith(elements, -matrixSize)
})

test('should handle ArrowDown key', () => {
  matrixKeyboardNavigationService.handleKey(KeyboardEventKey.ARROW_DOWN)

  expect(focusNextElement).toBeCalledWith(elements, matrixSize)
})

test('should handle ArrowLeft key', () => {
  matrixKeyboardNavigationService.handleKey(KeyboardEventKey.ARROW_LEFT)

  expect(focusNextElement).toBeCalledWith(elements, -1)
})

test('should handle ArrowRight key', () => {
  matrixKeyboardNavigationService.handleKey(KeyboardEventKey.ARROW_RIGHT)

  expect(focusNextElement).toBeCalledWith(elements, 1)
})
