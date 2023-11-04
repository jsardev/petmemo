import { BoardContextProvider } from './BoardContextProvider'

export const withBoardContext =
  <P extends object>(Component: React.FunctionComponent<P>) =>
  (props: P) => (
    <BoardContextProvider>
      <Component {...props} />
    </BoardContextProvider>
  )
