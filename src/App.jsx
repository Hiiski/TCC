import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from "./pages/Home"
import { Guia } from "./pages/Guia"
import { Peças } from "./pages/Peças"
import { Referencias } from "./pages/Referencias"
import { Equipe } from "./pages/Equipe"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "Guia",
      element: <Guia />,
    },
    {
      path: "Peças",
      element: <Peças />,
    },
    {
      path: "Referencias",
      element: <Referencias />,
    },
    {
      path: "Equipe",
      element: <Equipe />,
    },
])

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
