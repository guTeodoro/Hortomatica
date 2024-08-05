import ConhecaHortomatica from "../components/Inicio/ConhecaHortomatica"
import Introducao from "../components/Inicio/Introducao"
import BarraFixa from "../components/BarraFixa"

function Inicio() {
  return (
    <div>
      <h1>Inicio</h1>
      <BarraFixa />
      <ConhecaHortomatica />
      <Introducao />
    </div>
  )
}

export default Inicio;
