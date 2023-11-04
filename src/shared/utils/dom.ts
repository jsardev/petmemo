export const focusNextElement = <T extends HTMLElement>(
  elements: T[],
  indexDelta: number,
  index?: number,
): void => {
  const currentIndex = elements.indexOf(document.activeElement as T)
  const newIndex = index ?? currentIndex + indexDelta

  const isBelowRange = newIndex < 0
  const isAboveRange = newIndex >= elements.length

  if (isBelowRange) {
    return focusNextElement(elements, indexDelta, elements.length + newIndex)
  }
  if (isAboveRange) {
    return focusNextElement(elements, indexDelta, newIndex - elements.length)
  }

  const element = elements[newIndex]
  if (element && !element.hasAttribute('disabled')) {
    return element.focus()
  }

  return focusNextElement(elements, indexDelta, newIndex + indexDelta)
}
