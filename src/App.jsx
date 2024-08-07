import Inicio from "./pages/Inicio"
import Componentes from "./pages/Componentes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Funcionamento from "./pages/Funcionamento"
import Referencias from "./pages/Referencias"
import Integrantes from "./pages/Integrantes"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/componentes" element={<Componentes />}/>
        <Route path="/funcionamento" element={<Funcionamento />}/>
        <Route path="/referencias" element={<Referencias />}/>
        <Route path="/integrantes" element={<Integrantes />}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}
