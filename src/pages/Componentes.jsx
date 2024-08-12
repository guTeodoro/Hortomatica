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
import fundoComponentes from '/fundo_componentes.png'

function Componentes() {
  return (
    <div className=''>

        <BarraFixa />

      <section className='flex items-center justify-center bg-[url("/fundo_componentes.png")] bg-cover bg-top w-full h-[272px] lg:bg-none'>
            <section className='bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10'>
                  <h1 className='text-white w-44 text-2xl font-bold text-center mr-2 mb-2'>Componentes:</h1>
            </section>

            <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>
      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-white w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Placa Arduino Uno: Serve para ligar a parte física do digital</li>

            <section>
                  <img src="/placa-arduino.png" alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-12 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-6'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14'>
                  <p>a</p>
            </section>
            
      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-black w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Jumpers: servem para fazer as conexões entre diversos componentes</li>
            
            <section>
                  <img src={jumpers} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-28 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-white w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Fonte de Alimentação Arduino 9VDC 1A: É utilizado para alimentar o Arduino Uno</li>
            
            <section>
                  <img src={fonteAlimentacao} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-16 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-6'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-black w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Módulo Relé 5V 10A: Acionar e desacionar cargas</li>
            
            <section>
                  <img src={moduloRele} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-24 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-white w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Fonte Chaveada 12V 1A: Fornecer energia necessária para equipamentos que requerem uma alimentação 12V com uma corrente máxima 1A</li>
            
            <section>
                  <img src={fonteChaveada} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-28 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-6'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-black w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Adaptador Fêmea com conexões para plug P4: Serve para fazer uma ligação com a Fonte Chaveada. P4 é uma fonte que converte tensões</li>
            
            <section>
                  <img src={adaptadorFemea} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black'/>
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-40 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-white w-56 mb-9' />           
            <li className='w-64 mb-10 font-bold leading-5'>Sensor de Umidade: Serve para medir a umidade atual do solo. Funcionando pelo contado com o solo e fazendo uma leitura da umidade relativa do solo por comparação com a resistência</li>
            
            <section>
                  <img src={sensorUmidade} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black'/>
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-36 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-6'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-black w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Mini Bomba de água: Possui pequenos pistões que se movem de forma cordenada, assim fazendo com que a água seja bombeada</li>
            
            <section>
                  <img src={miniBomba} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-40 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9'>
            <hr className='border-4 border-white w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Mangueira de Aquário: Serve para transferir a água para onde for nessessário</li>
            
            <section>
                  <img src={mangueiraAquario} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-16 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-4'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-8'>
                  <p>a</p>
            </section>
            
      </section>
    </div>
  )
}

export default Componentes