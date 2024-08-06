import React from 'react'
import BarraFixa from '../components/BarraFixa'
import placaArduino from '/placa-arduino.png'
import jumpers from '/jumpers.png'
import fonteAlimentacao from '/fonte-alimentacao.png'
import moduloRele from '/modulo-rele.png'
import fonteChaveada from '/fonte-chaveada.png'
import adaptadorFemea from '/adaptador-femea.png'
import sensorUmidade from '/sensor-de-umidade.png'
import miniBomba from '/mini-bomba-dagua.png'
import mangueiraAquario from '/mangueira-aquario.png'
import fioParalelo from '/fio-paralelo.png'

function Componentes() {
  return (
    <div>
        <BarraFixa />
      <h1>Componentes</h1>
      <section>
            <li>Placa Arduino Uno: Serve para ligar a parte física do digital</li>
            <img src="/placa-arduino.png" alt="" />
      </section>
      <section>
            <li>Jumpers: servem para fazer as conexões entre diversos componentes</li>
            <img src={jumpers} alt="" />
      </section>
      <section>
            <li>Fonte de Alimentação Arduino 9VDC 1A: É utilizado para alimentar o Arduino Uno</li>
            <img src={fonteAlimentacao} alt="" />
      </section>
      <section>
            <li>Módulo Relé 5V 10A: Acionar e desacionar cargas</li>
            <img src={moduloRele} alt="" />
      </section>
      <section>
            <li>Fonte Chaveada 12V 1A: Fornecer energia necessária para equipamentos que requerem uma alimentação 12V com uma corrente máxima 1A</li>
            <img src={fonteChaveada} alt="" />
      </section>
      <section>
            <li>Adaptador Fêmea com conexões para plug P4: Serve para fazer uma ligação com a Fonte Chaveada. P4 é uma fonte que converte tensões</li>
      </section>
      <section>
            <li>Sensor de Umidade: Serve para medir a umidade atual do solo. Funcionando pelo contado com o solo e fazendo uma leitura da umidade relativa do solo por comparação com a resistência</li>
            <img src={sensorUmidade} alt="" />
      </section>
      <section>
            <li>Mini Bomba de água: Possui pequenos pistões que se movem de forma cordenada, assim fazendo com que a água seja bombeada</li>
            <img src={miniBomba} alt="" />
      </section>
      <section>
            <li>Mangueira de Aquário: Serve para transferir a água para onde for nessessário</li>
            <img src={mangueiraAquario} alt="" />
      </section>
    </div>
  )
}

export default Componentes