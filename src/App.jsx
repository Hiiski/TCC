import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomeMobile } from './pages/HomeMobile'
import { GuiaMobile } from './pages/GuiaMobile'
import { PeçasMobile } from './pages/PeçasMobile'
import { ReferenciasMobile } from './pages/ReferenciasMobile'
import { EquipeMobile } from './pages/EquipeMobile'


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeMobile />,
    },

    {
      path: "Guia",
      element: <GuiaMobile />,
    },
    {
      path: "Peças",
      element: <PeçasMobile />
    },
    {
      path: "Referencias",
      element: <ReferenciasMobile />,
    },
    {
      path: "Equipe",
      element: <EquipeMobile />,
    },
])

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
