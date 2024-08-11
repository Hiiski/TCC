import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from "./pages/Home"
// import { Peças } from './pages/Peças'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "Peças",
        element: <Peças />,
    }
])

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
