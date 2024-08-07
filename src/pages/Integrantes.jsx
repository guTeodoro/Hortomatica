import React from 'react'
import BarraFixa from '../components/BarraFixa'
import perfilIcon from '/perfil-icon.png'

function Integrantes() {
  return (
    <div>
      <BarraFixa />
      <h1>Integrantes:</h1>
      <section>
        <img src={perfilIcon} alt="" />
        <p>Thiago Teodoro</p>
      </section>
      <section>
        <img src={perfilIcon} alt="" />
        <p>Gustavo Teodoro</p>
      </section>
      <section>
        <img src={perfilIcon} alt="" />
        <p>Gabriel Pereira</p>
      </section>
    </div>
  )
}

export default Integrantes
