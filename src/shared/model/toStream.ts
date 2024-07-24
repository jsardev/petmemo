import { Observable } from 'rxjs'
import { StoreApi } from 'zustand'

/**
 * This is a copy-pasted type from
 * https://github.com/pmndrs/zustand/blob/a836356b5e4062abde852af3ba5ee6fc3f1a41fe/src/middleware/subscribeWithSelector.ts#L28-L40
 *
 *
 */
type StoreSubscribeWithSelector<T> = {
  subscribe: {
    (listener: (selectedState: T, previousSelectedState: T) => void): () => void
    <U>(
      selector: (state: T) => U,
      listener: (selectedState: U, previousSelectedState: U) => void,
      options?: {
        equalityFn?: (a: U, b: U) => boolean
        fireImmediately?: boolean
      },
    ): () => void
  }
}

type ToStreamOptions = {
  fireImmediately?: boolean
}

/**
 * This file is a copy-pasted and modified version of
 * https://github.com/patdx/zustand-rx/blob/main/libs/zustand-rx/src/lib/zustand-rx.ts
 *
 * TODO: Move to zustand-rx package after the following issue will be resolved:
 * https://github.com/patdx/zustand-rx/issues/944
 */
export const toStream = <TState, TValue>(
  store: StoreApi<TState> & StoreSubscribeWithSelector<TState>,
  selector: (value: TState) => TValue,
  { fireImmediately }: ToStreamOptions = {},
): Observable<TValue> => {
  return new Observable<TValue>((subscriber) => {
    if (fireImmediately) {
      subscriber.next(selector(store.getState()))
    }
    const unsubscribe = store.subscribe(selector, (value) => {
      subscriber.next(value)
    })
    return () => unsubscribe()
  })
}
