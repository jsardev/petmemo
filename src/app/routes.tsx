import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainMenuPage } from '../pages/main-menu'

const router = createBrowserRouter([{ path: '/', element: <MainMenuPage /> }])

export const Routing = () => {
  return <RouterProvider router={router} />
}
