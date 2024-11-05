import React from 'react'
import BarraFixa from '../components/BarraFixa'
import placaArduino from '/placa-arduino.png'
import jumpers from '/jumpers.png'
import lampadaI from '/LI.webp'
import moduloRele from '/modulo-rele.png'
import fonteChaveada from '/fonte-chaveada.png'
import LUV from '/UV.webp'
import sensorUmidade from '/sensor-de-umidade.png'
import miniBomba from '/mini-bomba.jpg'
import mangueiraAquario from '/mangueira-aquario.png'
import fioParalelo from '/fio-paralelo.png'
import fundoComponentes from '/fundo_componentes.png'
import ST from '/sensor-temp.webp'
import bluetooth from '/bluetooth.webp'

function Componentes() {
  return (
    <div className=''>

        <BarraFixa />

      <section className='flex items-center justify-center bg-[url("/fundo_componentes.png")] bg-cover bg-top w-full h-[272px] lg:bg-none'>

            <section className="flex">
                  <section className='bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:h-28 lg:mt-0 lg:w-96 lg:mr-72 lg:ml-10 lg:hidden'>
                        <h1 className='text-white w-44 text-2xl font-bold text-center mr-2 mb-2 lg:text-4xl lg:mr-20'>Componentes:</h1>
                  </section>

                  <section className="bg-purple-700 w-72 h-24 ml-3 mt-16 absolute z-0 lg:h-28 lg:mt-4 lg:mr-[754px] lg:w-96 lg:ml-14 lg:hidden">
                        <p className="text-purple-700">a</p>
                  </section>
            </section>

            <section className="block mt-[480px] justify-center items-center mob:hidden">
                  <section className="flex">
                        <section className='bg-black h-24 flex items-center justify-center w-72 mt-14 relative z-10 lg:h-28 lg:mt-0 lg:w-96 lg:mr-72 lg:ml-10'>
                              <h1 className='text-white w-44 text-2xl font-bold text-center mr-2 mb-2 lg:text-4xl lg:mr-20'>Componentes:</h1>
                        </section>

                        <section className="bg-purple-700 w-72 h-24 ml-5 mt-20 absolute z-0 lg:h-28 lg:mt-4 lg:mr-[754px] lg:w-96 lg:ml-14">
                              <p className="text-purple-700">a</p>
                        </section>
                  </section>
                  <section className='mob:hidden'>
            <           li className='w-[466px] mb-10 font-bold leading-5 mt-24 ml-10 text-xl'>Placa Arduino Uno: Serve para ligar a parte física com a digital;</li>
                  </section>

                  <section className='mob:hidden'>
            <           li className='w-[466px] mb-10 font-bold leading-5 mt-0 ml-10 text-xl'>Preço: R$ 89,90</li>
                  </section>
            </section>
            

            <section className='z-10'>
                  <img src="/placa-arduino.png" alt="" className='mob:hidden ml-0 mr-28 z-20 mb-16 border-2 border-black mt-[488px] w-[352px]' />
            </section>

            <section className="bg-purple-700 w-[352px] h-60 ml-[664px] mr-0 mt-[488px] absolute z-0 mob:hidden">
                  <p className="text-purple-700">a</p>
            </section>

      </section>



      <section className='bg-purple-700 text-purple-700 w-full h-3 mt-96 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-6 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9 lg:hidden'>
            <hr className='border-4 border-white w-56 mb-9' />
            <li className='w-64 mb-10 font-bold leading-5'>Placa Arduino Uno: Serve para ligar a parte física com a digital</li>
            <li className='w-64 mb-10 font-bold leading-5'>Preço: R$ 89,90</li>

            <section>
                  <img src="/placa-arduino.png" alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-24 absolute z-0">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-6'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14'>
                  <p>a</p>
            </section>
            
      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:mt-0 lg:flex-row-reverse lg:bg-black lg:pb-8'>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Jumpers: servem para fazer as conexões entre diversos componentes</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Preço: R$ 23,60</li>
            </section>
            
            <section>
                  <img src={jumpers} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-40 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4 lg:hidden'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6 lg:hidden'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9 lg:bg-white lg:pb-8 lg:flex-row'>
            <hr className='border-4 border-white w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Lâmpada Incandescente: Serve para aquecer o solo</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Preço: R$ 23,99</li>
            </section>

            <section>
                  <img src={lampadaI} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-[250px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-28 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-6 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14 lg:hidden'>
                  <p></p>
            </section>

      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-3 mt-0 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-6 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:bg-black lg:pb-8 lg:flex-row-reverse '>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>3 Módulo Relé 5V: Acionar e desacionar cargas</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Preço: R$ 20,70</li>
            </section>
            
            <section>
                  <img src={moduloRele} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-36 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6 lg:hidden'>
                  <p></p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9 lg:bg-white lg:pb-8 lg:flex-row'>
            <hr className='border-4 border-white w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Fonte Chaveada 12V 1A: Fornecer energia necessária para a placa arduino</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Preço: R$ 14,90</li>
            </section>
            
            <section>
                  <img src={fonteChaveada} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-28 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-6 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14 lg:hidden'>
                  <p></p>
            </section>

      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-3 mt-0 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-6 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:bg-black lg:pb-8 lg:flex-row-reverse'>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Lâmpada UV: Serve para ajudar a planta a fazer a fotossíntese</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Preço: R$ 36,90</li>             
            </section>

            <section>
                  <img src={LUV} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-[250px] lg:mt-12 lg:mr-64 lg:ml-14'/>
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-44 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6 lg:hidden'>
                  <p></p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9 lg:bg-white lg:pb-8 lg:flex-row'>
            <hr className='border-4 border-white w-56 mb-9 lg;hidden' />           
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[444px] lg:mr-0 lg:text-xl'>Sensor de Umidade: Serve para medir a umidade atual do solo.</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[444px] lg:mr-0 lg:text-xl'>Preço: R$ 7,90</li>
            </section>
            
            <section>
                  <img src={sensorUmidade} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-[352px] lg:ml-64'/>
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-44 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[824px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-6 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14 lg:hidden'>
                  <p></p>
            </section>

      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-3 mt-0 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-6 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:bg-black lg:pb-8 lg:flex-row-reverse'>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Mini Bomba de água: Possui pequenos pistões que se movem de forma cordenada, assim fazendo com que a água seja bombeada</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Preço: R$ 37,89</li>
            </section>
            
            <section>
                  <img src={miniBomba} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[358px] lg:h-64 lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-56 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[640px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6 lg:hidden'>
                  <p></p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9 lg:bg-white lg:pb-8 lg:flex-row'>
            <hr className='border-4 border-white w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Mangueira de Aquário: Serve para transferir a água para onde for nessessário</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Preço: R$16,99</li>
            </section>
            
            <section>
                  <img src={mangueiraAquario} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-36 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-4 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-8 lg:hidden'>
                  <p></p>
            </section>
            
      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-3 mt-0 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-6 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:mt-0 lg:flex-row-reverse lg:bg-black lg:pb-8'>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Sensor de Temperatura (DS18B20): Serve para medir a temperatura do solo</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Preço: R$ 12,00</li>
            </section>
            
            <section>
                  <img src={ST} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-64 lg:mt-12 lg:mr-64 lg:ml-14' />
            </section> 

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-44 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-14">
                  <p className="text-purple-700">a</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4 lg:hidden'>
                  <p>a</p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-6 lg:hidden'>
                  <p>a</p>
            </section>

      </section>

      <section className='bg-black text-white flex flex-col justify-center items-center pt-9 lg:bg-white lg:pb-8 lg:flex-row'>
            <hr className='border-4 border-white w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Módulo Bluetooth HC05: Serve para fazer a comunicação entre a placa arduino e o aplicativo</li>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Preço: R$ 39,90</li>
            </section>
            
            <section>
                  <img src={bluetooth} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-20 border-2 border-black lg:w-[352px] lg:h-[250px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-36 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-purple-700 text-purple-700 w-full h-6 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-14 lg:hidden'>
                  <p></p>
            </section>

      </section>

      <section className='bg-purple-700 text-purple-700 w-full h-3 mt-0 mob:hidden'>
            <p></p>
      </section>

      <section className='bg-green-400 text-green-400 w-full h-6 mob:hidden'>
            <p></p>
      </section>

    </div>
  )
}

export default Componentes