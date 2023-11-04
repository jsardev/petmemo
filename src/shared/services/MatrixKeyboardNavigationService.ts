import { KeyboardEventKey } from '../types/dom'
import { focusNextElement } from '../utils/dom'

export class MatrixKeyboardNavigationService {
  constructor(
    private elements: HTMLElement[],
    private matrixSize: number,
  ) {}

  private _focusNextElement(indexDelta: number) {
    return focusNextElement(this.elements, indexDelta)
  }

  handleKey(key: string) {
    switch (key) {
      case KeyboardEventKey.ARROW_LEFT: {
        this._focusNextElement(-1)
        return
      }
      case KeyboardEventKey.ARROW_RIGHT: {
        this._focusNextElement(1)
        return
      }
      case KeyboardEventKey.ARROW_UP: {
        this._focusNextElement(-this.matrixSize)
        return
      }
      case KeyboardEventKey.ARROW_DOWN: {
        this._focusNextElement(this.matrixSize)
        return
      }
      default:
        return
    }
  }
}
