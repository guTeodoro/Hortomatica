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
import bateria from '/bateria.jpg'
import resistores from '/resistores.jpg'
import protoboard from '/protoboard.jpg'
import FC from '/fio-de-cobre.webp'
import CB from '/conector-de-bateria.jpg'
import tomadas from '/tomadas.webp'

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
            <           li className='w-[466px] mb-10 font-bold leading-5 mt-24 ml-10 text-xl'>Placa Arduino Uno: "Cérebro" do projeto, utilizado para enviar as informações do código para os demais componentes.</li>
                  </section>

                  <section className='mob:hidden'>
            <           li className='w-[240px] mb-10 font-bold leading-5 mt-0 ml-10 text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:text-white'>Preço: R$ 89,90</li>
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
            <li className='w-64 mb-10 font-bold leading-5'>Placa Arduino Uno: "Cérebro" do projeto, utilizado para enviar as informações do código para os demais componentes.</li>
            <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black flex justify-center items-center leading-5'>Preço: R$ 89,90</li>

            <section>
                  <img src="/placa-arduino.png" alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-40 absolute z-0">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Jumpers: Pequenos fios utilizados para fazer a maioria das conexões entre componentes do projeto.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 23,60</li>
            </section>
            
            <section>
                  <img src={jumpers} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-52 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Módulo Bluetooth HC-05: Módulo responsável pela conexão bluetooth, assim gerando a interatividade entre o aplicativo e protótipo.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none'>Preço: R$ 39,90</li>
            </section>
            
            <section>
                  <img src={bluetooth} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-20 border-2 border-black lg:w-[352px] lg:h-[250px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-48 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Módulos Relé 5V: Utilizados para ligar/desligar certos componentes, como as lâmpadas.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 20,70</li>
            </section>
            
            <section>
                  <img src={moduloRele} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-48 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Fonte Chaveada 12V 1A: Fornece energia necessária para a placa Arduino.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none'>Preço: R$ 14,90</li>
            </section>
            
            <section>
                  <img src={fonteChaveada} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-14 lg:ml-64' />
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

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:mt-0 lg:flex-row-reverse lg:bg-black lg:pb-8'>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Sensor de Temperatura DS18B20: Sensor a prova d'água utilizado para medir a temperatura interna do solo.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 12,00</li>
            </section>
            
            <section>
                  <img src={ST} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-64 lg:mt-12 lg:mr-64 lg:ml-14' />
            </section> 

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-56 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-14">
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
            <hr className='border-4 border-white w-56 mb-9 lg;hidden' />           
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[444px] lg:mr-0 lg:text-xl'>Sensor de Umidade Resistivo: Sensor utilizado para medir a umidade do solo por meio de sua resistência.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none '>Preço: R$ 7,90</li>
            </section>
            
            <section>
                  <img src={sensorUmidade} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-[352px] lg:ml-64'/>
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-40 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[824px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Mini Bomba d'Água 12v: Possui pequenos pistões que se movem de forma cordenada, assim fazendo com que a água seja bombeada.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 37,89</li>
            </section>
            
            <section>
                  <img src={miniBomba} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[358px] lg:h-64 lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-60 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[640px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Mangueira de Aquário: Por meio da bomba, serve para transferir a água para o solo da horta.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none'>Preço: R$16,99</li>
            </section>
            
            <section>
                  <img src={mangueiraAquario} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-48 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
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

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:bg-black lg:pb-8 lg:flex-row-reverse'>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Lâmpada Ultravioleta: Lâmpada que emite raios UV, assim simulando o papel do Sol para a planta, dessa maneira permitindo a planta realizar a fotossíntese.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 36,90</li>             
            </section>

            <section>
                  <img src={LUV} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-[250px] lg:mt-12 lg:mr-64 lg:ml-14'/>
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-64 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Lâmpada Incandescente: Ao ser ligada, com o passar do tempo sua temperatura aumenta, assim aquecendo o solo.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none'>Preço: R$ 23,99</li>
            </section>

            <section>
                  <img src={lampadaI} alt="" className='w-[272px] h-52 mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-[250px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-48 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Resistores: Utilizados para regular a carga que é enviada para determinados componentes, assim evitando a sobrecarga.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 1,40</li>
            </section>
            
            <section>
                  <img src={resistores} alt="" className='w-[272px] h-[200px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-[244px] lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-56 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>2 Plugs de Tomada (2 Pinos): Usados para fornecer eneria para as lâmpadas.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none'>Preço: R$ 10,00</li>
            </section>
            
            <section>
                  <img src={tomadas} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-44 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
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

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:bg-black lg:pb-8 lg:flex-row-reverse '>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Protoboard de 830 Pontos: Placa de ensaio que serve para facilitar conexões entre diferentes componentes, sem que seja feita uma solda.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 12,90</li>
            </section>
            
            <section>
                  <img src={protoboard} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-56 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Baterias de 9v: Utilizadas para fornecer energia para a bomba d'água.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none'>Preço: R$ 16,00</li>
            </section>
            
            <section>
                  <img src={bateria} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-44 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
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

      <section className='bg-white text-black flex flex-col justify-center items-center pt-9 lg:bg-black lg:pb-8 lg:flex-row-reverse '>
            <hr className='border-4 border-black w-56 mb-9 lg:hidden' />
            <section>
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-white lg:w-[466px] lg:ml-12 lg:text-xl'>Conector de bateria 9v: Usado como "base", assim facilitando a ligação da bateria entre fios, relés e bomba d'água.</li>
                  <li className='w-64 mb-10 font-bold bg-black py-3 rounded-xl text-white leading-5 lg:text-black lg:w-[240px] lg:ml-12 lg:text-xl flex items-center justify-center lg:bg-white lg:py-5 lg:rounded-l-xl lg:rounded-r-none'>Preço: R$ 6,90</li>
            </section>
            
            <section>
                  <img src={CB} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-[244px] lg:mt-12 lg:mr-64 lg:ml-14' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-56 absolute z-0 lg:w-[352px] lg:h-60 lg:mr-[644px] lg:mt-12">
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
                  <li className='w-64 mb-10 font-bold leading-5 lg:text-black lg:w-[466px] lg:mr-0 lg:text-xl'>Fio de Cobre 1,5mm (5 metros): Fios elétricos são necessários para certos componentes, no projeto foi usado fios elétricos pra realizar a ligação entre as lâmpadas, relés e tomadas.</li>
                  <li className='w-64 mb-10 font-bold bg-white py-3 rounded-xl text-black leading-5 lg:text-white lg:w-[240px] lg:mr-0 lg:text-xl flex items-center justify-center lg:bg-black lg:py-5 lg:rounded-r-xl lg:rounded-l-none'>Preço: R$ 5,85</li>
            </section>
            
            <section>
                  <img src={FC} alt="" className='w-[272px] mr-5 relative z-10 mb-16 border-2 border-black lg:w-[352px] lg:h-[234px] lg:mt-12 lg:mr-14 lg:ml-64' />
            </section>

            <section className="bg-purple-700 w-[272px] h-44 ml-8 mt-52 absolute z-0 lg:w-[352px] lg:h-60 lg:ml-[720px] lg:mt-12">
                  <p className="text-purple-700">a</p>
            </section>
            
            <section className='bg-white py-6 rounded-xl text-black w-64 h-4 lg:hidden mb-7 font-semibold text-lg flex items-center justify-center'>
                  <p>Custo Total: R$ 377,72</p>
            </section>

            <section className='bg-purple-700 text-purple-700 w-full h-4 lg:hidden'>
                  <p></p>
            </section>

            <section className='bg-green-400 text-green-400 w-full h-8 lg:hidden'>
                  <p></p>
            </section>
            
      </section>

      <section className='bg-black py-6 rounded-xl text-white w-full h-4 mb-7 font-bold text-xl flex items-center justify-center'>
            <p>Custo Total: R$ 377,72</p>
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