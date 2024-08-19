import Inicio from "./pages/Inicio"
import Componentes from "./pages/Componentes"
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import Funcionamento from "./pages/Funcionamento"
import Referencias from "./pages/Referencias"
import Integrantes from "./pages/Integrantes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/componentes",
    element: <Componentes />
  },
  {
    path: "/referencias",
    element: <Referencias />
  },
  {
    path: "/integrantes",
    element: <Integrantes />
  },
  {
    path: "/funcionamento",
    element: <Funcionamento />
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
