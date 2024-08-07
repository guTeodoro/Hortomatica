import React from 'react'
import imgHortalicas from '/img-hortalicas.png'
import imgCelular from '/img-celular.png'
import BarraFixa from '../components/BarraFixa'
import imgInicio from "/inicio-img.png"

function Funcionamento() {
  return (
    <div>
        <BarraFixa />
      <h1>Como ela funciona?</h1>
      <section>
      <p>A Hortomática foi projetada para ser simples e eficiente. Possuindo um formato de uma “caixa”, onde a terra é posta, onde por baixo há uma base impermeável, onde ficam os componentes que tornam a Hortomática automatizada. Com sensores que monitoram constantemente o nível de umidade, garantindo que a planta receba a quantidade ideal de água. </p>
      <img src={imgInicio} alt="" className="w-3/12"/>
      </section>
      <section>
        <img src={imgHortalicas} alt="" />
        <p>O usuário registra o tipo de hortaliça que está cultivando por meio de um aplicativo intuitivo, disponível para dispositivos móveis. Com base nas necessidades específicas da planta, a Hortomática ajusta a irrigação automaticamente. Quando o sensor detecta que a umidade está abaixo do ideal, o sistema de irrigação é ativado, garantindo que suas hortaliças estejam sempre bem cuidadas. </p>
      </section>
      <section>
        <img src={imgCelular} alt="" />
        <p>Além disso, o aplicativo notifica o usuário quando a hortaliça está pronta para ser colhida e também quando o tanque esta sem água suficiente para regar a hortaliça, tornando o processo de cultivo ainda mais prático e simples.</p>
      </section>
      <section>
        <h2>Video de Exemplo</h2>
        <h2>Explicação</h2>
      </section>
    </div>
  )
}

export default Funcionamento
