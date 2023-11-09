import { StateCreator } from 'zustand'

export type ImmerStateCreator<T, S> = StateCreator<
  T,
  [['zustand/immer', never], never],
  [],
  S
>
