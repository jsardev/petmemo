import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainMenuPage } from '../pages/MainMenuPage'
import { BoardPage } from '../pages/BoardPage'

const router = createBrowserRouter([
  { path: '/', element: <MainMenuPage /> },
  { path: '/play', element: <BoardPage /> },
])

export const Routing = () => {
  return <RouterProvider router={router} />
}
